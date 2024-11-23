import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/actions/Products/delete_product";

const Card = ({product }) =>{
    const dispatch = useDispatch();
const {
    id, name, category, color, description, image, price, buyprice, stock
} = product;

const handleDleteProduct = () =>{
    dispatch(deleteProduct(id));
}

return (
    <div className="card">
        <p >id: {id} </p>
        <img src={image} alt={name} className="card-image" />
        <button onClick={handleDleteProduct}></button>
        <div className="card-content">
            <h2 className="card-name">{name } </h2>
            <p className="card-category">Categoria:  {category} </p>
            {color && <p className="card-color">Color: {color}</p>}
                {description && <p className="card-description">{description}</p>}
                
                <p className="card-price">Price: ${price}</p>
                <p className="card-price">Price: ${buyprice}</p>
                <p className="card-stock">Stock: {stock}</p>
                
        </div>

    </div>
)
}

export default Card;