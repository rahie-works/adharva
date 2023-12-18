import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

function CardItem(props) {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add("fade-in");
    } else {
      ref.current.classList.remove("fade-in");
    }
  }, [isIntersecting]);

  return (
    <>
      <div className='cards__item' ref={ref}>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.description}</h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardItem;