import { Box, TextField, MenuItem } from '@mui/material';

export default function FilterBar({ setSearchFilters }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchFilters((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            {/* Arama Çubuğu */}
            <TextField
                name="name"
                label="Search by Name"
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
            />
            {/* Şehir Filtresi */}
            <TextField
                name="city"
                label="Filter by City"
                variant="outlined"
                select
                onChange={handleInputChange}
                fullWidth
            >
                <MenuItem value="">All Cities</MenuItem>
                <MenuItem value="Istanbul">Istanbul</MenuItem>
                <MenuItem value="Ankara">Ankara</MenuItem>
                <MenuItem value="Izmir">Izmir</MenuItem>
            </TextField>
            {/* Kategori Filtresi */}
            <TextField
                name="category"
                label="Filter by Category"
                variant="outlined"
                select
                onChange={handleInputChange}
                fullWidth
            >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Turkish">Turkish</MenuItem>
                <MenuItem value="Italian">Italian</MenuItem>
                <MenuItem value="Seafood">Seafood</MenuItem>
            </TextField>
        </Box>
    );
}

