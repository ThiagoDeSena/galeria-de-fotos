import type { AxiosResponse } from "axios";
import axios from "axios";
import type { PhotoTO } from "../../domain/entities/PhotoTO";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});

const photoEndpoint = "/photos";

export const fetchAllPhotos = async (): Promise<AxiosResponse<PhotoTO[]>> => {
    return api.get(photoEndpoint, {
        params: {
            _limit: 50
        },
        timeout: 30000,
    });
};

export const fetchPhotoById = async (id: number): Promise<AxiosResponse<PhotoTO>> => {
    return api.get(`${photoEndpoint}/${id}`, {
        timeout: 30000,
    });
};

export const fetchPhotosByAlbum = async (albumId: number): Promise<AxiosResponse<PhotoTO[]>> => {
    return api.get(photoEndpoint, {
        params: {
            albumId
        },
        timeout: 30000,
    });
};