package com.example.WebTimTroBA.Repository;

import com.example.WebTimTroBA.Model.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    boolean existsByPhoneNumber(String phoneNumber);
    boolean existsByEmail(String email);
    boolean existsByUserName(String username);
    Optional<UserEntity> findByUserName(String username);
}
