import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../components/HeadBox/Header";
import AboutPage from "../components/Pages/About/components/AboutPage/AboutPage";
import HomePage from "../components/Pages/Home/HomePage";



const MyRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/Home" index element={<HomePage />} />
                <Route path="/About" index element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter