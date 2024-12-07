package com.example.projectbase.service;

import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.security.UserPrincipal;

public interface EnrollmentService {
    Enrollment registerSubject(UserPrincipal principal, String classroomId);
}

