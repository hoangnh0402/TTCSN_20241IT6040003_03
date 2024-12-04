package com.example.projectbase.domain.entity;

import com.example.projectbase.domain.entity.common.FlagUserDateAuditing;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "classrooms")
public class Classroom extends FlagUserDateAuditing {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(insertable = false, updatable = false, nullable = false, columnDefinition = "CHAR(36)")
    private String id;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private int numberOfStudents;

    @Column(nullable = false)
    private String schedule;

    @Column(nullable = false)
    private String room;

    @Column(nullable = false)
    private LocalDate startDate;

    //Link to table Enrollment

    //Link to table Subject
}
