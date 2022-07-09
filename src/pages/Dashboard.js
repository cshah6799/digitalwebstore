import { useState, useEffect } from "react";
import CustomerDetail from "../components/CustomerDetail";

const Dashboard = () => {

    const [auth, setAuth] = useState(false);
    const [data, setData] = useState('');

    useEffect(() => {
        const abortCont = new AbortController();
        setData(sessionStorage.getItem("Auth"));

        if (data != null) {
            setAuth(true);
            abortCont.abort();
        } else {
            setAuth(false);
            abortCont.abort();
        }
    },[]);

    return (
        <div className="Dashboard">
            {!auth && <p>You have to login first!</p>}
            {auth && <CustomerDetail data={data} />}
        </div>
    );
}

export default Dashboard;