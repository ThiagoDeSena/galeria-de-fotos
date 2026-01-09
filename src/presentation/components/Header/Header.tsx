import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const Header = () => {
  return (
    <AppBar 
      position="sticky" 
      className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
    >
      <Toolbar className="justify-center py-4">
        <Box className="flex items-center gap-3">
          <CameraAltIcon className="text-white text-5xl" />
          <Typography
            variant="h4"
            component="h1"
            className="text-white font-bold tracking-wide"
          >
            Galeria de Fotos
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;