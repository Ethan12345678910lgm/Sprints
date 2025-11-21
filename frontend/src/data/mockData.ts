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
    category: string;
    stock: number;
    status: 'active' | 'draft';
    createdAt: string;
};

export type Article = {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
};

export type OrderItem = {
    productId: number;
    quantity: number;
    size?: string;
};

export type Order = {
    id: string;
    customer: string;
    email: string;
    total: number;
    status: 'Pending' | 'Shipped' | 'Delivered';
    createdAt: string;
    address: string;
    items: OrderItem[];
};

export type Customer = {
    id: string;
    name: string;
    email: string;
    orders: string[];
    location?: string;
};

export type Event = {
    title: string;
    date: string;
    description: string;
    location: string;
    venue: string;
    latitude: number;
    longitude: number;
};

const sharedImages = {
    kimono: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    dress: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    shirt: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    jacket: 'https://images.unsplash.com/photo-1496747611180-206a5c8c46c2?auto=format&fit=crop&w=800&q=80',
    pants: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    sweater: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
};

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
        images: [sharedImages.kimono],
        category: 'outerwear',
        stock: 12,
        status: 'active',
        createdAt: '2024-01-08'
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
        images: [sharedImages.dress],
        category: 'dresses',
        stock: 18,
        status: 'active',
        createdAt: '2024-02-15'
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
        images: [sharedImages.shirt],
        category: 'tops',
        stock: 22,
        status: 'active',
        createdAt: '2024-03-01'
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
        images: [sharedImages.jacket],
        category: 'outerwear',
        stock: 9,
        status: 'active',
        createdAt: '2024-04-22'
    },
    {
        id: 5,
        name: 'Signal Hill Utility Pant',
        slug: 'signal-hill-pant',
        description: 'Organic cotton utility pant with adjustable hems for hiking and market runs.',
        price: 890,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        materials: 'Organic cotton',
        collectionName: 'Garden City',
        tags: ['cotton', 'bottoms'],
        images: [sharedImages.pants],
        category: 'bottoms',
        stock: 15,
        status: 'active',
        createdAt: '2024-05-10'
    },
    {
        id: 6,
        name: 'Atlantic Breeze Knit',
        slug: 'atlantic-breeze-knit',
        description: 'Lightweight knit pullover spun with recycled yarns for cool evenings.',
        price: 820,
        sizes: ['S', 'M', 'L'],
        materials: 'Recycled yarn blend',
        collectionName: 'Harbor Lines',
        tags: ['recycled', 'knit'],
        images: [sharedImages.sweater],
        category: 'tops',
        stock: 11,
        status: 'active',
        createdAt: '2024-06-01'
    }
];

export const articles: Article[] = [
    {
        slug: 'crafting-with-community',
        title: 'Crafting with Community',
        excerpt: 'How Khayelitsha makers are shaping the Cape Dawn capsule.',
        content:
            'We partner with local artisans, ensuring every stitch honors Ubuntu. Materials are traceable, payments are fair, and every capsule includes repair support for life.',
        image: sharedImages.dress
    },
    {
        slug: 'styling-ubuntu-layers',
        title: 'Styling Ubuntu Layers',
        excerpt: 'Layer natural fibres for Cape Town evenings.',
        content:
            'Mix linen, hemp, and bamboo to balance breathability and warmth. Our stylists curate looks for sunrise rituals, coworking, and promenade strolls.',
        image: sharedImages.kimono
    },
    {
        slug: 'dyeing-with-indigo',
        title: 'Dyeing with Indigo and Rooibos',
        excerpt: 'Earth dyes that save water and celebrate local botanicals.',
        content:
            'We dye in small batches using plant-based pigments. Each hue is documented with water usage and farmer partnerships.',
        image: sharedImages.shirt
    }
];

export const events: Event[] = [
    {
        title: 'Sea Point Sunrise Swap',
        date: '2024-08-12',
        description: 'Bring pre-loved garments and swap at the Sea Point promenade.',
        location: 'Sea Point, Cape Town',
        venue: 'Sea Point Promenade',
        latitude: -33.9124,
        longitude: 18.3904    },
    {
        title: 'Makers Market Pop-up',
        date: '2024-09-05',
        description: 'Showcasing co-op partners and live mending.',
        location: 'Woodstock Exchange',
        venue: '66-68 Albert Rd, Woodstock',
        latitude: -33.9282,
        longitude: 18.4464    }
];

export const orders: Order[] = [
    {
        id: 'ORD-101',
        customer: 'Lindiwe Jacobs',
        email: 'lindiwe@example.com',
        total: 2200,
        status: 'Pending',
        createdAt: '2024-06-18',
        address: '22 Loop St, Cape Town',
        items: [
            { productId: 1, quantity: 1, size: 'M' },
            { productId: 3, quantity: 1, size: 'L' }
        ]
    },
    {
        id: 'ORD-102',
        customer: 'Neo Mokoena',
        email: 'neo@example.com',
        total: 1350,
        status: 'Shipped',
        createdAt: '2024-06-12',
        address: '14 Albert Rd, Woodstock',
        items: [{ productId: 4, quantity: 1, size: 'L' }]
    },
    {
        id: 'ORD-103',
        customer: 'Guest Account',
        email: 'guest@example.com',
        total: 980,
        status: 'Delivered',
        createdAt: '2024-05-28',
        address: 'Online order',
        items: [{ productId: 2, quantity: 1, size: 'M' }]
    }
];

export const customers: Customer[] = [
    { id: 'C-1', name: 'Lindiwe Jacobs', email: 'lindiwe@example.com', orders: ['ORD-101'], location: 'Cape Town' },
    { id: 'C-2', name: 'Neo Mokoena', email: 'neo@example.com', orders: ['ORD-102'], location: 'Johannesburg' },
    { id: 'C-3', name: 'Guest Account', email: 'guest@example.com', orders: ['ORD-103'] }
];

export const adminCredentials = {
    email: 'admin@example.com',
    password: 'password'
};