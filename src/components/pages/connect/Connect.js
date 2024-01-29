import React from 'react';
import { Link , Linking} from 'react-router-dom';
import Footer from './footer/Footer'
import './Connect.css';
import { CONNECT_TITLE } from './constants/ConnectConstant';

export default function Connect() {

  const encodedWhatsappText = "Hello%2C%0D%0AI+am+interested+to+know+more+about+the+services+you+provide.";
  return ( 
    <>
    <div className="connect">
      <h1>{CONNECT_TITLE}</h1>
      <div className='social-icons'>
        <Link
          className='social-icon-link facebook'
          to='https://www.facebook.com/profile.php?id=100091785007499'
          target='_blank'
          aria-label='Facebook'
        >
          <i className='fab fa-facebook-f 24xl' />
        </Link>
        <Link
          className='social-icon-link instagram'
          to='https://www.instagram.com/aic_nilambur/'
          target='_blank'
          aria-label='Instagram'
        >
          <i className='fab fa-instagram' />
        </Link>
        <Link
          className='social-icon-link youtube'
          to='https://www.youtube.com'
          target='_blank'
          aria-label='Youtube'
        >
          <i className='fab fa-youtube' />
        </Link>
        <Link
          className='social-icon-link twitter'
          to='https://www.twitter.com'
          target='_blank'
          aria-label='Twitter'
        >
          <i className='fab fa-twitter' />
        </Link>
        <Link
          className='social-icon-link linkedIn'
          to='https://www.linkedin.com'
          target='_blank'
          aria-label='LinkedIn'
        > 
          <i className='fab fa-linkedin' />
        </Link>
      </div>
      <h3>Or why wait?</h3>
      <h3>Send us a message now </h3>
      <div className='whatsapp-icon'>
        <Link
          className='social-icon-link whatsapp'
          target='_blank'
          to={`https://wa.me/+16475402464?text=${encodedWhatsappText}`}
          aria-label='Whatsapp'
        > 
          <h2>+91 9764 776 554 <i className='fab fa-whatsapp' /></h2>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}