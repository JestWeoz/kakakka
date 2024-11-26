package com.example.WebTimTroBA.Model.Search;


import lombok.Getter;
import lombok.Setter;
import org.springframework.context.annotation.Bean;

@Setter
@Getter
public class MotelSearchBuilder {


    private String keyword;

    private Integer houseNumber;

    private String ward;

    private String district;

    private String province;

    private Integer areaFrom;

    private Integer areaTo;

    private Integer priceFrom;

    private String interior;

    private Integer priceTo;

    private String type;

}
