import type { AxiosResponse } from "axios";
import axios from "axios";
import { fetchAllPhotos, fetchPhotoById, fetchPhotosByAlbum } from "../../infrastructure/api/photoApi";
import type { PhotoTO } from "../entities/PhotoTO";

export class PhotoUseCase {
    async getAllPhotos(): Promise<PhotoTO[]> {
        try {
            const response: AxiosResponse<PhotoTO[]> = await fetchAllPhotos();
            return response.data.map(photo => this.transformPhotoUrls(photo));
        } catch (error: unknown) {
            throw this.handleError(error);
        }
    }

    async getPhotoById(id: number): Promise<PhotoTO> {
        try {
            const response: AxiosResponse<PhotoTO> = await fetchPhotoById(id);
            return this.transformPhotoUrls(response.data);
        } catch (error: unknown) {
            throw this.handleError(error);
        }
    }

    async getPhotosByAlbum(albumId: number): Promise<PhotoTO[]> {
        try {
            const response: AxiosResponse<PhotoTO[]> = await fetchPhotosByAlbum(albumId);
            return response.data.map(photo => this.transformPhotoUrls(photo));
        } catch (error: unknown) {
            throw this.handleError(error);
        }
    }

    private transformPhotoUrls(photo: PhotoTO): PhotoTO {
        return {
            ...photo,
            url: `https://picsum.photos/600/600?random=${photo.id}`,
            thumbnailUrl: `https://picsum.photos/150/150?random=${photo.id}`
        };
    }

    searchPhotos(photos: PhotoTO[], query: string): PhotoTO[] {
        if (!query.trim()) {
            return photos;
        }

        const normalizedQuery = query.toLowerCase().trim();
        
        return photos.filter(photo => 
            photo.title.toLowerCase().includes(normalizedQuery)
        );
    }

    private handleError(error: unknown): Error {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const status = error.response.status;
                const message = error.response.data?.message || error.response.data?.error;

                switch (status) {
                    case 404:
                        return new Error(message || "Foto não encontrada.");
                    case 500:
                        return new Error(message || "Erro no servidor. Tente novamente mais tarde.");
                    default:
                        return new Error(message || "Erro ao buscar fotos.");
                }
            } else if (error.request) {
                return new Error("Sem resposta do servidor. Verifique sua conexão.");
            }
        }
        if (error instanceof Error) {
            return error;
        }
        return new Error("Erro desconhecido ao buscar fotos.");
    }
}