import axios from "axios";
import React from "react";

const apiClient = axios.create({
    baseURL: "https://digimon-api.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

const GetList = async () => {
    const response = (await apiClient.get<any>("/digimon")).data;
    return response;
}

const DigimonService = {
    GetList
};

export default DigimonService;