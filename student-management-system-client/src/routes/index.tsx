import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

const Login = React.lazy(() => import('@/pages/auth/login'));
const ClassroomManagement = React.lazy(() => import('@/pages/dashboard/ClassroomManagement'));
const StudentManagement = React.lazy(() => import('@/pages/dashboard/StudentManagement'));
const SubjectManagement = React.lazy(() => import('@/pages/dashboard/SubjectManagement'));
const TeacherManagement = React.lazy(() => import('@/pages/dashboard/TeacherManagerment'));
const MainLayout = React.lazy(() => import('@/layouts/MainLayout'));
const ClassroomDetailManagement = React.lazy(() => import('@/pages/dashboard/ClassroomDetailManagement'));
const RegisterSubject = React.lazy(() => import('@/pages/registerSubject'));
const Summary = React.lazy(() => import('@/pages/summary'));
const Loading = React.lazy(() => import('@/components/ui/loading'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: 'admin',
        children: [
          {
            path: 'subjects',
            element: (
              <Suspense fallback={<Loading />}>
                <SubjectManagement />
              </Suspense>
            ),
          },
          {
            path: 'students',
            element: (
              <Suspense fallback={<Loading />}>
                <StudentManagement />
              </Suspense>
            ),
          },
          {
            path: 'teachers',
            element: (
              <Suspense fallback={<Loading />}>
                <TeacherManagement />
              </Suspense>
            ),
          },
          {
            path: 'classrooms',
            element: (
              <Suspense fallback={<Loading />}>
                <ClassroomManagement />
              </Suspense>
            ),
          },
          {
            path: 'classrooms/:id',
            element: (
              <Suspense fallback={<Loading />}>
                <ClassroomDetailManagement />
              </Suspense>
            ),
          },
        ],
      },
      {
        children: [
          {
            path: 'register',
            element: (
              <Suspense fallback={<Loading />}>
                <RegisterSubject />
              </Suspense>
            ),
          },
          {
            path: 'summary',
            element: (
              <Suspense fallback={<Loading />}>
                <Summary />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
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
