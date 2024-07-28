import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { HomePages } from "../../HomePages"
import { Footers } from  "../../ui/components/Footers"
import { ComicsPages } from "../pages/ComicsPages"
import { AnimePage } from "../pages/AnimePage"
import { HeroesPage } from "../pages/HeroesPage"

export const HeroesRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="home" element={<HomePages/>}/>
        <Route path="comics" element={<ComicsPages/>}/>
        <Route path="anime" element={<AnimePage/>}/>
        <Route path="hero/:id" element={<HeroesPage/>}></Route>
    </Routes>
    <Footers/>
    </>
  )
}
