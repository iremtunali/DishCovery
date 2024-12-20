import { TextField, Box } from '@mui/material';

export default function FilterBar({ onFilter }) {
    return (
        <Box sx={{ my: 2 }}>
            <TextField
                fullWidth
                label="Filter restaurants..."
                variant="outlined"
                onChange={(e) => onFilter(e.target.value)}
            />
        </Box>
    );
}