import { FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';

interface FilterBarProps {
    category: string;
    onCategory: (val: string) => void;
    sort: string;
    onSort: (val: string) => void;
}

const categoryOptions = [
    { label: 'All styles', value: 'all' },
    { label: 'Linen', value: 'linen' },
    { label: 'Hemp', value: 'hemp' },
    { label: 'Bamboo', value: 'bamboo' },
    { label: 'Outerwear', value: 'outerwear' }
];

const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' }
];

const FilterBar = ({ category, onCategory, sort, onSort }: FilterBarProps) => {
    const handleCategory = (event: SelectChangeEvent) => onCategory(event.target.value);
    const handleSort = (event: SelectChangeEvent) => onSort(event.target.value);

    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                mb: 3,
                borderRadius: 3,
                border: '1px solid #efe6d9',
                background: 'linear-gradient(120deg, #ffffff 0%, #f7f1e6 100%)',
                boxShadow: '0 18px 35px rgba(0,0,0,0.05)'
            }}
        >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center" justifyContent="space-between">
                <Stack spacing={0.5} alignItems="flex-start">
                    <Typography variant="overline" color="text.secondary">
                        Shop filters
                    </Typography>
                    <Typography variant="h6">Find your next staple</Typography>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', sm: 'auto' }}>
                    <FormControl fullWidth size="small">
                        <InputLabel>Category</InputLabel>
                        <Select label="Category" value={category} onChange={handleCategory} sx={{ minWidth: 180 }}>
                            {categoryOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth size="small">
                        <InputLabel>Sort</InputLabel>
                        <Select label="Sort" value={sort} onChange={handleSort} sx={{ minWidth: 180 }}>
                            {sortOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default FilterBar;
