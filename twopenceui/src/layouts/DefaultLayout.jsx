import { Navigate } from "react-router-dom";
import { UseStateContext } from "../context/AuthContextProvider";

const DefaultLayout = () => {
    // redirect to gust layout if token aint set
    const { setCurrentUser, setUserToken } = UseStateContext();

    const { currentUser, userToken } = UseStateContext();
    if (!userToken) {
        return <Navigate to="/guest" />;
    }

    return <p>default layout</p>;
};

export default DefaultLayout;
