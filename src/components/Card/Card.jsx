import React from "react";
import { Link } from "react-router-dom";

const Card = ({product }) =>{
const {
    id, name, category, color, description, image, price, stock
} = product;

return (
    <div className="card">
        <img src={image} alt={name} className="card-image" />
        <div className="card-content">
            <h2 className="card-name">{name } </h2>
            <p className="card-category">Categoria:  {category} </p>
            {color && <p className="card-color">Color: {color}</p>}
                {description && <p className="card-description">{description}</p>}
                
                <p className="card-price">Price: ${price.toFixed(2)}</p>
                <p className="card-stock">Stock: {stock}</p>

        </div>

    </div>
)
}

export default Card;