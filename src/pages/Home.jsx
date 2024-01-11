import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';  
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishList';
import { addToCart } from '../redux/slices/cartSlice';


function Home() {

  const data = useFetch('https://dummyjson.com/products')

  const dispatch = useDispatch()

  return (
    <Row className='m-5'>
      

        {
          data?.length>0?
          data.map((item)=>(
            <Col key={item.id} className='mb-5' sm={12} md={6} lg={3}>
            <Card style={{ width: '18rem' }} className='border border-danger p-2'>
            <Card.Img variant="top"  src={item.thumbnail} style={{height:'200px'}}/>
              <Card.Body>
                <Card.Title>{`${item.title.slice(0,20)}...`}</Card.Title>
                <Card.Text>
                    {`${item.description.slice(0,40)}...`}
                </Card.Text>
                <div className='d-flex justify-content-end align-items-center'>
                  <Button onClick={()=>dispatch(addToCart(item))}
                   variant="outline-success rounded">
                    <i className="fa-solid fa-cart-plus"></i>
                  </Button>
                  <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger rounded ms-3">
                    <i className="fa-solid fa-heart"></i>
                  </Button>
                </div>  
              </Card.Body>
          </Card>

            </Col>
          )):
          <p>Nothing to display</p>

        }

      
    </Row>
  )
}

export default Home