import React from 'react';

function ProductList() {
  const products = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69
    },
    {
      id: 2,
      title: 'Samsung Galaxy S21',
      description: 'A powerful Android smartphone with great camera',
      price: 799,
      discountPercentage: 8.76,
      rating: 4.84
    },
    {
      id: 3,
      title: 'Google Pixel 5',
      description: 'A pure Android smartphone with best-in-class camera',
      price: 699,
      discountPercentage: 10.01,
      rating: 4.72
    }
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Discount: {product.discountPercentage.toFixed(2)}%</p>
            <p>Rating: {product.rating.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
