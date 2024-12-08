package com.example.projectbase.service;


import com.example.projectbase.domain.dto.response.UserDto;
import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.security.UserPrincipal;

import java.util.List;

public interface EnrollmentService {
    Enrollment registerSubject(UserPrincipal principal, String classroomId);
    public List<UserDto> getAllStudentsInClassroom(String classroomId);
}
