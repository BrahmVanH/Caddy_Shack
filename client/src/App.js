import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';
import Home from './Pages/Home';
import Match from './Pages/Match';
import Message from './Pages/Message';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Navbar from './Pages/components/Navbar/Navbar';
import Footer from './Pages/components/Footer/Footer';
import Matching from './Pages/Matching';
import { setContext } from '@apollo/client/link/context';

import './App.css';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),

	cache: new InMemoryCache(),
});

//adds auth header check previous projects

function App() {
	return (
		<ApolloProvider client={client}>
			<Navbar />
			<div>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/match' element={<Match />} />
						<Route path='/message' element={<Message />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/login' element={<Login />} />
						<Route path='/Signup' element={<Signup />} />
						<Route path='/matching' element={<Matching />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Router>
			</div>
			<Footer />
		</ApolloProvider>
	);
}

export default App;
