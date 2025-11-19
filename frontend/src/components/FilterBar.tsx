import { Stack, TextField, MenuItem } from '@mui/material';

interface FilterBarProps {
    category: string;
    onCategory: (val: string) => void;
    sort: string;
    onSort: (val: string) => void;
}

const FilterBar = ({ category, onCategory, sort, onSort }: FilterBarProps) => (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mb={2}>
        <TextField select label="Category" value={category} onChange={(e) => onCategory(e.target.value)}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="outerwear">Outerwear</MenuItem>
            <MenuItem value="dresses">Dresses</MenuItem>
            <MenuItem value="tops">Tops</MenuItem>
        </TextField>
        <TextField select label="Sort" value={sort} onChange={(e) => onSort(e.target.value)}>
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="price-asc">Price: Low to High</MenuItem>
            <MenuItem value="price-desc">Price: High to Low</MenuItem>
        </TextField>
    </Stack>
);

export default FilterBar;