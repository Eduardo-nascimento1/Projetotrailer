import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './pages/home';

import Header from './component/header';
import Favoritos  from './pages/Favoritos';

import Filme from './pages/Filme';
const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/favoritos" component ={Favoritos}/>
            <Route exact path="/filme/:id" component={Filme}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;