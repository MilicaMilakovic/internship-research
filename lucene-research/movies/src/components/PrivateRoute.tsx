import { Navigate } from "react-router-dom";

const PrivateRoute = ({childern}: any) => {
    // ovo stanje cuvati u reduxu
    const isAuthenticated = false;

    return isAuthenticated ? childern : <Navigate to='/login'/>
};


export default PrivateRoute;