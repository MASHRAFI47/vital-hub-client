import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if(loading) {
        return <span className="loading loading-spinner loading-lg text-primary"></span>
    }

    if (user) {
        return children
    }
    
    return <Navigate to={'/login'} state={location.pathname} />
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute