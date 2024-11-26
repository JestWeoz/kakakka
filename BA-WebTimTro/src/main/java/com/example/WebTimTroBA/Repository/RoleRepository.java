package com.example.WebTimTroBA.Repository;

import com.example.WebTimTroBA.Model.Entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Integer> {
    RoleEntity findByRole(String name);
}
