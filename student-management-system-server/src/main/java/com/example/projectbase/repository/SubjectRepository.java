package com.example.projectbase.repository;

import com.example.projectbase.domain.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, String> {
    // Lấy môn học theo mã môn học
    Subject getSubjectByCode(String code);

    // Lấy môn học theo ID (có thể sử dụng phương thức JpaRepository mặc định)
    @Query("SELECT s FROM Subject s WHERE s.id = :id")
    Subject getSubjectById(String id);

    // Lấy môn học theo tên
    List<Subject> getSubjectByName(String name);
}