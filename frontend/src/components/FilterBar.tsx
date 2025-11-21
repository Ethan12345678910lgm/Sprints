import {
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Stack,
    Typography,
    Slider,
    Chip
} from '@mui/material';

interface FilterBarProps {
    category: string;
    onCategory: (val: string) => void;
    size: string;
    onSize: (val: string) => void;
    priceRange: number[];
    onPriceRange: (range: number[]) => void;
    sort: string;
    onSort: (val: string) => void;
}

const categoryOptions = [
    { label: 'All styles', value: 'all' },
    { label: 'Linen', value: 'linen' },
    { label: 'Hemp', value: 'hemp' },
    { label: 'Bamboo', value: 'bamboo' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Tops', value: 'tops' },
    { label: 'Bottoms', value: 'bottoms' },
    { label: 'Dresses', value: 'dresses' }
];

const sizeOptions = ['all', 'XS', 'S', 'M', 'L', 'XL'];

const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' }
];

    const FilterBar = ({ category, onCategory, size, onSize, priceRange, onPriceRange, sort, onSort }: FilterBarProps) => {
        const handleCategory = (event: SelectChangeEvent) => onCategory(event.target.value);
        const handleSize = (event: SelectChangeEvent) => onSize(event.target.value);
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
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Chip label="Slow fashion" color="secondary" variant="outlined" size="small" />
                            <Chip label="Natural fibres" color="secondary" variant="outlined" size="small" />
                            <Chip label="Made in SA" color="secondary" variant="outlined" size="small" />
                        </Stack>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} width={{ xs: '100%', sm: 'auto' }}>
                        <FormControl fullWidth size="small">
                            <InputLabel>Category</InputLabel>
                                <Select label="Category" value={category} onChange={handleCategory} sx={{ minWidth: 170 }}>
                                    {categoryOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                        </FormControl>
                        <FormControl fullWidth size="small">
                            <InputLabel>Size</InputLabel>
                            <Select label="Size" value={size} onChange={handleSize} sx={{ minWidth: 140 }}>
                                {sizeOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option === 'all' ? 'All sizes' : option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth size="small">
                            <InputLabel>Sort</InputLabel>
                                <Select label="Sort" value={sort} onChange={handleSort} sx={{ minWidth: 160 }}>
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                        </FormControl>
                    </Stack>
                </Stack>
                <Stack mt={3} spacing={1} width={{ xs: '100%', md: 360 }}>
                    <Typography variant="body2" color="text.secondary">
                        Price range (R)
                    </Typography>
                    <Slider
                        value={priceRange}
                        onChange={(_, value) => onPriceRange(value as number[])}
                        valueLabelDisplay="auto"
                        min={400}
                        max={2000}
                        step={50}
                    />
                </Stack>
            </Paper>
    );
    };

    export default FilterBar;