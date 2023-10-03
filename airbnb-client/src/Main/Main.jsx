import { Outlet } from "react-router-dom";
import Navbar from "../Shard/Navbar/Navbar";


const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
            <div className="pt-28 pb-20">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;