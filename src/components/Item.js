import React from 'react'
import Button from './Button';
import './Item.css';


const Item = ({foodName, ingredient, bestTimeServed, price, backgroundImage, leftbtnlink, leftbtntext, rightbtnlink, rightbtntext, twoButtons}) => {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return(
        <>
        {/** Card with it's text */}
        <div className="card"  style={{
            backgroundImage: `url(${backgroundImage})`
        }}>
            <div className="items">
            <p className="food__name">
                {foodName}
            </p>
            <p className="ingredient">
            {truncate(`${ingredient}`, 100)}
                
            </p>
            <p className="time__served">
                {bestTimeServed}
            </p>
            <p className="price">
                {price}
            </p>

             {/** Buttons */}
             <div className="button__container">
                <div className="item__button">
                    <Button imp='primary' text={leftbtntext} link={leftbtnlink} />
                    {twoButtons && (<Button imp="secondary" text={rightbtntext} link={rightbtnlink} />)}
                </div>
            </div>
            
            </div>
        </div>
    
        </>
    )
}

export default Item