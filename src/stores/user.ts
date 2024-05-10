import { acceptHMRUpdate, defineStore } from "pinia";
import RepositoryFactory from '@/lib/https/repositoryFactory';
import AuthRepository from '@/lib/https/repositories/authRepository';

const { apiLogin } = RepositoryFactory.getRepository<AuthRepository>(AuthRepository)

export const useUserStore = defineStore({
    id: 'user',

    state: () => ({
        name: ''
    }), //return Object
    actions:{
        //login
        async login(userName: string, password: string){
            const userData = await apiLogin(userName, password)

            this.$patch({
                name: userName,
                ...userData,
            })
        },

        //logout
        logout() {},
    }
})

//Hot Module Replacement (Vite) -> No need to reload page when changing code
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}