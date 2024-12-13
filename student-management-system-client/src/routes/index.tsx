import { Toaster } from '@/components/ui/toaster';
import { Role } from '@/types/user.type';
import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';

const ClassroomDetailManagement = React.lazy(() => import('@/pages/dashboard/ClassroomDetailManagement'));
const ClassroomManagement = React.lazy(() => import('@/pages/dashboard/ClassroomManagement'));
const Loading = React.lazy(() => import('@/components/ui/loading'));
const Login = React.lazy(() => import('@/pages/auth/login'));
const MainLayout = React.lazy(() => import('@/layouts/MainLayout'));
const ProtectedRoute = React.lazy(() => import('./ProtectedRoute'));
const RegisterSubject = React.lazy(() => import('@/pages/registerSubject'));
const StudentManagement = React.lazy(() => import('@/pages/dashboard/StudentManagement'));
const SubjectManagement = React.lazy(() => import('@/pages/dashboard/SubjectManagement'));
const Summary = React.lazy(() => import('@/pages/summary'));
const TeacherManagement = React.lazy(() => import('@/pages/dashboard/TeacherManagerment'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <MainLayout />
        </Suspense>
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
        path: 'register',
        element: (
          <ProtectedRoute allowedRoles={[Role.STUDENT,Role.ADMIN]}>
            <Suspense fallback={<Loading />}>
              <RegisterSubject />
            </Suspense>
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
