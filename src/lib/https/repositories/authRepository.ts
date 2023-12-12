import { APIResponse } from "@/models/ApiResponse";
import Repository from "../repository";
import VueCookies from 'vue-cookies';

// Import Axios
export default class AuthRepository extends Repository {
    login = async (username: string, password: string) =>  {
        try {
            // Gửi yêu cầu đăng nhập và nhận JWT từ máy chủ
            const response = await this.axios.post('/login', {
                email: username,
                password: password,
            });

            VueCookies.set('access_token', response.data.access_token, '1d', null, null, true, 'Strict');

            return response.data;
        } catch (error:any) {
            return (new APIResponse(500, error.message, null));
        }
    }
}