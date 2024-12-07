package com.example.projectbase.repository;

import com.example.projectbase.domain.entity.Classroom;
import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, String> {
    boolean existsByUserAndClassroom(User user, Classroom classroom);
}
