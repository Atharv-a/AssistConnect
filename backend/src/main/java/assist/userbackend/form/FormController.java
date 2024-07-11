package assist.userbackend.form;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/api/form")
@RequiredArgsConstructor
public class FormController {
    
    private final FormService service;
    
    @PostMapping("/submit")
    public ResponseEntity<String> saveForm(@RequestBody @Valid FormRequest request) {
        return ResponseEntity.ok(service.createForm(request));
    }

    @GetMapping("/getdata")
    public ResponseEntity<FormResponse> getdata() { 
       return ResponseEntity.ok(service.findById());
    }
}
