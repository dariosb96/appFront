import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../Redux/actions/Products/get_Products";


const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.Products || []);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Home;

