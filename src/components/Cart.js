import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, delCart, loginData } from './Redux/Action'

function Cart() {

  const state = useSelector(state => state)

  const dispatch = useDispatch()
  var totalPrice = 0;

  const handleSub = (e) => {
    dispatch(addCart(e))

  }

  const handleMin = (e) => {
    dispatch(delCart(e))

  }

  const handleCancel = () => {
    console.log(state.cart.length=0);
    dispatch(loginData(false))
  }

  const handleBuy = () => {

    dispatch(loginData(false))
    
  }


  return (
    <>
      {state.cart.map((e) => {
        totalPrice += state.login ? (e.qty * e.price) - (e.qty * e.price * 0.1) : (e.qty * e.price)

        return (
          <>
            <div className='container  my-5' key={e.id}>
              <div className='row' >
                <div className='col-md-5'  >
                  <img src={e.image} alt={e.title} style={{ width: "180px", height: "180px" }} />
                </div>
                <div className='col-md-5'>
                  <h3>{e.title}</h3>
                  {state.login ? <p className='lead fw-bold'>
                    {e.qty}* ${e.price}=${(e.qty * e.price).toFixed(2) - (e.qty * e.price * 0.1).toFixed(2)}
                  </p> : <p className='lead fw-bold'>
                    {e.qty}* ${e.price}=${(e.qty * e.price).toFixed(2)}
                  </p>}
                  <button className='btn btn-outline-dark me-4' onClick={() => handleSub(e)}>
                    <i className='fa fa-plus' ></i>
                  </button>
                  <button className='btn btn-outline-dark me-4' onClick={() => handleMin(e)}>
                    <i className='fa fa-minus'></i>
                  </button>
                </div>
              </div>
            </div>

          </>

        )
      }

      )
      }
      {totalPrice ?<> <h3>Total price=${totalPrice.toFixed(2)}</h3>
       <div className='container'>
       <div className='d-flex justify-content-center '>
         <button type="submit " className="btn btn-info " onClick={() => handleCancel()}>Cancel</button>
         <button type="submit " className="btn btn-info mx-2" onClick={() => handleBuy()}>Buy</button>
       </div>
     </div>
     </> : <h3>Cart is empty </h3>}
     
     
    </>
  )
}

export default Cart