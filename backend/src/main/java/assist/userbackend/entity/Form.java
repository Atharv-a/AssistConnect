package assist.userbackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "request")
public class Form {

       @Id
       private String id;
       private String description;
       private String servicetype;
       private double latitude;
       private double longitude;
        
}
