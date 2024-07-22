import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Products() {
  const [product, setProduct] = useState([])
  const [data, setData] = useState(product)
  const [loding, setLoding] = useState(false)
  let componentMount=true

  useEffect(() => {
    const getproduct = async () => {
      setLoding(true);
      if(componentMount){
      const response = await fetch('http://fakestoreapi.com/products');
      setProduct(await response.clone().json());
      setData(await response.json());
      setLoding(false);
      }
      return  ()=>{
        componentMount=false;

      }
     
      
    }
    getproduct()
    // axios.get('https://fakestoreapi.com/products')
    //   .then(res => {
    //     setLoding(false)
    //     setData([...product, ...res.data])
    //     setProduct([...product, ...res.data])
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // setLoding(true)

  }, [])



  const Load = () => {
    return (
      <>
        loading...
      </>
    )
  }


  const filterProduct = (categ) => {
    console.log(product);
    const filterItem = product.filter((e) => e.category === categ);
    console.log(filterItem);
    setData(filterItem)

  }

  const Showproduts = () => {
    return (
      <>
        <div className='container-fluid'>
          <div className='display-flex justify-content-center '>
            <button className='btn btn-warning mx-1 my-2' onClick={() => setData(product)}>All</button>
            <button className='btn btn-warning mx-1 my-2' onClick={() => filterProduct("men's clothing")}>men's</button>
            <button className='btn btn-warning mx-1 my-2' onClick={() => filterProduct("women's clothing")}>womens</button>
            <button className='btn btn-warning mx-1 my-2' onClick={() => filterProduct("jewelery")}>jewelery</button>
            <button className='btn btn-warning mx-1 my-2' onClick={() => filterProduct("electronics")}>Electronic</button>

          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  {data.map((items) => {
                    return (

                      <div className='col-md-4 mb-4' key={items.id} style={{paddingRight:"2rem"}}>
                        <div className='row'>
                          <div className="card p-4" style={{
                            heigth: 100, alignItems: "center",
                            backgroundColor: "whitesmoke",
                           
                          }} >
                            <img className="card-img-top " src={items.image} alt={items.title} style={{ height: "220px", width: "200px" }} />
                            <div className="card-body">
                              <h5 className="card-title">{items.title.substring(0, 12)}</h5>
                              <p className="card-text">${items.price}</p>
                            </div>
                            <NavLink to={`/product/${items.id}`} className='btn btn-primary'>Buy Now</NavLink>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

      </>
    )

  }

  return (
    <div>
      <div className='container' id="product">
        <div className='row'>
          <div className='col-12'>
            <h1 className='display-6 text-center'>Latest Products</h1>
          </div>
        </div>

        <div className='justify-content-center'>
          {loding ? <Load /> : <Showproduts />}

        </div>
      </div>


    </div>
  )
}

export default Products