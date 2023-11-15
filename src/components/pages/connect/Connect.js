import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

export default function Connect() {
  return ( 
    <div class='connect'>
      <div class='social-icons'>
        <Link
          class='social-icon-link facebook'
          to='/'
          target='_blank'
          aria-label='Facebook'
        >
          <i class='fab fa-facebook-f 24xl' />
        </Link>
        <Link
          class='social-icon-link instagram'
          to='/'
          target='_blank'
          aria-label='Instagram'
        >
          <i class='fab fa-instagram' />
        </Link>
        <Link
          class='social-icon-link youtube'
          to='/'
          target='_blank'
          aria-label='Youtube'
        >
          <i class='fab fa-youtube' />
        </Link>
        <Link
          class='social-icon-link twitter'
          to='/'
          target='_blank'
          aria-label='Twitter'
        >
          <i class='fab fa-twitter' />
        </Link>
        <Link
          class='social-icon-link twitter'
          to='/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <i class='fab fa-linkedin' />
        </Link>
      </div>
    </div>
  )
}