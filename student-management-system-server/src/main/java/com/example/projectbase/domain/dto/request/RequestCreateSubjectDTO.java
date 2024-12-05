package com.example.projectbase.domain.dto.request;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RequestCreateSubjectDTO {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Code is required")
    private String code;

    @NotNull(message = "Number of credits is required")
    private Integer numberOfCredits;

    @NotNull(message = "Regular coefficient is required")
    private Integer regularCoefficient;

    @NotNull(message = "Final coefficient is required")
    private Integer finalCoefficient;

    @NotBlank(message = "Description is required")
    private String description;

    @NotBlank(message = "Prerequisite subject is required")
    private String prerequisiteSubject;
}