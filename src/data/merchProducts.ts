export interface MerchProduct {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  comingSoon: boolean;
}

export const merchProducts: MerchProduct[] = [
  {
    id: 'clive-tshirt',
    title: 'CLIVE Classic T-Shirt',
    price: '$29.99',
    imageUrl: '/images/merch/tshirt-placeholder.svg',
    comingSoon: true
  },
  {
    id: 'clive-hoodie',
    title: 'CLIVE Premium Hoodie',
    price: '$59.99',
    imageUrl: '/images/merch/hoodie-placeholder.svg',
    comingSoon: true
  },
  {
    id: 'clive-cap',
    title: 'CLIVE Cap',
    price: '$24.99',
    imageUrl: '/images/merch/cap-placeholder.svg',
    comingSoon: true
  },
  {
    id: 'clive-mug',
    title: 'CLIVE Coffee Mug',
    price: '$19.99',
    imageUrl: '/images/merch/mug-placeholder.svg',
    comingSoon: true
  },
  {
    id: 'clive-poster',
    title: 'Limited Edition CLIVE Poster',
    price: '$14.99',
    imageUrl: '/images/merch/poster-placeholder.svg',
    comingSoon: true
  },
  {
    id: 'clive-stickers',
    title: 'CLIVE Sticker Pack',
    price: '$9.99',
    imageUrl: '/images/merch/stickers-placeholder.svg',
    comingSoon: true
  }
]; 