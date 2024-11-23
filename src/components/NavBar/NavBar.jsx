import { Link } from "react-router-dom"
import LogOutButton from "../LogOutBtn/LogOut"



export function  NavBar() {
    return(
        <div>
            <Link to="/create">
               <button>
           CREAR PRODUCTO
            </button>   
            </Link>
          
            <Link to="/home"> 
            <button>
        INICIO
            </button>
                </Link> 
            <input>
            </input>
            <Link to="/create_sell">
                <button>
              CREAR VENTA
            </button>  
            </Link>
            <LogOutButton></LogOutButton>
          
        </div>
    )
}