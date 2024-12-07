package com.example.projectbase.service.impl;

import com.example.projectbase.constant.ErrorMessage;
import com.example.projectbase.domain.entity.Classroom;
import com.example.projectbase.domain.entity.Enrollment;
import com.example.projectbase.domain.entity.User;
import com.example.projectbase.exception.NotFoundException;
import com.example.projectbase.repository.*;
import com.example.projectbase.security.UserPrincipal;
import com.example.projectbase.service.EnrollmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EnrollmentServiceImpl implements EnrollmentService {
    private final EnrollmentRepository enrollmentRepository;
    private final ClassroomRepository classroomRepository;
    private final SubjectRepository subjectRepository;
    private final RecordRepository repository;
    private final UserRepository userRepository;


    @Override
    public Enrollment registerSubject(UserPrincipal principal, String classroomId) {
        User user = userRepository.getUser(principal);

        Classroom classroom = classroomRepository.findById(classroomId)
                .orElseThrow(() -> new NotFoundException(ErrorMessage.Classroom.ERR_NOT_FOUND_ID));

        boolean alreadyEnrolled = enrollmentRepository.existsByUserAndClassroom(user, classroom);
        if (alreadyEnrolled) {
            throw new IllegalStateException(ErrorMessage.Enrollment.USER_ALREADY_IN_CLASSROOM);
        }

        Enrollment enrollment = Enrollment.builder()
                .user(user)
                .classroom(classroom)
                .firstRegularPoint(0)
                .secondRegularPoint(0)
                .midTermPoint(0)
                .finalPoint(0)
                .build();

        enrollmentRepository.save(enrollment);

        return enrollment;
    }
}
