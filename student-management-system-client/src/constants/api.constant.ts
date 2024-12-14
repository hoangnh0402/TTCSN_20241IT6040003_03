export const ApiConstant = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    profile: '/user/current',
  },
  students: {
    getAll: '/user/student',
    getById: '/user/:id',
    // getByUsercode: '/user/student/:userCode',
    getByUsercode: '/user/:userCode',
    create: '/user/student',
    update: '/user?userId=:id',
    delete: '/user/lock?userId=:id',
  },
  teachers: {
    getAll: '/user/teacher',
    getById: '/user/:id',
    getByUsercode: '/user/teacher/:userCode',
    create: '/user/teacher',
    update: '/user?userId=:id',
    delete: '/user/lock?userId=:id',
  },
  subjects: {
    getAll: '/user/subject',
    getById: '/admin/subject/id?subjectId=:id',
    create: '/admin/subject',
    update: '/admin/subject?subjectId=:id',
    delete: '/admin/subject?subjectId=:id',
  },
  classrooms: {
    getAll: '/user/classroom',
    getById: '/admin/classroom/id',
    create: '/admin/classroom',
    update: '/admin/classroom?classroomId=:id',
    delete: '/admin/classroom?classroomId=:id',
    getStudents: '/:id/students',
    addStudent: '/admin/classroom/:id/add-student',
    removeStudent: '/admin/classroom/:classroomId/:studentId',
    getClassByStudent: 'api/v1/classrooms/byStudentCode/:username',
  },
  documents: {
    getAll: '/documents',
    getAllBySubject: '/documents/subject',
    getById: '/documents/{id}',
    dowload: '/documents/download',
    upload: '/upload',
  },
  enrollment: {
    register: 'enroll/register',
    getAll: '/:id/students',
  },
};

export const ApiConstantUser = {
  classrooms: {
    getAll: '/user/classroom',
  },

  subjects: {
    getAll: '/user/subject',
  },
};
