import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './pages/home';
import Header from './component/header';
const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route to="/" component={Home} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;