package com.example.WebTimTroBA.Repository.Custom;

import com.example.WebTimTroBA.Model.Entity.MotelEntity;
import com.example.WebTimTroBA.Model.Search.MotelSearchBuilder;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MotelRepositoryCustom {
    List<MotelEntity> searchByMotelSearchBuilder(MotelSearchBuilder motelSearchBuilder);
}
