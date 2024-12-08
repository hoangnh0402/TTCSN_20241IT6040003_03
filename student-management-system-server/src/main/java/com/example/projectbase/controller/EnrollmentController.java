package com.example.projectbase.controller;

import com.example.projectbase.base.RestApiV1;
import com.example.projectbase.base.VsResponseUtil;
import com.example.projectbase.constant.UrlConstant;
import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.security.CurrentUser;
import com.example.projectbase.security.UserPrincipal;
import com.example.projectbase.service.EnrollmentService;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RequiredArgsConstructor
@RestApiV1
public class EnrollmentController {
    EnrollmentService enrollmentService;

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PostMapping(UrlConstant.Enrollment.REGISTER_SUBJECT)
    public ResponseEntity<?> registerSubject(@Parameter(name = "principal", hidden = true)
                                             @CurrentUser UserPrincipal principal,
                                             @RequestParam String classroomId) {
        Enrollment enrollment = enrollmentService.registerSubject(principal, classroomId);
        return VsResponseUtil.success(enrollment);
    }
}
