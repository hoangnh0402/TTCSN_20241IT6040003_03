package com.example.projectbase.domain.dto.request;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UpdateRequestSubjectDTO {
    private String name;

    private String code;

    private Integer numberOfCredits;

    private Integer regularCoefficient;

    private Integer finalCoefficient;

    private String description;

    private String prerequisiteSubject;
}