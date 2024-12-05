package com.example.projectbase.controller;

import com.example.projectbase.base.VsResponseUtil;
import com.example.projectbase.domain.dto.pagination.PaginationFullRequestDto;
import com.example.projectbase.domain.dto.request.RequestCreateSubjectDTO;
import com.example.projectbase.domain.dto.request.UpdateRequestSubjectDTO;
import com.example.projectbase.service.SubjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springdoc.api.annotations.ParameterObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectService subjectService;

    @Tag(name = "subject-controller-admin")
    @Operation(summary = "API create subject")
    @PostMapping("/admin/subject")
    public ResponseEntity<?> createSubject(@RequestBody @Valid RequestCreateSubjectDTO subjectRequestDTO) {
        return VsResponseUtil.success(subjectService.createSubject(subjectRequestDTO));
    }

    @Tag(name = "subject-controller")
    @Operation(summary = "API get all subjects")
    @GetMapping("/user/subject")
    public ResponseEntity<?> readAllSubjects(@Valid @ParameterObject PaginationFullRequestDto paginationRequestDto) {
        return VsResponseUtil.success(subjectService.readAllSubjects(paginationRequestDto));
    }

    @Tag(name = "subject-controller-admin")
    @Operation(summary = "API get subjects with filtering and sorting")
    @GetMapping("/admin/subject")
    public ResponseEntity<?> readSubjects(@Valid @ParameterObject PaginationFullRequestDto paginationRequestDto) {
        return VsResponseUtil.success(subjectService.readSubjects(paginationRequestDto));
    }

    @Tag(name = "subject-controller")
    @Operation(summary = "API find subjects by name")
    @GetMapping("/user/subject/find")
    public ResponseEntity<?> findSubjects(@RequestParam String subjectName) {
        return VsResponseUtil.success(subjectService.findSubjects(subjectName));
    }

    @Tag(name = "subject-controller-admin")
    @Operation(summary = "API update subject")
    @PutMapping("/admin/subject")
    public ResponseEntity<?> updateSubject(@RequestParam String subjectId, @RequestBody @Valid UpdateRequestSubjectDTO subjectRequestDTO) {
        return VsResponseUtil.success(subjectService.updateSubject(subjectId, subjectRequestDTO));
    }

    @Tag(name = "subject-controller-admin")
    @Operation(summary = "API delete subject")
    @DeleteMapping("/admin/subject")
    public ResponseEntity<?> deleteSubject(@RequestParam String subjectId) {
        return VsResponseUtil.success(subjectService.deleteSubject(subjectId));
    }

    @Tag(name = "subject-controller-admin")
    @Operation(summary = "API get subject by id")
    @GetMapping("/admin/subject/id")
    public ResponseEntity<?> readById(@RequestParam String subjectId) throws Exception {
        return VsResponseUtil.success(subjectService.getSubjectById(subjectId));
    }

}