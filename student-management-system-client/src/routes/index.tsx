import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Login from '@/pages/auth/login';
import ClassroomManagement from '@/pages/dashboard/ClassroomManagement';
import StudentManagement from '@/pages/dashboard/StudentManagement';
import SubjectManagement from '@/pages/dashboard/SubjectManagement';
import TeacherManagement from '@/pages/dashboard/TeacherManagerment';
import MainLayout from '@/layouts/MainLayout';
import ClassroomDetailManagement from '@/pages/dashboard/ClassroomDetailManagement';
import RegisterSubject from '@/pages/registerSubject';
import Summary from '@/pages/summary';
import { Toaster } from '@/components/ui/toaster';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'admin',
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
        children: [
          {
            path: 'register',
            element: <RegisterSubject />,
          },
          {
            path: 'summary',
            element: <Summary />,
          },
        ],
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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
