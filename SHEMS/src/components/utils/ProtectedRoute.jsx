import { Navigate } from "react-router-dom"
import { useUserStore } from "../../stores/userStore"

export const ProtectedRoute = ({ children }) => {
    const { user } = useUserStore()
    if (user) {
        return children
    } else {
        return (
            <Navigate to="/login" />
        )
    }
}   