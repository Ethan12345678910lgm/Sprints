import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { fetchArticles } from '../services/apiClient';
import { Article } from '../data/mockData';

const Journal = () => {
    const [posts, setPosts] = useState<Article[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchArticles().then(setPosts);
    }, []);

    return (
        <div>
            <SectionHeader title="Journal" subtitle="Stories from our makers, styling tips, and education." />
            <Grid container spacing={3}>
                {posts.map((post) => (
                    <Grid item xs={12} md={4} key={post.slug}>
                        <Card>
                            <CardMedia component="img" height="160" image={post.image} alt={post.title} />
                            <CardContent>
                                <Typography variant="h6">{post.title}</Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    {post.excerpt}
                                </Typography>
                                <Button onClick={() => navigate(`/journal/${post.slug}`)}>Read more</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Journal;