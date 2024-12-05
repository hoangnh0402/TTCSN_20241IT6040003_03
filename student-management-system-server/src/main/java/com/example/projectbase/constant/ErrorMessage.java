package com.example.projectbase.constant;

public class ErrorMessage {

  public static final String ERR_EXCEPTION_GENERAL = "exception.general";
  public static final String UNAUTHORIZED = "exception.unauthorized";
  public static final String FORBIDDEN = "exception.forbidden";
  public static final String FORBIDDEN_UPDATE_DELETE = "exception.forbidden.update-delete";

  //error validation dto
  public static final String INVALID_SOME_THING_FIELD = "invalid.general";
  public static final String INVALID_FORMAT_SOME_THING_FIELD = "invalid.general.format";
  public static final String INVALID_SOME_THING_FIELD_IS_REQUIRED = "invalid.general.required";
  public static final String NOT_BLANK_FIELD = "invalid.general.not-blank";
  public static final String INVALID_FORMAT_PASSWORD = "invalid.password-format";
  public static final String INVALID_DATE = "invalid.date-format";
  public static final String INVALID_DATE_FEATURE = "invalid.date-future";
  public static final String INVALID_DATETIME = "invalid.datetime-format";

  public static class Auth {
    public static final String ERR_INCORRECT_USERNAME = "exception.auth.incorrect.username";
    public static final String ERR_INCORRECT_PASSWORD = "exception.auth.incorrect.password";
    public static final String ERR_ACCOUNT_NOT_ENABLED = "exception.auth.account.not.enabled";
    public static final String ERR_ACCOUNT_LOCKED = "exception.auth.account.locked";
    public static final String INVALID_REFRESH_TOKEN = "exception.auth.invalid.refresh.token";
    public static final String EXPIRED_REFRESH_TOKEN = "exception.auth.expired.refresh.token";
  }

  public static class User {
    public static final String ERR_NOT_FOUND_USERNAME = "exception.user.not.found.username";
    public static final String ERR_NOT_FOUND_ID = "exception.user.not.found.id";
  }

  public static class Subject {
    public static final String ERR_NOT_FOUND_ID = "Không tìm thấy môn học với id: %s";
    public static final String ERR_NOT_FOUND_NAME = "Không tìm thấy môn học với tên: %s";
    public static final String ERR_INVALID_SUBJECT = "Thông tin môn học không hợp lệ.";
  }

  public static class Classroom {
    public static final String ERR_NOT_FOUND_ID = "Không tìm thấy lớp học với ID {0}.";
    public static final String ERR_INVALID_DATA = "Dữ liệu lớp học không hợp lệ.";
    public static final String ERR_CANNOT_DELETE = "Không thể xóa lớp học với ID {0} vì lớp học đang được sử dụng.";
  }

  public static class Department{
    public static final String ERR_NOT_FOUND_ID = "exception.department.not.found.id";
  }

  public static class Class{
    public static final String ERR_NOT_FOUND_ID = "exception.class.not.found.id";
  }

}