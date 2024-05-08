import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/ProductTile";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Set loading to true initially

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        
        setLoading(false); // Set loading to false in case of error
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="container bg-info justify-content-around gap-4 mt-5">
          <Circles
            height={'120'}
            width={'120'}
            color={'blue'}
            visible={true}
            wrapperStyle={{ 
                display: "flex",
                "justify-content": "center",
                height: "75vh",
                "align-items": "center"
                 }}
          />
        </div>
      ) : (
        products.length > 0 ? (
          <div className="row justify-content-around gap-4 mt-5">
            {products.map((productItem, index) => (
              <ProductTile key={index} product={productItem} />
            ))}
            
          </div>
        ) : (
          <div className="container align-items-center justify-content-around gap-4 mt-5">
            <Circles
              height={'120'}
              width={'120'}
              color={'red'}
              visible={true}
              wrapperStyle={{ 
                display: "flex",
                "justify-content": "center",
                height: "75vh",
                "align-items": "center"
                 }}
            />
          </div>
        )
      )}
    </>
  );
};

export default Home;
