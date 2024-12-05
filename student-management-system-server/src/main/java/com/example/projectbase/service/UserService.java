package com.example.projectbase.service;

import com.example.projectbase.domain.dto.pagination.PaginationFullRequestDto;
import com.example.projectbase.domain.dto.pagination.PaginationResponseDto;
import com.example.projectbase.domain.dto.request.UserCreateDto;
import com.example.projectbase.domain.dto.request.UserUpdateDto;
import com.example.projectbase.domain.dto.response.CommonResponseDto;
import com.example.projectbase.domain.dto.response.UserDto;
import com.example.projectbase.domain.entity.User;
import com.example.projectbase.security.UserPrincipal;

import java.util.List;

public interface UserService {

  UserDto createStudent(UserCreateDto userCreateDto);

  UserDto createTeacher(UserCreateDto userCreateDto);

  List<UserDto> getAllStudents();

  List<UserDto> getAllTeachers();

  UserDto getUserById(String userId);

  UserDto getCurrentUser(UserPrincipal principal);

  UserDto updateUser(String id, UserUpdateDto userUpdateDto);

  UserDto lockUser(String id);

  UserDto unlockUser(String id);
}
