import React from 'react'
import { Link } from 'react-router-dom'
import './card.css';

const Card = ({data}) => {

  return (
    <div className='cards'>
         <h1>{data.name.common}</h1>
        <Link to={`/details/${data.tld}`}> <img src={data.flags.png} alt={data.name.common}  className='cards_img'/> </Link>
    </div>
  )
}

export default Card