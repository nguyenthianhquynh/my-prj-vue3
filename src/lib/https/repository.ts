import type { AxiosInstance } from "axios";
import axiosInstance from "./axiosSetting";

export default class Repository{
    axios: AxiosInstance = axiosInstance
}