import React from 'react'
import  Navbar  from './components/Navbar/Navbar'
import {BrowserRouter , Route, Switch } from "react-router-dom"
import ListMovies from "./pages/ListMovies"
import MovieDetails from "./pages/MovieDetails"
// import Favourities from "./pages/Favourites"
import Notfound from './pages/Notfound';
function App() {
return(
<>
   <BrowserRouter>
     <Navbar/>
        <Switch>
        <Route path={"/products/:id?"} exact component={ListMovies}/>
        <Route path={"/"} exact component={ListMovies}/>
        <Route path={"/details/:id"} exact component={MovieDetails}/>
        <Route path="*"  component={Notfound}/>
        </Switch>

     </BrowserRouter>
     </>
)
}
 
    

export default App;