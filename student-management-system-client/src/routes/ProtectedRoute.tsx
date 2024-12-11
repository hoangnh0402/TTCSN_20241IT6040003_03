import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useUserStore } from '@/store/useUserStore';
import { Role } from '@/types/user.type';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: Role[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useUserStore();

  if (!isAuthenticated) {
    console.log("check 1")
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles?.includes(user?.roleName as Role)) {
    console.log("check 2")

    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
