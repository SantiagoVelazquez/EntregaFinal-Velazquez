import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Home, ItemDetailContainer, Category } from "../pages";



import { NavBarComponent } from "../components";

export const MainRouter = () => {

    return(
        <BrowserRouter>
        <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    )

};