import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-gray-900 text-white py-6 mt-12 text-center"
    >
      <Typography variant="body2">
        © 2026 Galeria de Fotos. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;