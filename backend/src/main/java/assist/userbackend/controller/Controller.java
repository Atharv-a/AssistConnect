package assist.userbackend.controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import assist.userbackend.Utility;
import assist.userbackend.dto.formdata;
import assist.userbackend.entity.Form;
import assist.userbackend.repository.FormRespository;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequiredArgsConstructor
public class Controller {
    
    private final FormRespository db;
    
    @PostMapping("formdata")
    public ResponseEntity<String> formData(@RequestBody formdata data) {
       if(Utility.formDataCheck(data))return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All fields are required");
       try{
            Form request = Utility.formConverter(data);
            db.save(request);
       }
       catch(Exception e){
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.toString());
       }
       return ResponseEntity.status(HttpStatus.CREATED).body("data stored in DB");
    }

    @GetMapping("/getdata/{id}")
    public ResponseEntity<?> getdata(@PathVariable String id) { 
           try{
  
                Optional<Form> optionalData =db.findById(id);
                if(optionalData.isPresent()){
                    Form form =optionalData.get();
                    formdata data= Utility.dtoConverter(form);
                    return ResponseEntity.status(HttpStatus.OK).body(data);
                }
                return ResponseEntity.status(HttpStatus.OK).body("no data found");
           }
           catch(Exception e){
                 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.toString());
           }
    }
      
}
