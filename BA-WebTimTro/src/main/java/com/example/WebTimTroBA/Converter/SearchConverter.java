package com.example.WebTimTroBA.Converter;

import com.example.WebTimTroBA.Model.Search.MotelSearchBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.Map;
import java.util.function.BiConsumer;

@Component
@RequiredArgsConstructor
public class SearchConverter {

    private static final Map<String, BiConsumer<MotelSearchBuilder, String>> fieldSetters = Map.of(
            "keyword", MotelSearchBuilder::setKeyword,
            "houseNumber", (builder, value) -> builder.setHouseNumber(parseInteger(value)),
            "ward", MotelSearchBuilder::setWard,
            "district", MotelSearchBuilder::setDistrict,
            "province", MotelSearchBuilder::setProvince,
            "areaFrom", (builder, value) -> builder.setAreaFrom(parseInteger(value)),
            "areaTo", (builder, value) -> builder.setAreaTo(parseInteger(value)),
            "priceFrom", (builder, value) -> builder.setPriceFrom(parseInteger(value)),
            "priceTo", (builder, value) -> builder.setPriceTo(parseInteger(value)),
            "type", MotelSearchBuilder::setType
    );

    public MotelSearchBuilder toMotelSearchBuilder(Map<String, String> search) {
        MotelSearchBuilder motelSearchBuilder = new MotelSearchBuilder();

        search.forEach((key, value) -> {
            BiConsumer<MotelSearchBuilder, String> setter = fieldSetters.get(key);
            if (setter != null) {
                setter.accept(motelSearchBuilder, value);
            }
        });

        return motelSearchBuilder;
    }

    private static Integer parseInteger(String value) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException e) {
            return null;
        }
    }
}
