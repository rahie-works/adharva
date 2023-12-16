import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer/Footer'
import './Connect.css';

export default function Connect() {
  return ( 
    <>
    <div class='connect'>
      <h1>Connect with us on social media to stay updated on the latest news, promotions, and more!</h1>
      <div class='social-icons'>
        <Link
          class='social-icon-link facebook'
          to='https://www.facebook.com'
          target='_blank'
          aria-label='Facebook'
        >
          <i class='fab fa-facebook-f 24xl' />
        </Link>
        <Link
          class='social-icon-link instagram'
          to='https://www.instagram.com'
          target='_blank'
          aria-label='Instagram'
        >
          <i class='fab fa-instagram' />
        </Link>
        <Link
          class='social-icon-link youtube'
          to='https://www.youtube.com'
          target='_blank'
          aria-label='Youtube'
        >
          <i class='fab fa-youtube' />
        </Link>
        <Link
          class='social-icon-link twitter'
          to='https://www.twitter.com'
          target='_blank'
          aria-label='Twitter'
        >
          <i class='fab fa-twitter' />
        </Link>
        <Link
          class='social-icon-link linkedIn'
          to='https://www.linkedin.com'
          target='_blank'
          aria-label='LinkedIn'
        > 
          <i class='fab fa-linkedin' />
        </Link>
      </div>
      <h3>Or why wait?</h3>
      <h3>Send us a message now </h3>
      <div className='whatsapp-icon'>
        <Link
          className='social-icon-link whatsapp'
          to='https://www.whatsapp.com'
          target='_blank'
          aria-label='Whatsapp'
        > 
          <i class='fab fa-whatsapp' />
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}