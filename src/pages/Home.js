import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner"
import ProductTile from "../components/ProductTile"

const Home = () => {

const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)


useEffect(() => {
    const data = [];
    async function fetchData(){
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        
        console.log(data)
        setProducts(data)

    }


if(data){
    setLoading(false)
    setProducts(data)
    }

    fetchData()
},[])

    return (
        <div className="row justify-content-around gap-4 mt-5">
            {
                loading ? 
                <div className="">
                    <Circles 
                    height={'120'}
                    width={'120'}
                    color={'blue'}
                    visible={true}
                    />
                </div>
             :

products && products.length ? 


products.map((productItem,index) => ( <ProductTile  product={productItem} key={index}/>)) : <Circles 
height={'120'}
width={'120'}
color={'blue'}
visible={true}
/>


            }
        </div>
    );
}


export default Home