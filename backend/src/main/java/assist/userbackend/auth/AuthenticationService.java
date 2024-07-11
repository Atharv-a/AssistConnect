package assist.userbackend.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import assist.userbackend.config.JwtService;
import assist.userbackend.user.Role;
import assist.userbackend.user.User;
import assist.userbackend.user.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var existingUser = repository.findByEmail(request.getEmail());
        if (existingUser.isPresent()) {
            throw new IllegalArgumentException("An account with this email already exists");

        }
        var user = User.builder()
                        .firstname(request.getFirstname())
                        .lastname(request.getLastname())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .build();

        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                                      .token(jwtToken)
                                      .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(), 
                request.getPassword())
        );
        
        var user = repository.findByEmail(request.getEmail())
                                .orElseThrow();
        
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                                        .token(jwtToken)
                                        .build();
    }

}
