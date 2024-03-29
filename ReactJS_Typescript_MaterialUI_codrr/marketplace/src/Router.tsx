import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { LoginPage } from "./pages/login"
import { RouterLayout } from "./common/RouterLayout"
import { CharacterPage } from "./pages/character"

export const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/" element={<CharacterPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}