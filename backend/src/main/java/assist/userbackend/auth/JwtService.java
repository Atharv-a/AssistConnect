package assist.userbackend.auth;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

// SETTING UP SIGNATURE
    @Value("${jwt.secret}")
    private String secret;
   
    private SecretKey signedKey(){
        byte[] keybytes = Decoders.BASE64.decode(secret);
        return Keys.hmacShaKeyFor(keybytes);

    }

//  TOKEN GENERATION
    public String generateToken(UserDetails userdetails){
        return generateToken(new HashMap<>(), userdetails);
    }

    public String generateToken(
        Map<String,Object> extraClaims,
        UserDetails userDetails
    ){
        return Jwts.builder()
              .claims(extraClaims)
              .subject(userDetails.getUsername())
              .issuedAt(new Date(System.currentTimeMillis()))
              .expiration(new Date(System.currentTimeMillis()+86400000))
              .signWith(signedKey(),SIG.HS256)
              .compact();
    }

// PAYLOAD EXTRACTION
    public String extractUserEmail(String token){
        return extractClaim(token, Claims::getSubject);
    }

    private Date extracExpiration(String token){
        return extractClaim(token, Claims::getExpiration);
    }

    private <T> T extractClaim(String token, Function<Claims,T> ClaimsResolver){
        final Claims claims = extendsAllClaims(token);
        return ClaimsResolver.apply(claims);
    }
    

    private Claims extendsAllClaims(String token){
        return  Jwts.parser()
                    .verifyWith(signedKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
    }

// VERIFYING TOKEN
    public boolean isTokenValid(String token, UserDetails userDetails){
        final String useremail = extractUserEmail(token);
        return (useremail.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token){
        return extracExpiration(token).before(new Date());
    }
}
