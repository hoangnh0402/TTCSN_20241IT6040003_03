export const ApiConstant = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    profile: '/user/current',
  },
  classes: {
    getAll: '/class',
  },
  students: {
    getAll: '/user/student',
    getById: '/user/:id',
    getByUsercode: '/user/student/:userCode',
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
    getAll: '/user/subject?pageSize=1000',
    getById: '/admin/subject/id?subjectId=:id',
    create: '/admin/subject',
    update: '/admin/subject?subjectId=:id',
    delete: '/admin/subject?subjectId=:id',
  },
  classes: {
    getAll: '/class',
    create:'class',
    update: '/class',
    delete:'/class',
    getById: '/class/:id'
  },
  classrooms: {
    getAll: '/user/classroom',
    getById: '/admin/classroom/id?classroomId=:id',
    create: '/admin/classroom',
    update: '/admin/classroom?classroomId=:id',
    delete: '/admin/classroom?classroomId=:id',
    getStudents: '/:id/students1',
    addStudent: '/admin/classroom/:id/add-student',
    removeStudent: '/admin/classroom/:classroomId/:studentId',
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
