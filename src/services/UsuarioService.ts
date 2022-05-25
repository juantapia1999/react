import axios from "axios";
import Usuario from "../interfaces/Usuario";


//axios response contiene 
/* 
data: body de respuesta del servidor
status: el codigo de status http
statusText: mensage de http status
*/
const apiClient = axios.create({
    baseURL: "http://localhost:8080/api/usuarios",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

const findAll = async () => {
    const response = (await apiClient.get<Usuario[] | any>("/list")).data;
    return response;
};

const findById = async (id: number) => {
    const response = (await apiClient.get<any>(`/find/${id}`)).data
    return response;
}

const create = async (user: Usuario) => {
    const response = (await apiClient.post<any>("/create", user)).data;
    return response;
}

const update = async (user: Usuario) => {
    const response = (await apiClient.patch<any>("/update", user)).data;
    return response;
}

const deleteById = async (id: number) => {
    const response = (await apiClient.delete(`/delete/${id}`)).data;
    return response;
}


const UsuarioService = {
    findAll,
    findById,
    create,
    update,
    deleteById
}

export default UsuarioService;