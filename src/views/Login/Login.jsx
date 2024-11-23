import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Redux/actions/Users/Login";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setusername]= useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

const error = useSelector(state => state.error);
const loading = useSelector(state => state.loading);
const token = useSelector(state => state.token);

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
};

    useEffect(() => {
     
        console.log('Token:', token); // Verifica si el token está presente
        if (token) {
          navigate('/home');
        }
      }, [token, navigate]);

    return  (
        <div>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="username" 
            placeholder="username" 
            value={username} 
            onChange={(e) => setusername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
          <div>
            
            <Link to="/create_user">
            <button> Registrarse</button>
            </Link>
          </div>
      </div>
    
    )
}

export default Login;