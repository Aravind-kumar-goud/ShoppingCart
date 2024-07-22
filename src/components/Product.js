import React, { useEffect, useState } from 'react'
import { NavLink,useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addCart, addItem } from './Redux/Action';



function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoding] = useState(false)
  const dispatch=useDispatch()

  useEffect(() => {
    const getproduct = async () => {
      setLoding(true);
      const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.json())
      
      setLoding(false)
    }
    getproduct()

  }, [])

  const Load = () => {
    return (
      <>
        loading...
      </>
    )
  }

  const addProduct=(p)=>{
    console.log(p); 
            dispatch(addCart(p))
                 
  }

  const Showproduts = () => {
    return (
      <>
        <div className='container col-12  my-4' >
          <div className='row bg-whitesmoke'>
          <div className='col-md-6 '>
            <img src={product.image} alt="ufc logo" style={{ height: "420px", width: "360px",marginTop:" 20px" }} />
          </div>
          <div className='col-md-6 container my-5'>
            <h4 className='text-uppercase text-black-50 ' > {product.category}</h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead'> Rating{product.rating && product.rating.rate}
              <i className='fa fa-star'></i>
            </p>
            <h3 className='display-6 fw-bold my-4'>price:{product.price}$</h3>
            <button className='btn btn-primary px-3 mx-2' onClick={()=>addProduct(product)} > Add to Cart</button>
            {/* <button className='btn btn-primary'>Go to Cart</button> */}
            <NavLink className='btn btn-primary ms-2' to='/cart'> Go to Cart</NavLink>

          </div>
        </div>
        </div>
      </>
    )
  }





  return (
    <div>

      <div className='justify-content-center'>
        {console.log(product.id)}
        {loading ? <Load /> : <Showproduts />}

      </div>
    </div>
  )
}

export default Product