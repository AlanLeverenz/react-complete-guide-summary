import { useParams, Link } from 'react-router-dom'

function ProductDetailPage() {
  const params = useParams();

  // relative="route" goes back to parent route (in App)
  // relative="path" moves one segment in the path
  return (
    <>
      <h1>ProductDetails</h1>
      <p>{params.productId}</p>
      <p><Link to=".." relative='path'>Back</Link></p>
    </>
  );
}

export default ProductDetailPage;