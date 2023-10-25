import React from 'react'
import Cart from './Cart'
import Constant from './Constant'

// use App2.css for this one

function Netflix() {

    const netflix = (val) => {
        return (
            <Cart imgSrc={val.imgscr}
                sName={val.sname}
                link={val.links} />
        )

    }
    return (

        <div>
            <h1 className='heading_style'>LIST OF TOP 5 NETFLIX SERIES</h1>
            {Constant.map(netflix)}
        </div>
    )
}

export default Netflix
