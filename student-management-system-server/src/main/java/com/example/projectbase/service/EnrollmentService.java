package com.example.projectbase.service;


import com.example.projectbase.domain.dto.response.CommonResponseDto;
import com.example.projectbase.domain.dto.response.EnrollmentResponse;
import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.security.UserPrincipal;

import java.util.List;

public interface EnrollmentService {
    Enrollment registerSubject(UserPrincipal principal, String classroomId);
    public List<EnrollmentResponse> getAllStudentsInClassroom(String classroomId);
    public Enrollment addStudentToClassroom(String classroomId, String username);
    public CommonResponseDto removeStudentFromClassroom(String classroomId, String username);
}
