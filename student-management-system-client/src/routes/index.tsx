import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import Login from '@/pages/auth/login';
import ClassroomDetailManagement from '@/pages/dashboard/ClassroomDetailManagement';
import ClassroomManagement from '@/pages/dashboard/ClassroomManagement';
import StudentManagement from '@/pages/dashboard/StudentManagement';
import SubjectManagement from '@/pages/dashboard/SubjectManagement';
import TeacherManagement from '@/pages/dashboard/TeacherManagerment';
import RegisterSubject from '@/pages/registerSubject';
import Summary from '@/pages/summary';
import { Role } from '@/types/user.type';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'admin',
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN]}>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'subjects',
            element: <SubjectManagement />,
          },
          {
            path: 'students',
            element: <StudentManagement />,
          },
          {
            path: 'teachers',
            element: <TeacherManagement />,
          },
          {
            path: 'classrooms',
            element: <ClassroomManagement />,
          },
          {
            path: 'classrooms/:id',
            element: <ClassroomDetailManagement />,
          },
        ],
      },
      {
        path: 'register',
        element: (
          <ProtectedRoute allowedRoles={[Role.STUDENT]}>
            <RegisterSubject />
          </ProtectedRoute>
        ),
      },
      {
        path: 'summary',
        element: (
          <ProtectedRoute allowedRoles={[Role.ADMIN, Role.TEACHER]}>
            <Summary />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
