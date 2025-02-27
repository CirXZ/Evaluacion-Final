import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRouter } from "../heroes/routes/HeroesRouter"


export const AppRouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/*" element={<HeroesRouter/>}/>
      </Routes>
    </>
  )
}
