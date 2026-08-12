import { useContext } from "react";
import { AuthUserContext } from "../services/auth.user.context.jsx";
import { updateUserInfo, addFavourite, removeFavourite, getFavourites } from "../services/user.api.js"; 

export const useUser = ()=>{
    const context = useContext(AuthUserContext);

    if (!context) {
        throw new Error("useUser must be used within AuthUserProvider");
    }

    const { user, setUser, loading, setLoading, error, setError, favourites, setFavourites } = context;

    const handleUpdateUserInfo = async ({ username, pfp }) => {
        setLoading(true);
        setError("");
        try {
            const data = await updateUserInfo({ username, pfp });
            setUser(data.user);
            return data.user;
        } catch (error) {
            const message = error?.response?.data?.message || error?.message || "Something went wrong";
            setError(message);
            console.error(message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleGetFavourites = async () => {
        setLoading(true);
        setError("");
        try {
            const data = await getFavourites();
            setFavourites(data.favourites);
            return data.favourites;
        } catch (error) {
            const message = error?.response?.data?.message || error?.message || "Something went wrong";
            setError(message);
            console.error(message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleAddFavourite = async (movieId) => {
        setError("");
        try {
            await addFavourite(movieId);
            await handleGetFavourites();
            return true;
        } catch (error) {
            const message = error?.response?.data?.message || error?.message || "Something went wrong";
            setError(message);
            console.error(message);
            return false;
        }
    };

    const handleRemoveFavourite = async (movieId) => {
        setError("");
        try {
            await removeFavourite(movieId);
            setFavourites((prev) => prev.filter((fav) => fav.movie?._id !== movieId));
            return true;
        } catch (error) {
            const message = error?.response?.data?.message || error?.message || "Something went wrong";
            setError(message);
            console.error(message);
            return false;
        }
    };

    const isFavourite = (movieId) => favourites.some((fav) => fav.movie?._id === movieId);

    const handleToggleFavourite = async (movieId) => {
        if (isFavourite(movieId)) {
            return handleRemoveFavourite(movieId);
        }
        return handleAddFavourite(movieId);
    };

    return {
        user, setUser, loading, setLoading, error, setError,
        favourites, isFavourite,
        handleUpdateUserInfo,
        handleGetFavourites,
        handleAddFavourite,
        handleRemoveFavourite,
        handleToggleFavourite,
    }
}