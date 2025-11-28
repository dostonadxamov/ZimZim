import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Mainloyauts() {
    return <>
        <header>
            <Navbar/>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>

        </footer>
    </>
}
