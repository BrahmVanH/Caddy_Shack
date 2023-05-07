import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './Pages/Home';
import Match from './Pages/Match';
import Message from './Pages/Message';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Register from "./Pages/Register";

import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/match" 
              element={<Match />}
            />
            <Route 
              path="/message" 
              element={<Message />}
            />
            <Route 
              path="/profile" 
              element={<Profile />}
            />
            <Route 
              path="/signup" 
              element={<Signup />}
            />
             <Route 
              path="/register" 
              element={<Register />}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
