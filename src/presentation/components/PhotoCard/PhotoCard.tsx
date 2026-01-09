import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Skeleton } from '@mui/material';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import type { PhotoTO } from '../../../domain/entities/PhotoTO';

interface PhotoCardProps {
  photo: PhotoTO;
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      className="h-full flex flex-col rounded-xl shadow-lg hover:shadow-2xl 
                 transition-all duration-300 hover:-translate-y-2 hover:scale-105 
                 cursor-pointer"
    >
      <Box className="relative pt-[100%] bg-gray-200 overflow-hidden">
        {!imageLoaded && !imageError && (
          <Skeleton
            variant="rectangular"
            className="absolute top-0 left-0 w-full h-full"
          />
        )}
        
        {imageError ? (
          <Box
            className="absolute top-0 left-0 w-full h-full flex flex-col 
                       items-center justify-center bg-gray-300"
          >
            <ImageNotSupportedIcon className="text-6xl text-gray-500" />
            <Typography variant="caption" className="mt-2 text-gray-600">
              Imagem não disponível
            </Typography>
          </Box>
        ) : (
          <CardMedia
            component="img"
            image={photo.url}
            alt={photo.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`absolute top-0 left-0 w-full h-full object-cover 
                       transition-transform duration-300 hover:scale-110
                       ${imageLoaded ? 'block' : 'hidden'}`}
          />
        )}
      </Box>
      
      <CardContent className="flex-grow text-center p-4">
        <Typography
          variant="body2"
          component="p"
          className="font-medium text-gray-800 line-clamp-2 min-h-[2.5em]"
        >
          {photo.title}
        </Typography>
        <Typography
          variant="caption"
          className="block mt-2 text-gray-500"
        >
          ID: {photo.id}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;