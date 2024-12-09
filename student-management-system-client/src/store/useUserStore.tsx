import { create } from "zustand";
import api from "@/services/api.service";
import { User } from "@/types/user.type";
import { useToast } from "@/hooks/use-toast";
import zustymiddlewarets from 'zustymiddlewarets';


interface useUserStore {
	user: object;
    loading: boolean,
    checkingAuth: boolean,
	error: string | null,
    login: (studentId: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}

export const useUserStore = create<useUserStore>((set, get) => ({
	user: {},
	loading: false,
	checkingAuth: true,
	error: null,
	
	login: async (studentId : string, password: string) => {
		set({ loading: true, error: null });
		try {
			const res = await api.post("/auth/login", { emailOrPhone: studentId, password });
			localStorage.setItem('token', res.data.accessToken)
			set({ user: res.data, loading: false });
			return true;
		} catch (error) {
			console.log(error.response.data.message);
			set({ loading: false, error: error.response.data.message });
			return false;
		} finally{
			set({ loading: false })
		}
	},

	logout: async () => {
		try {
			await api.post("/auth/logout");
			set({ user: {} });
		} catch (error) {
			set({ loading: false, error: error.message });
		}finally{
			set({ loading: false})
		}
	},

	checkAuth: async () => {
		set({ checkingAuth: true });
		try {
			const response = await api.get("/auth/profile");
			set({ user: response.data, checkingAuth: false });
		} catch (error) {
			console.log(error.message);
			set({ loading: false, error: error.message });
		}finally{
			set({ loading: false})
		}
	},
}));

