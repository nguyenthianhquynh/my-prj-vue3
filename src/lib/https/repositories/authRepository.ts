import { APIResponse } from "@/models/ApiResponse";
import Repository from "../repository";

// Import Axios
export default class AuthRepository extends Repository {
    login = async (username: string, password: string) =>  {
        try {
            // Gửi yêu cầu đăng nhập và nhận JWT từ máy chủ
            const response = await this.axios.post('/login', {
                email: username,
                password: password,
            });

            return response.data;
        } catch (error:any) {
            return (new APIResponse(500, error.message, null));
        }
    }

    logout = async () => {
        try {
            await this.axios.get('/logout');
        } catch (error:any) {
            return (new APIResponse(500, error.message, null));
        }
    }
}