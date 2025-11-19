export type Product = {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    sizes: string[];
    materials: string;
    collectionName: string;
    tags: string[];
    images: string[];
};

export type Article = {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
};

const sharedImages = {
    kimono: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    dress: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    shirt: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    jacket: 'https://images.unsplash.com/photo-1496747611180-206a5c8c46c2?auto=format&fit=crop&w=800&q=80'};

export const products: Product[] = [
    {
        id: 1,
        name: 'Khayelitsha Kimono',
        slug: 'khayelitsha-kimono',
        description: 'Flowing hemp kimono inspired by Cape Town sunsets and community gatherings.',
        price: 1200,
        sizes: ['XS', 'S', 'M', 'L'],
        materials: 'Hemp & organic cotton',
        collectionName: 'Cape Dawn Capsule',
        tags: ['unisex', 'hemp', 'limited'],
        images: [sharedImages.kimono]
    },
    {
        id: 2,
        name: 'Ubuntu Wrap Dress',
        slug: 'ubuntu-wrap-dress',
        description: 'A wrap silhouette celebrating movement, made with low-impact dyes.',
        price: 980,
        sizes: ['S', 'M', 'L'],
        materials: 'Bamboo viscose',
        collectionName: 'Cape Dawn Capsule',
        tags: ['bamboo', 'wrap'],
        images: [sharedImages.dress]
    },
    {
        id: 3,
        name: 'Harbor Linen Shirt',
        slug: 'harbor-linen-shirt',
        description: 'Relaxed linen shirt with corozo buttons crafted by a Khayelitsha co-op.',
        price: 750,
        sizes: ['S', 'M', 'L', 'XL'],
        materials: 'Linen',
        collectionName: 'Harbor Lines',
        tags: ['linen', 'breathable'],
        images: [sharedImages.shirt]
    },
    {
        id: 4,
        name: 'Garden City Chore Jacket',
        slug: 'garden-city-chore',
        description: 'Olive chore jacket lined with recycled cotton celebrating urban gardens.',
        price: 1350,
        sizes: ['M', 'L', 'XL'],
        materials: 'Recycled cotton',
        collectionName: 'Harbor Lines',
        tags: ['recycled', 'outerwear'],
        images: [sharedImages.jacket]
    }
];

export const articles: Article[] = [
    {
        slug: 'crafting-with-community',
        title: 'Crafting with Community',
        excerpt: 'How Khayelitsha makers are shaping the Cape Dawn capsule.',
        content: 'We partner with local artisans, ensuring every stitch honors Ubuntu.',
        image: sharedImages.dress
    },
    {
        slug: 'styling-ubuntu-layers',
        title: 'Styling Ubuntu Layers',
        excerpt: 'Layer natural fibres for Cape Town evenings.',
        content: 'Mix linen, hemp, and bamboo to balance breathability and warmth.',
        image: sharedImages.kimono
    }
];

export const events = [
    {
        title: 'Sea Point Sunrise Swap',
        date: '2024-08-12',
        description: 'Bring pre-loved garments and swap at the Sea Point promenade.',
        location: 'Sea Point, Cape Town'
    },
    {
        title: 'Makers Market Pop-up',
        date: '2024-09-05',
        description: 'Showcasing co-op partners and live mending.',
        location: 'Woodstock Exchange'
    }
];