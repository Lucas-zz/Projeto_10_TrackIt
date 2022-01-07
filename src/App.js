import { GlobalStyle } from "./style";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import UserContext from "./contexts/UserContext";

export default function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken, isLoading, setLoading }}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/cadastro" element={<SignUpPage />}></Route>
                    <Route path="/habitos" element={<HabitsPage />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}