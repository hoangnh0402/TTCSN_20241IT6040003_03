package com.example.projectbase.controller;

import com.example.projectbase.base.RestApiV1;
import com.example.projectbase.base.VsResponseUtil;
import com.example.projectbase.constant.UrlConstant;
import com.example.projectbase.domain.dto.request.ChangePasswordRequestDto;
import com.example.projectbase.domain.dto.request.ForgetPasswordRequestDto;
import com.example.projectbase.domain.dto.request.LoginRequestDto;
import com.example.projectbase.security.CurrentUser;
import com.example.projectbase.security.UserPrincipal;
import com.example.projectbase.service.AuthService;
import com.example.projectbase.validator.annotation.ValidFileImage;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RequiredArgsConstructor
@Validated
@RestApiV1
public class AuthController {

  private final AuthService authService;

  @Operation(summary = "API Login")
  @PostMapping(UrlConstant.Auth.LOGIN)
  public ResponseEntity<?> login(@Valid @RequestBody LoginRequestDto request) {
    return VsResponseUtil.success(authService.login(request));
  }

  @Operation(summary = "API test")
  @PostMapping("auth/test")
  public String login(@ValidFileImage MultipartFile multipartFile) {
    return multipartFile.getContentType();
  }

  @Operation(summary = "API Logout")
  @PostMapping(UrlConstant.Auth.LOGOUT)
  public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
    return VsResponseUtil.success(authService.logout(request, response, authentication));
  }

  @Operation(summary = "API Forget Password")
  @PostMapping(UrlConstant.Auth.FORGET_PASSWORD)
  public ResponseEntity<?> forgetPassword(@Valid @RequestBody ForgetPasswordRequestDto requestDto) {
    return VsResponseUtil.success(authService.forgetPassword(requestDto));
  }

  @Operation(summary = "API Change Password")
  @PostMapping(UrlConstant.Auth.CHANGE_PASSWORD)
  public ResponseEntity<?> changePassword(@Valid @RequestBody ChangePasswordRequestDto requestDto,
                                          @Parameter(name = "principal", hidden = true)
                                          @CurrentUser UserPrincipal principal) {
    return VsResponseUtil.success(authService.changePassword(requestDto, principal.getUsername()));
  }
}
