import {  useDispatch } from "react-redux";
import { logout } from "../../Redux/actions/Users/Login";

const LogOutButton = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={ () => dispatch(logout())}>
            LOG OUT
        </button>
    );
}
export default LogOutButton;