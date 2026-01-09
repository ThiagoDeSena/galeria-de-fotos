import { Grid } from '@mui/material';
import PhotoCard from '../PhotoCard/PhotoCard';
import type { PhotoTO } from '../../../domain/entities/PhotoTO';

interface PhotoGridProps {
  photos: PhotoTO[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <Grid 
      container 
      spacing={3}
      className="animate-fadeIn"
    >
      {photos.map((photo) => (
        <Grid 
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }} 
          key={photo.id}
        >
          <PhotoCard photo={photo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoGrid;