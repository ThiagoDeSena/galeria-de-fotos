import { Paper, Typography, Box } from '@mui/material';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

interface EmptyStateProps {
  searchQuery: string;
}

const EmptyState = ({ searchQuery }: EmptyStateProps) => {
  return (
    <Paper
      elevation={0}
      className="p-12 text-center bg-gray-50 rounded-2xl"
    >
      <Box className="flex flex-col items-center">
        <ImageNotSupportedIcon
          className="text-gray-400 mb-4"
          sx={{ fontSize: 80 }}
        />
        <Typography variant="h6" className="text-gray-600 mb-2">
          Nenhuma foto encontrada
        </Typography>
        {searchQuery && (
          <Typography variant="body2" className="text-gray-500">
            Não encontramos fotos com o termo "{searchQuery}"
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default EmptyState;