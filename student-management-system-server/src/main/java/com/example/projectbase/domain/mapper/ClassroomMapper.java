package com.example.projectbase.domain.mapper;

import com.example.projectbase.domain.dto.request.UpdateClassroomRequestDTO;
import com.example.projectbase.domain.dto.response.ClassroomResponseDTO;
import com.example.projectbase.domain.entity.Classroom;
import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.domain.entity.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ClassroomMapper {

    // Chuyển đổi từ CreateClassroomRequestDTO sang Classroom
    @Mapping(source = "createClassroomRequestDTO.code", target = "code")
    @Mapping(source = "createClassroomRequestDTO.numberOfStudents", target = "numberOfStudents")
    @Mapping(source = "createClassroomRequestDTO.schedule", target = "schedule")
    @Mapping(source = "createClassroomRequestDTO.room", target = "room")
    @Mapping(source = "createClassroomRequestDTO.startDate", target = "startDate")
    @Mapping(source = "subject", target = "subject")
    Classroom toEntity(com.example.projectbase.dto.CreateClassroomRequestDTO createClassroomRequestDTO, Subject subject);

    @Mapping(source = "subject.id", target = "subjectId")
    @Mapping(target = "teacherId", expression = "java(getTeacherIdFromEnrollments(classroom.getEnrollments()))")
    ClassroomResponseDTO toDto(Classroom classroom);

    default String getTeacherIdFromEnrollments(Set<Enrollment> enrollments) {
        return enrollments.stream()
                .filter(enrollment -> enrollment.getUser() != null) // Kiểm tra null
                .map(enrollment -> enrollment.getUser().getId())    // Lấy ID của User
                .findFirst()                                       // Lấy bản ghi đầu tiên
                .orElse(null);                                     // Trả về null nếu không có
    }

    default List<ClassroomResponseDTO> toDto1(List<Classroom> classrooms) {
        return classrooms.stream()
                .map(this::toDto)  // Chuyển đổi từng Classroom thành ClassroomResponseDTO
                .collect(Collectors.toList());
    }


    // Cập nhật entity Classroom với thông tin từ UpdateClassroomRequestDTO
    @Mapping(source = "updateClassroomRequestDTO.code", target = "code")
    @Mapping(source = "updateClassroomRequestDTO.numberOfStudents", target = "numberOfStudents")
    @Mapping(source = "updateClassroomRequestDTO.schedule", target = "schedule")
    @Mapping(source = "updateClassroomRequestDTO.room", target = "room")
    @Mapping(source = "updateClassroomRequestDTO.startDate", target = "startDate")
    @Mapping(source = "subject", target = "subject")
    void updateEntity(UpdateClassroomRequestDTO updateClassroomRequestDTO, @MappingTarget Classroom classroom, Subject subject);
}
