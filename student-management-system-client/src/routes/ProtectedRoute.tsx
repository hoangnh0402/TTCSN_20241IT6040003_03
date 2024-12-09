import { useUserStore } from '@/store/useUserStore';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
	const { user } = useUserStore();
    const token = localStorage.getItem('token')
	
    // if(token){
    //     console.log(1)
    // }
	if (!user || Object.keys(user).length === 0 || !token) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;