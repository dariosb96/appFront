import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Redux/actions/Users/create_user";

const Create_user = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password: "",

    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
         setUser({
            ...user,
            [e.target.name]: e.target.value,
         });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(user));
        alert(`Usuario creado con exito`);
    setUser({
        name: '',
        username: '',
        email: '',
        password: ''
    })
    }

return (
<div>
<form onSubmit={handleSubmit}>
    <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        className="input-field"
    />

    <input
        type="text"
        name= "username"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
        className="input-field"
    />
    <input
        type="text"
        name="email"
        placeholder="email"
        value={user.email}
        onChange={handleChange}
        className="input-field"
    />
    <input
        type="text"
        name="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
        className="input-field"
    />

    <button type="submit" className="submit-button">Create</button>

</form>
</div>
    )
}

export default Create_user;