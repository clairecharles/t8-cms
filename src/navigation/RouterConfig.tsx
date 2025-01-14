import { Route, Routes } from 'react-router-dom';

import routerPaths from './index';
import { NotFound } from './NotFound';
import Home from '../screens/Home';
import Login from '../screens/Login';
const RouterConfig = () => {
	return (
		<Routes>
			<Route path={routerPaths.Home} element={<Home />} />
			<Route path={routerPaths.Login} element={<Login />} />
            <Route path={routerPaths.NoRouteFound} element={<NotFound />} />
		</Routes>
	);
};

export default RouterConfig;
