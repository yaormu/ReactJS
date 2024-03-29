import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;

/*
Continuar con video 17/30
https://www.youtube.com/watch?v=uFGpHNZ-Eh8&list=PL4WxketMZHydivPJVvloWwAli3bxZocM1&index=17 
*/