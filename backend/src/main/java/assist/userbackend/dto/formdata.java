package assist.userbackend.dto;

import lombok.Data;

@Data
public class formdata{
    private String id;
    private String description;
    private String servicetype;
    private Location Location;

    @Data
    public static class Location{
        private double latitude;
        private double longitude;
    }


}