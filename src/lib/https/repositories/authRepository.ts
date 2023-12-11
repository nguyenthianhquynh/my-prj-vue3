import Repository from "./repository";
import { useCookies } from "vue3-cookies";

// Import Axios
export default class AuthRepository extends Repository {
    login = async (username: string, password: string) =>  {
        try {
            // Gửi yêu cầu đăng nhập và nhận JWT từ máy chủ
            const response = await this.axios.post('/login', {
                username: username,
                password: password,
            });

            const { cookies } = useCookies();
            // Lưu trữ JWT trong HTTP-only Cookie
            cookies.set('token', response.data.token, '1d');
            return response.data;
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
}