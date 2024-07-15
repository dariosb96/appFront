import React, { useState } from "react";
import { Link } from "react-router-dom";
import {createProduct}  from "../../Redux/actions/Products/create_Product";
import { useDispatch } from "react-redux";
import "./Create.module.css"

const Create = () => {
    const [product, setProduct ] = useState({
        name: '',
        category: '',
        color: '',
        description: '',
        image: '', 
        price: '',
        stock: ''
    });

    const dispatch = useDispatch();
    

const handleChange = (e) => {
    setProduct({
        ...product,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
};

return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleChange}
                className="input-field"
            />
            <input
                type="text"
                name="category"
                placeholder="category"
                value={product.category}
                onChange={handleChange}
                className="input-field"
            />
            <input
                type="text"
                name="color"
                placeholder="color"
                value={product.color}
                onChange={handleChange}
                className="input-field"
            />
            <input
                type="text"
                name="description"
                placeholder="description"
                value={product.description}
                onChange={handleChange}
                className="input-field"
            />
            <input
                type="text"
                name="image"
                placeholder="image"
                value={product.image}
                onChange={handleChange}
                className="input-field"
            />
            <input
                type="number"
                name="price"
                placeholder="price"
                value={product.price}
                onChange={handleChange}
                className="input-field"
            />
            <input
                type="number"
                name="stock"
                placeholder="stock"
                value={product.stock}
                onChange={handleChange}
                className="input-field"
            />
           
            <button type="submit" className="submit-button">Create Product</button>
        </form>
    </div>
);
};

export default Create;

