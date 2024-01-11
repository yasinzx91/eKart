import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css'
import { removeFromWishlist } from '../redux/slices/wishList';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {

  const wishlist = useSelector((state)=>state.wishListReducer)
  const dispatch = useDispatch();

  const handlewishList = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div>
      <h1 className='text-center mb-3'
      style={{marginTop:"100px"}}>Wish List</h1>
         <Row className='m-5'>
          {
            wishlist?.length>0?
            wishlist.map((item)=>(
              <Col key={item.id} className='mb-5' sm={12} md={6} lg={3}>
              <Card style={{ width: '18rem' }} className='border border-danger p-2'>
              <Card.Img variant="top"  src={item.thumbnail} style={{height:'200px'}}/>
                <Card.Body>
                  <Card.Title>{`${item.title.slice(0,20)}...`}</Card.Title>
                  <Card.Text>
                      {`${item.description.slice(0,40)}...`}
                  </Card.Text>
                  <div className='d-flex justify-content-end align-items-center'>
                    <Button variant="outline-danger rounded"
                    onClick={()=>dispatch(removeFromWishlist(item.id))}>       
                      <i className="fa-solid  fa-trash"></i>
                    </Button>
                    <Button onClick={()=>handlewishList(item)} 
                    variant="outline-success rounded ms-3">
                      <i className="fa-solid fa-cart-plus"></i>
                    </Button>
                  </div>  
                </Card.Body>
            </Card>
  
              </Col>

             
             
            )):
            
            <>
            
            
            
            <Link className='text-center' to={'/'}>Back to home</Link></>
           
            
           }
        </Row>
    </div>
  )
}

export default WishList