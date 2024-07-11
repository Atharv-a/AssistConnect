package assist.userbackend.form;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import assist.userbackend.user.User;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class FormService {

    private final FormMapper mapper;
    private final FormRespository repository;

    public String createForm(@Valid FormRequest request){
        var form = repository.save(mapper.toForm(request,getEmail()));
        return form.getId();
    }

    public FormResponse findById() {
        return repository.findById(getEmail())
                            .map(mapper::fromForm)
                            .orElseThrow(()-> new EntityNotFoundException(String.format("No user data found with id: %d",getEmail())));
    }

    private String getEmail(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User)authentication.getPrincipal();
        return user.getUsername();
    }

}
