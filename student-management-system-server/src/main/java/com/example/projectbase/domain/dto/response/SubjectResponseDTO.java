package com.example.projectbase.domain.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubjectResponseDTO {
    private String id; // ID của Subject
    private String name; // Tên của Subject
    private String code; // Mã môn học
    private int numberOfCredits; // Số tín chỉ
    private int regularCoefficient; // Hệ số điểm chuyên cần
    private int midTermCoefficient; // Hệ số điểm giữa kỳ
    private int finalCoefficient; // Hệ số điểm cuối kỳ
    private String description; // Mô tả môn học
}