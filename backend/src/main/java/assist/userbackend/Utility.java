package assist.userbackend;

import assist.userbackend.dto.formdata;
import assist.userbackend.dto.formdata.Location;
import assist.userbackend.entity.Form;

public class Utility {
    public static Form formConverter(formdata data){
        Form form = new Form();
        form.setId(data.getId());
        form.setDescription(data.getDescription());
        form.setServicetype(data.getServicetype());
        form.setLatitude(data.getLocation().getLatitude());
        form.setLongitude(data.getLocation().getLongitude());
        return form;
    }
    
    public static formdata dtoConverter(Form form){
        formdata data = new formdata();
        Location location = new Location();
        
        location.setLatitude(form.getLatitude());
        location.setLongitude(form.getLongitude());

        data.setId(form.getId());
        data.setDescription(form.getDescription());
        data.setServicetype(form.getServicetype());
        data.setLocation(location);

        return data;
    }

    public static boolean formDataCheck(formdata data){
        boolean flag = false;
        if(data.getId() == null)flag =true;
        if(data.getServicetype() == null)flag = true;
        if(data.getLocation() == null ) flag = true;
        return flag;
    }
}
