package assist.userbackend.form;

import org.springframework.stereotype.Service;

@Service
public class FormMapper {
    public Form toForm(FormRequest request,String email){
        return Form.builder()
                    .id(email)
                   .description(request.description())
                   .servicetype(request.servicetype())
                   .latitude(request.location().getLatitude())
                   .longitude(request.location().getLongitude())
                   .build();
    }
    public FormResponse fromForm(Form form){
        Location location = new Location(form.getLatitude(),form.getLongitude());
        return new FormResponse(
            form.getDescription(),
            form.getServicetype(), 
            location
        );
    }
}
