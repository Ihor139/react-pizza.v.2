import React from 'react';
import './App.css';

import {Routes, Route} from 'react-router-dom';

import {Home} from './pages/Home';
import {Cart} from './pages/Cart';
import {Error} from './pages/Error';
import {AppLayout} from './layouts/AppLayout';
import {PizzaDetail} from './pages/PizzaDetail';

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout/>}>
				<Route path="/" element={<Home/>}/>
				<Route path="/pizza/:id" element={<PizzaDetail/>}/>
				<Route path="/cart" element={<Cart/>}/>
				<Route path="*" element={<Error/>}/>
			</Route>
		</Routes>
	);
}

export default App;
