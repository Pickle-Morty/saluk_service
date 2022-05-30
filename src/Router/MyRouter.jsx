import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../components/HeadBox/Header";
import HomePage from "../components/Pages/Home/HomePage";



const MyRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" index element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter