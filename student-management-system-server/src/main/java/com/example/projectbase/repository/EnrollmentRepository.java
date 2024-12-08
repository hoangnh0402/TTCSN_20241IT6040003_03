package com.example.projectbase.repository;

import com.example.projectbase.domain.entity.Classroom;
import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, String> {
    boolean existsByUserAndClassroom(User user, Classroom classroom);
    List<Enrollment> findAllByClassroomId(String classroomId);
    Optional<Enrollment> findByUserAndClassroom(User user, Classroom classroom);
}
