import {
    Button,
    Chip,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Slider,
    Stack,
    Typography
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
    onReset?: () => void;
}

export const DEFAULT_PRICE_RANGE: readonly [number, number] = [400, 2000];

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

const FilterBar = ({ category, onCategory, size, onSize, priceRange, onPriceRange, sort, onSort, onReset }: FilterBarProps) => {
    const handleCategory = (event: SelectChangeEvent) => onCategory(event.target.value);
    const handleSize = (event: SelectChangeEvent) => onSize(event.target.value);
    const handleSort = (event: SelectChangeEvent) => onSort(event.target.value);

    const activeFilters = [
        category !== 'all'
            ? { label: categoryOptions.find((option) => option.value === category)?.label ?? category, clear: () => onCategory('all') }
            : null,
        size !== 'all' ? { label: `Size ${size}`, clear: () => onSize('all') } : null,
        priceRange[0] !== DEFAULT_PRICE_RANGE[0] || priceRange[1] !== DEFAULT_PRICE_RANGE[1]
            ? {
                label: `R${priceRange[0]} - R${priceRange[1]}`,
                clear: () => onPriceRange([...DEFAULT_PRICE_RANGE])
            }
            : null,
        sort !== 'newest' ? { label: sortOptions.find((option) => option.value === sort)?.label ?? sort, clear: () => onSort('newest') } : null
    ].filter(Boolean) as { label: string; clear: () => void }[];

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                mb: 4,
                borderRadius: 3,
                border: '1px solid #efe6d9',
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f1e7 100%)',
                boxShadow: '0 22px 40px rgba(0,0,0,0.06)'
            }}
        >
            <Stack spacing={3}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="flex-start" justifyContent="space-between">
                    <Stack spacing={0.5} alignItems="flex-start">
                        <Typography variant="overline" color="text.secondary">
                            Shop filters
                        </Typography>
                        <Typography variant="h6" fontWeight={700} color="text.primary">
                            Find your next staple
                        </Typography>
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

                <Divider sx={{ borderStyle: 'dashed', borderColor: '#e6dacb' }} />

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ xs: 'stretch', md: 'center' }}>
                    <Stack spacing={1} flex={1}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="body2" color="text.secondary">
                                Price range (R)
                            </Typography>
                            <Typography variant="body2" fontWeight={700} color="text.primary">
                                R{priceRange[0]} – R{priceRange[1]}
                            </Typography>
                        </Stack>
                        <Slider
                            value={priceRange}
                            onChange={(_, value) => onPriceRange(value as number[])}
                            valueLabelDisplay="auto"
                            min={DEFAULT_PRICE_RANGE[0]}
                            max={DEFAULT_PRICE_RANGE[1]}
                            step={50}
                            marks
                        />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                        {activeFilters.length > 0 ? (
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {activeFilters.map((filter) => (
                                    <Chip key={filter.label} label={filter.label} onDelete={filter.clear} color="primary" variant="outlined" />
                                ))}
                            </Stack>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                No filters applied yet.
                            </Typography>
                        )}
                        <Button variant="text" onClick={onReset} disabled={!onReset} sx={{ alignSelf: { xs: 'flex-start', sm: 'center' } }}>
                            Reset filters
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default FilterBar;
