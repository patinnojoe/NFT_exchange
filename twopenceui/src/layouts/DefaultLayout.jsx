import { Navigate } from "react-router-dom";
import { UseStateContext } from "../context/AuthContextProvider";
import Dashboard from "../pages/Dashboard";

const DefaultLayout = () => {
    document.title = "Twopence - Home Page";
    // redirect to gust layout if token aint set
    const { setCurrentUser, setUserToken } = UseStateContext();
    const { currentUser, userToken } = UseStateContext();

    if (!userToken) {
        return <Navigate to="/guest" />;
    }

    return (
        <Dashboard>
            <p>main content</p>
        </Dashboard>
    );
};

export default DefaultLayout;
