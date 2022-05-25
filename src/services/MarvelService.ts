import axios from "axios";
import React, { useEffect, useState } from "react"


//1011442 -> Hitmonkey
//expample request ->  https://gateway.marvel.com:443/v1/public/characters/1011442?apikey=9546cbed2ea97b50836aeb50e26a83c1


//private key:  c86a6aec6535aefc3f4b69558031a11889311ae3
const public_key = "9546cbed2ea97b50836aeb50e26a83c1";
const hash = "3e2ee36f55c62a0c53231fa21757ba99";
let offsetCount = 0;

const apiClient = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        /* "Access-Control-Allow-Origin": "*" */
    },
    params: {
        "ts": "1",
        "apikey": public_key,
        "hash": hash,
        "limit": "40"
    }
});

const GetOne = async (id: number) => {
    const response = (await apiClient.get<any>(`/characters/${id}?ts=1&apikey=${public_key}&hash=${hash}`)).data;
    return response;
}

const GetList = async () => {
    const response = (await apiClient.get<any>(`/characters`, { params: { offset: offsetCount } })).data
    return response
}

const SetOffsetCount = (next: boolean) => {
    //console.log("entra "+offsetCount+" "+next)
    if(next){
        offsetCount += 40
    }else{
        if (offsetCount >= 40) {
            offsetCount -= 40
        }
    }
    //console.log("sale "+offsetCount);
}

const MarvelService = {
    GetOne,
    GetList,
    SetOffsetCount
};

export default MarvelService;