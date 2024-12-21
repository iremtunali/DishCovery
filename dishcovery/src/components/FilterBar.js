import React, { useState } from "react";
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";

export default function FilterBar({ onFilterChange }) {
    const [filters, setFilters] = useState({
        search: "",
        city: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleFilter = () => {
        onFilterChange(filters);
    };

    return (
        <Box sx={{ display: "flex", gap: 2, mb: 4, alignItems: "center" }}>
            <TextField
                name="search"
                label="Search by Name"
                variant="outlined"
                value={filters.search}
                onChange={handleChange}
                sx={{ flex: 1 }}
            />
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel>City</InputLabel>
                <Select
                    name="city"
                    value={filters.city}
                    onChange={handleChange}
                >
                    <MenuItem value="">All Cities</MenuItem>
                    <MenuItem value="Istanbul">Istanbul</MenuItem>
                    <MenuItem value="Ankara">Ankara</MenuItem>
                    <MenuItem value="Izmir">Izmir</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Category</InputLabel>
                <Select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                >
                    <MenuItem value="">All Categories</MenuItem>
                    <MenuItem value="Italian">Italian</MenuItem>
                    <MenuItem value="Fast Food">Fast Food</MenuItem>
                    <MenuItem value="Turkish">Turkish</MenuItem>
                    <MenuItem value="Cafe">Cafe</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleFilter}>
                Apply Filters
            </Button>
        </Box>
    );
}
