package com.example.projectbase.domain.mapper;

import com.example.projectbase.domain.dto.response.EnrollmentResponse;
import com.example.projectbase.domain.entity.Enrollment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EnrollmentMapper {

    @Mappings({
            @Mapping(target = "userID", source = "user.id"),
            @Mapping(target = "classroomID", source = "classroom.id")
    })
    EnrollmentResponse toEnrollmentResponse(Enrollment enrollment);

    @Mappings({
            @Mapping(target = "userID", source = "user.id"),
            @Mapping(target = "classroomID", source = "classroom.id")
    })
    List<EnrollmentResponse> toEnrollmentResponses(List<Enrollment> enrollments);
}

