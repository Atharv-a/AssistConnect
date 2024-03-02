package assist.userbackend.repository;

import org.springframework.data.repository.CrudRepository;

import assist.userbackend.entity.Form;


public interface FormRespository extends
            CrudRepository<Form,String>{
    
}
