// src/presentation/components/SearchBar/SearchBar.tsx

import { TextField, IconButton, Paper, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  onClear: () => void;
  totalResults: number;
  totalPhotos: number;
}

const SearchBar = ({ 
  searchQuery, 
  onSearch, 
  onClear,
  totalResults,
  totalPhotos 
}: SearchBarProps) => {
  return (
    <Paper 
      elevation={3} 
      className="p-6 mb-6 rounded-2xl bg-white"
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Pesquisar fotos por título..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="mb-4"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="text-gray-500" />
            </InputAdornment>
          ),
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <IconButton
                onClick={onClear}
                edge="end"
                size="small"
                aria-label="limpar busca"
                className="hover:bg-gray-100"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
          className: "rounded-full"
        }}
      />
      
      {searchQuery && (
        <Typography 
          variant="body2" 
          className="text-center text-gray-600"
        >
          Mostrando {totalResults} de {totalPhotos} fotos
        </Typography>
      )}
    </Paper>
  );
};

export default SearchBar;