import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSell } from "../../Redux/actions/Sells/create_sell";
import { filterProducts } from "../../Redux/actions/Products/filter_products";

const Create_sell = () => {
    const [sell, setSell] = useState({
        place: "",
        products: [],
        year: "",
        month: "",
        day: "",
        time: ""
    });

    const [category, setCategory] = useState(""); // Selected category

    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    useEffect(() => {
        if (category && token) {
            dispatch(filterProducts(category, token));
        }
    }, [dispatch, category, token]);
    
    const availableProducts = useSelector(state => state.FilteredProd);
    const allCategories = useSelector(state => [...new Set(state.Products.map(product => product.category))]);

    const handleChange = (e) => {
        setSell({
            ...sell,
            [e.target.name]: e.target.value,
        });
    };

    const handleCategorySelect = (e) => {
        setCategory(e.target.value); // Update only the category
    };

    const handleProductSelect = (e) => {
        const selectedProduct = availableProducts.find(product => product.name === e.target.value);
        if (selectedProduct && !sell.products.some(p => p.id === selectedProduct.id)) {
            setSell(prevSell => ({
                ...prevSell,
                products: [...prevSell.products, selectedProduct]
            }));
        }
    };


    const handleProductRemove = (productId) => {
        setSell(prevSell => ({
            ...prevSell,
            products: prevSell.products.filter(prod => prod.id !== productId)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createSell(sell, token));
        alert("Venta creada con éxito");

        // Clear form after submission
        setSell({
            place: "",
            products: [],
            year: "",
            month: "",
            day: "",
            time: ""
        });
        setCategory("");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="place"
                    placeholder="Insert place"
                    value={sell.place}
                    onChange={handleChange}
                    className="input-field"
                />

                <select onChange={handleCategorySelect} className="input-field" value={category}>
                    <option value="">Select a category</option>
                    {allCategories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                {category && (
                    <select onChange={handleProductSelect} className="input-field">
                        <option value="">Select a product</option>
                        {availableProducts.map((product) => (
                            <option key={product.id} value={product.name}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                )}

                <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={sell.year}
                    onChange={handleChange}
                    className="input-field"
                />

                <input
                    type="number"
                    name="month"
                    placeholder="Month"
                    value={sell.month}
                    onChange={handleChange}
                    className="input-field"
                />

                <input
                    type="number"
                    name="day"
                    placeholder="Day"
                    value={sell.day}
                    onChange={handleChange}
                    className="input-field"
                />

                <input
                    type="time"
                    name="time"
                    placeholder="Time"
                    value={sell.time}
                    onChange={handleChange}
                    className="input-field"
                />

                <button type="submit">Create Sell</button>
            </form>

            <div>
                <h4>Selected Products:</h4>
                <ul>
                {sell.products.map((product, index) => (
            <li key={index}>
                {product.name}
                <button onClick={() => handleProductRemove(product.id)}>Remove</button>
            </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Create_sell;
