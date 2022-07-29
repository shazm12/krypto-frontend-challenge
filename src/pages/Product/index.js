import React, {useState} from 'react'
import NavBar from '../../components/NavBar';
import ProductItem from '../../components/ProductItem';
import data from '../../db.json';
const prods = data.products;

const Product = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className='flex flex-col w-full bg-[#E5EEF8]'>
      <NavBar />
      <div className='flex gap-10 justify-center items-center flex-wrap w-full mt-[5vh] px-[8px]'>
        {
          prods.map((item) => (
            <ProductItem 
              id={item.id} 
              name={item.title} 
              rating={item.rating} 
              amount={item.amount} 
              image={item.image} />
          ))
        }
      </div>
    </div>
  )
}

export default Product;