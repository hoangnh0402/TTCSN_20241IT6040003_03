package com.example.projectbase.controller;

import com.example.projectbase.base.VsResponseUtil;
import com.example.projectbase.domain.entity.Classroom;
import com.example.projectbase.dto.ClassroomResponseDTO;
import com.example.projectbase.dto.CreateClassroomRequestDTO;
import com.example.projectbase.dto.UpdateClassroomRequestDTO;
import com.example.projectbase.service.ClassroomService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ClassroomController {

    private final ClassroomService classroomService;

    @Tag(name = "classroom-controller-admin")
    @Operation(summary = "API create classroom")
    @PostMapping("/admin/classroom")
    public ResponseEntity<?> createClassroom(@RequestBody @Valid CreateClassroomRequestDTO requestDTO) {
        return VsResponseUtil.success(classroomService.createClassroom(requestDTO));
    }

    @Tag(name = "classroom-controller")
    @Operation(summary = "API get all classrooms")
    @GetMapping("/user/classroom")
    public ResponseEntity<?> getAllClassrooms() {
        List<ClassroomResponseDTO> classrooms = classroomService.getAllClassrooms();
        return VsResponseUtil.success(classrooms);
    }

    @Tag(name = "classroom-controller-admin")
    @Operation(summary = "API get classroom by id")
    @GetMapping("/admin/classroom/id")
    public ResponseEntity<?> getClassroomById(@RequestParam String classroomId) {
        return VsResponseUtil.success(classroomService.getClassroomById(classroomId));
    }

    @Tag(name = "classroom-controller-admin")
    @Operation(summary = "API update classroom")
    @PutMapping("/admin/classroom")
    public ResponseEntity<?> updateClassroom(
            @RequestParam String classroomId,
            @RequestBody @Valid UpdateClassroomRequestDTO requestDTO) {
        return VsResponseUtil.success(classroomService.updateClassroom(classroomId, requestDTO));
    }

    @Tag(name = "classroom-controller-admin")
    @Operation(summary = "API delete classroom")
    @DeleteMapping("/admin/classroom")
    public ResponseEntity<?> deleteClassroom(@RequestParam String classroomId) {
        return VsResponseUtil.success(classroomService.deleteClassroom(classroomId));
    }

    @Tag(name = "classroom-controller")
    @Operation(summary = "API get classrooms by start date")
    @GetMapping("/user/classroom/start-date")
    public ResponseEntity<?> findByStartDate(@RequestParam LocalDate startDate) {
        return VsResponseUtil.success(classroomService.findByStartDate(startDate));
    }

    @Tag(name = "classroom-controller")
    @Operation(summary = "API get classrooms by schedule")
    @GetMapping("/user/classroom/schedule")
    public ResponseEntity<?> findBySchedule(@RequestParam String schedule) {
        return VsResponseUtil.success(classroomService.findBySchedule(schedule));
    }

    @Tag(name = "classroom-controller")
    @Operation(summary = "API get classrooms by subject code")
    @GetMapping("/user/classroom/subject/code")
    public ResponseEntity<?> getClassroomsBySubjectCode(@RequestParam String subjectCode) {
        List<Classroom> classrooms = classroomService.findAllClassroomBySubjectCode(subjectCode);
        return VsResponseUtil.success(classrooms);
    }
}

