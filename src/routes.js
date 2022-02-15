import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './pages/home';

import Header from './component/header';

import Filme from './pages/Filme';
const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/filme/:id" component={Filme}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;