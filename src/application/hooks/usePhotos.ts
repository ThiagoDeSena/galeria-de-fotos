import { useState, useEffect } from "react";
import { PhotoUseCase } from "../../domain/useCases/PhotoUseCase";
import type { PhotoTO } from "../../domain/entities/PhotoTO";

export const usePhotos = () => {
    const [photos, setPhotos] = useState<PhotoTO[]>([]);
    const [filteredPhotos, setFilteredPhotos] = useState<PhotoTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const photoUseCase = new PhotoUseCase();

    const fetchPhotos = async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await photoUseCase.getAllPhotos();
            setPhotos(result);
            setFilteredPhotos(result);
        } catch (err) {
            const errorMessager = err instanceof Error ? err.message : "Erro desconhecido";
            setError(errorMessager || "Erro ao carregar fotos");
            console.error("Erro ao buscar fotos:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const results = photoUseCase.searchPhotos(photos, query);
        setFilteredPhotos(results);
    };

    const clearSearch = () => {
        setSearchQuery("");
        setFilteredPhotos(photos);
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    return {
        photos: filteredPhotos,
        allPhotos: photos,
        loading,
        error,
        searchQuery,
        handleSearch,
        clearSearch,
        refetch: fetchPhotos,
        totalPhotos: photos.length,
        totalResults: filteredPhotos.length
    };
};