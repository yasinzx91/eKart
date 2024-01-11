import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';


function Cart() {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const [total,setTotal] = useState(0)

  const getTotal = ()=>{
    
    if(cartArray.length>0){
      setTotal(cartArray?.map(item=>item.price).reduce((n1,n2)=>n1+n2))
    }
  }

  const handleCart = ()=>{
      alert("Thank You.. Your order has been placed successfully");
      dispatch(emptyCart());
      navigate('/')
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  return (
    <div style={{marginTop:'100px'}}>
     
      {cartArray?.length>0?
      <div className='row w-100'>
        <div className='col-lg-6 mx-5'>
          <table className='table border shadow'>
           <thead>
              <tr>
                <th>0</th>
                <th>Product</th>
                <th>Image</th>
                <th>Prise</th>
                <th>Action</th>
              </tr>
           </thead>
           <tbody>
              {cartArray?.map((item,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><img width={'160px'} height={'100px'} src={item.thumbnail} alt="" /></td>
                <td>{item.price}</td>
                <td>
                <Button onClick={()=>dispatch(removeFromCart(item.id))}
                    variant="outline-danger rounded ms-3">
                      <i className="fa-solid fa-trash"></i>
                </Button>
                </td>
              </tr>
              
              ))
                }
           </tbody>
          </table>
      </div>
      
      <div className='col-lg-4 d-flex align-items-center m-0 p-0 justify-content-center'>
            <div className='d-flex flex-column justify-content-center'>
                <h1>Cast Summery</h1>
                <div className='mt-2 d-flex justify-content-between'>
                  <h5 className='text-warning'>Total no.of products :</h5>
                  <h5 className='text-warning me-3'>{cartArray.length}</h5>
                </div>
                <div className='mt-2 d-flex justify-content-between'>
                  <h5 className='text-warning'>Total Prise :</h5>
                  <h5 className='text-warning me-3'>{total}</h5>
                </div>
                
                <button onClick={handleCart}
                 className='btn btn-success mt-2'>Check out</button>
            </div>
      </div>
      
      </div>
      :
      <h3 className='text-center text-danger mb-5 pb-5'>Nothing to display</h3>
      
      }
     </div>
    
  )
}

export default Cart