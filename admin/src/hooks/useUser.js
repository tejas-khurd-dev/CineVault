import { useContext } from "react";
import { AuthUserContext } from "../services/auth.user.context.jsx";
import { updateUserInfo } from "../services/user.api.js"; 

export const useUser = ()=>{
    const context = useContext(AuthUserContext);

    if (!context) {
        throw new Error("useAuth must be used within AuthUserProvider");
    }

    const { user, setUser, loading, setLoading, error, setError } = context;

    const handleUpdateUserInfo = async ({ username, pfp }) => {
        setLoading(true);
        setError("");
        try {
            const data = await updateUserInfo({ username, pfp });
            setUser(data.user);
            return data.user;
        } catch (error) {
            const message = error?.response?.data?.msg || error?.message || "Something went wrong";
            setError(message);
            console.error(message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {user, setUser, loading, setLoading, error, setError, handleUpdateUserInfo}
    
}