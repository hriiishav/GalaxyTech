import {
  ProductsContainer,
  PageTitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  BuyButton,
} from "./styled";

function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: '$99.99' },
    { id: 2, name: 'Product 2', price: '$149.99' },
    { id: 3, name: 'Product 3', price: '$199.99' },
    { id: 4, name: 'Product 4', price: '$79.99' },
  ];

  return (
    <ProductsContainer>
      <PageTitle>Our Products</PageTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>Image</ProductImage>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <BuyButton>Buy Now</BuyButton>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
}

export default Products;
