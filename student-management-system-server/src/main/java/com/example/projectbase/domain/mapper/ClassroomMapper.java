package com.example.projectbase.domain.mapper;

import com.example.projectbase.domain.dto.response.ClassroomResponseDTO;
import com.example.projectbase.domain.entity.Classroom;
import com.example.projectbase.domain.entity.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

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

    // Chuyển đổi từ Classroom sang ClassroomResponseDTO
    ClassroomResponseDTO toDto(Classroom classroom);

    // Cập nhật entity Classroom với thông tin từ UpdateClassroomRequestDTO
    @Mapping(source = "updateClassroomRequestDTO.code", target = "code")
    @Mapping(source = "updateClassroomRequestDTO.numberOfStudents", target = "numberOfStudents")
    @Mapping(source = "updateClassroomRequestDTO.schedule", target = "schedule")
    @Mapping(source = "updateClassroomRequestDTO.room", target = "room")
    @Mapping(source = "updateClassroomRequestDTO.startDate", target = "startDate")
    @Mapping(source = "subject", target = "subject")
    void updateEntity(com.example.projectbase.dto.UpdateClassroomRequestDTO updateClassroomRequestDTO, @MappingTarget Classroom classroom, Subject subject);
}
