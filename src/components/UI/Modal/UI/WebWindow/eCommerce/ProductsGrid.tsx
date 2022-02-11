import { ProductItem } from './ProductItem';

const products = [
  {
    name: 'Vision one men',
    price: 145,
    img: '/img/product1.jpg',
  },
  {
    name: 'Vision one women',
    price: 145,
    img: '/img/product2.jpg',
  },
];

export const ProductsGrid = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 p-10'>
      <ProductItem
        name='Producto de ejemplo'
        number={450}
        img='/img/product1.jpg'
      />
      <ProductItem name='Producto de ejemplo' img='/img/product2.jpg' />
    </div>
  );
};
