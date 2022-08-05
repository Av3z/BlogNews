import { HomePage, LoginPage, RegisterPage } from "pages";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}