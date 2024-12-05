package com.example.projectbase.constant;

public class UrlConstant {

  public static class Auth {
    private static final String PRE_FIX = "/auth";

    public static final String LOGIN = PRE_FIX + "/login";
    public static final String LOGOUT = PRE_FIX + "/logout";

    private Auth() {
    }
  }

  public static class User {
    private static final String PRE_FIX = "/user";

    public static final String CREATE_STUDENT = PRE_FIX+"/student";
    public static final String CREATE_TEACHER = PRE_FIX+"/teacher";
    public static final String GET_STUDENT = PRE_FIX+"/student";
    public static final String GET_TEACHER = PRE_FIX+"/teacher";
    public static final String UPDATE_USER = PRE_FIX;
    public static final String LOCK_USER = PRE_FIX+"/lock";
    public static final String UNLOCK_USER = PRE_FIX+"/unlock";
    public static final String GET_USER = PRE_FIX + "/{userId}";
    public static final String GET_CURRENT_USER = PRE_FIX + "/current";

    private User() {
    }
  }

  public static class Department{
    private static final String PRE_FIX = "/department";

    public static final String GET_DEPARTMENTS = PRE_FIX;
    public static final String GET_DEPARTMENT = PRE_FIX + "/id";
    public static final String CREATE_DEPARTMENT = PRE_FIX;
    public static final String UPDATE_DEPARTMENT = PRE_FIX;
    public static final String DELETE_DEPARTMENT = PRE_FIX;
    private Department() {

    }
  }

  public static class Class{
    private static final String PRE_FIX = "/class";

    public static final String GET_CLASSES = PRE_FIX;
    public static final String GET_CLASS = PRE_FIX + "/id";
    public static final String CREATE_CLASS = PRE_FIX;
    public static final String UPDATE_CLASS = PRE_FIX;
    public static final String DELETE_CLASS = PRE_FIX;
    private Class() {

    }
  }
}
