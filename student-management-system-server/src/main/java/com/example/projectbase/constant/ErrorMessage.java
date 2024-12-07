package com.example.projectbase.constant;

public class ErrorMessage {

  public static final String ERR_EXCEPTION_GENERAL = "lỗi chung";
  public static final String UNAUTHORIZED = "lỗi không được ủy quyền";
  public static final String FORBIDDEN = "lỗi bị cấm";
  public static final String FORBIDDEN_UPDATE_DELETE = "lỗi bị cấm cập nhật xóa";

  // lỗi xác thực dữ liệu
  public static final String INVALID_SOME_THING_FIELD = "không hợp lệ chung";
  public static final String INVALID_FORMAT_SOME_THING_FIELD = "không hợp lệ định dạng chung";
  public static final String INVALID_SOME_THING_FIELD_IS_REQUIRED = "không hợp lệ chung bắt buộc";
  public static final String NOT_BLANK_FIELD = "không hợp lệ chung không được trống";
  public static final String INVALID_FORMAT_PASSWORD = "không hợp lệ định dạng mật khẩu";
  public static final String INVALID_DATE = "không hợp lệ định dạng ngày";
  public static final String INVALID_DATE_FEATURE = "không hợp lệ ngày trong tương lai";
  public static final String INVALID_DATETIME = "không hợp lệ định dạng ngày giờ";

  public static class Auth {
    public static final String ERR_INCORRECT_EMAIL = "lỗi xác thực email không đúng";
    public static final String INVALID_REPEAT_PASSWORD = "không hợp lệ, mật khẩu lặp lại";
    public static final String ERR_INCORRECT_USERNAME = "lỗi xác thực tên người dùng không đúng";
    public static final String ERR_INCORRECT_PASSWORD = "lỗi xác thực mật khẩu không đúng";
    public static final String ERR_ACCOUNT_NOT_ENABLED = "lỗi xác thực tài khoản chưa được kích hoạt";
    public static final String ERR_ACCOUNT_LOCKED = "lỗi xác thực tài khoản bị khóa";
    public static final String INVALID_REFRESH_TOKEN = "lỗi xác thực token làm mới không hợp lệ";
    public static final String EXPIRED_REFRESH_TOKEN = "lỗi xác thực token làm mới đã hết hạn";
  }

  public static class User {
    public static final String ERR_NOT_FOUND_USERNAME = "lỗi người dùng không tìm thấy tên người dùng";
    public static final String ERR_NOT_FOUND_ID = "lỗi người dùng không tìm thấy id";
  }

  public static class Subject {
    public static final String ERR_NOT_FOUND_ID = "Không tìm thấy môn học với id: %s";
    public static final String ERR_NOT_FOUND_NAME = "Không tìm thấy môn học với tên: %s";
    public static final String ERR_INVALID_SUBJECT = "Thông tin môn học không hợp lệ";
  }

  public static class Classroom {
    public static final String ERR_NOT_FOUND_ID = "Không tìm thấy lớp học với ID {0}";
    public static final String ERR_INVALID_DATA = "Dữ liệu lớp học không hợp lệ";
    public static final String ERR_CANNOT_DELETE = "Không thể xóa lớp học với ID {0} vì lớp học đang được sử dụng";
  }

  public static class Department {
    public static final String ERR_NOT_FOUND_ID = "lỗi phòng ban không tìm thấy id";
  }

  public static class Class {
    public static final String ERR_NOT_FOUND_ID = "lỗi lớp không tìm thấy id";
  }

  public static class Document {
    public static final String ERR_NOT_FOUND_ID = "Không tìm thấy tài liệu với id: %s";
    public static final String ERR_SAVE_FILE = "Lỗi khi lưu tài liệu";
    public static final String ERR_READ_FILE = "Lỗi khi đọc tài liệu";
    public static final String ERR_INVALID_PATH = "Đường dẫn tài liệu không hợp lệ";
  }

}