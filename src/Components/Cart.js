import React from 'react'

function Cart (props) {
    return (
        <div>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgSrc} alt="myPic" className='card__img' />
                    <div className='card__info'>
                        <span className='card_Category'> A NETFLIX ORIGINAL SERIES</span>
                        <h3 className='card_title'>{props.sName}</h3>
                        <a href={props.link} target="_blank" rel="noreferrer">
                        <button>WATCH NOW</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
