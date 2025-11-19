import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { articles } from '../data/mockData';

const JournalArticle = () => {
    const { slug } = useParams();
    const article = articles.find((a) => a.slug === slug);
    if (!article) return <Typography>Article not found.</Typography>;
    return (
        <div>
            <Typography variant="h3" fontWeight={700} gutterBottom>
                {article.title}
            </Typography>
            <img src={article.image} alt={article.title} style={{ width: '100%', borderRadius: 12 }} />
            <Typography mt={2}>{article.content}</Typography>
        </div>
    );
};

export default JournalArticle;