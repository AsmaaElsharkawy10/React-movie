import React from 'react'
import  Navbar  from './components/Navbar/Navbar'
import {BrowserRouter , Route, Switch } from "react-router-dom"
import ListMovies from "./pages/ListMovies"
import MovieDetails from "./pages/MovieDetails"
import Favourities from "./pages/Favourites"
import Notfound from './pages/Notfound';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
function App() {
   const language = useSelector((state)=>state.language.lang)
return(
<>
<div dir={language==='ar'?'rtl':'ltr'} className={language==='ar'?'text-right':'text-left'}>
   <BrowserRouter>
     <Navbar/>
        <Switch>
        <Route path={"/movies/:id?"} exact component={ListMovies}/>
        <Route path={"/"} exact component={ListMovies}/>
        <Route path={"/register"} exact component={Register}/>
        <Route path={"/login"} exact component={Login}/>
        <Route path={"/favourities"} exact component={Favourities}/>
        <Route path={"/details/:id"} exact component={MovieDetails}/>
        <Route path="*"  component={Notfound}/>
        </Switch>

     </BrowserRouter>
     </div>
     </>
)
}
 
    

export default App;