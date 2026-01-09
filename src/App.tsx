// src/App.tsx

import { Box, Container, CircularProgress, Alert } from '@mui/material';
import Header from './presentation/components/Header/Header';
import SearchBar from './presentation/components/SearchBar/SearchBar';
import PhotoGrid from './presentation/components/PhotoGrid/PhotoGrid';
import EmptyState from './presentation/components/EmptyState/EmptyState';
import Footer from './presentation/components/Footer/Footer';
import { usePhotos } from './application/hooks/usePhotos';
import './App.css';

function App() {
  const { 
    photos, 
    loading, 
    error, 
    searchQuery, 
    handleSearch, 
    clearSearch,
    totalPhotos,
    totalResults
  } = usePhotos();

  return (
    <Box className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      <Container maxWidth="lg" className="flex-grow py-8">
        <SearchBar
          searchQuery={searchQuery}
          onSearch={handleSearch}
          onClear={clearSearch}
          totalResults={totalResults}
          totalPhotos={totalPhotos}
        />

        {error && (
          <Alert severity="error" className="mb-6 rounded-lg">
            {error}
          </Alert>
        )}

        {loading ? (
          <Box className="flex justify-center py-16">
            <CircularProgress size={60} />
          </Box>
        ) : photos.length === 0 ? (
          <EmptyState searchQuery={searchQuery} />
        ) : (
          <PhotoGrid photos={photos} />
        )}
      </Container>

      <Footer />
    </Box>
  );
}

export default App;