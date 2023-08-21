import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import { ContextToken } from '../../utils/context-token';
import { useContext } from 'react';



export default function LoggedUser() {

    const { contextTokenPayload , setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
    }

    return (
        contextTokenPayload && authService.isAthenticated()
            ? (
            <div className="dsc-logged-user">
                <p>{contextTokenPayload.user_name}</p>
                <span onClick={handleLogoutClick}>Sair</span>
            </div>
            )
            : ( 
            <Link to="/login">
                Entrar
            </Link>

            )


    );
}