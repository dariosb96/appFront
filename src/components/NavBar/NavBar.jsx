import { Link } from "react-router-dom"

Link

export function  NavBar() {
    return(
        <div>
            
            <button>
            MENU
            </button>
            <Link to="/home"> 
            <button>
        INICIO
            </button>
                </Link> 
            <input>
            </input>
            <button>
              BUSCAR
            </button>
        </div>
    )
}