package com.example.projectbase.controller;

import com.example.projectbase.base.RestApiV1;
import com.example.projectbase.base.VsResponseUtil;
import com.example.projectbase.constant.UrlConstant;
import com.example.projectbase.domain.dto.response.UserDto;
import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.security.CurrentUser;
import com.example.projectbase.security.UserPrincipal;
import com.example.projectbase.service.EnrollmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RequiredArgsConstructor
@RestApiV1
public class EnrollmentController {
    EnrollmentService enrollmentService;

    @Tags({@Tag(name = "enrollment-controller-user")})
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PostMapping(UrlConstant.Enrollment.REGISTER_SUBJECT)
    public ResponseEntity<?> registerSubject(@Parameter(name = "principal", hidden = true)
                                             @CurrentUser UserPrincipal principal,
                                             @RequestParam String classroomId) {
        Enrollment enrollment = enrollmentService.registerSubject(principal, classroomId);
        return VsResponseUtil.success(enrollment);
    }

    @Tags({@Tag(name = "enrollment-controller-admin"), @Tag(name = "enrollment-controller-teacher")})
    @Operation(summary = "API get all students in a classroom")
    @PreAuthorize("hasAnyRole('ADMIN', 'TEACHER')")
    @GetMapping("/{classroomId}/students")
    public ResponseEntity<List<UserDto>> getAllStudentsInClassroom(@PathVariable String classroomId) {
        List<UserDto> students = enrollmentService.getAllStudentsInClassroom(classroomId);
        return ResponseEntity.ok(students);
    }
}
