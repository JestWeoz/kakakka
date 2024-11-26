package com.example.WebTimTroBA.Repository;

import com.example.WebTimTroBA.Model.Entity.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface FileRepository extends JpaRepository<FileEntity, Integer>, PagingAndSortingRepository<FileEntity, Integer> {
    List<FileEntity> findByMotelId(Integer id);
}
