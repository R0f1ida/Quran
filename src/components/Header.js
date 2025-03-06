import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import Layout from "../pages/Layout";

export function Header() {
    return (
        <header className="App-header">
            <Layout />
            <h1></h1>
        </header>
    );
}