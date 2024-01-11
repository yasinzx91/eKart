import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>

    <div className='d-flex justify-content-evenly align-items-center w-100'>
        <div className='websites' style={{width:'400px'}}>
          <h4 className='mb-3'>
          <i className="fa-solid fa-cart-shopping fa-beat-fade me-2"></i>
          <span className='text-danger'>E Kart</span>
          </h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero, asperiores eveniet corrupti doloremque assumenda architecto recusandae blanditiis ipsa molestias quibusdam! Magnam, consequuntur at. Voluptas quaerat nihil enim quasi placeat.
          </h6>
        </div>
        <div className='links d-flex flex-column'>
          <h4 className='mb-3'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
          <Link to={'/wish-list'} style={{textDecoration:'none',color:'white'}}>Wish List</Link>
        </div>
        <div className='guides d-flex flex-column'>
          <h4 className='mb-3'>Guides</h4>
          <Link to={'https://fonts.google.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}> React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Boot Watch</Link>
        </div>
        <div className='contacts d-flex flex-column'>
          <h4 className='mb-3'>Contact Us</h4>
          <div className='d-flex mb-2'>
            <input type="text" className='form-control' placeholder='Enter your email address'/>
            <button className='btn ms-2 btn-warning d-flex justify-content-center' style={{border:'0'}}>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center'>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-youtube fa-2x"></i></Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook fa-2x"></i></Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-instagram fa-2x"></i></Link>   
          </div>
        </div>
    
    </div>

    <p>Copyright @ 2023 Media Player. Built with react</p>

</div>
  )
}

export default Footer