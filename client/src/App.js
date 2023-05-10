import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './Pages/Home';
import Match from './Pages/Match';
import Message from './Pages/Message';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Signup from "./Pages/Signup";
import Navbar from "./Pages/components/Navbar/Navbar"
import Footer from "./Pages/components/Footer/Footer"
import Matching from './Pages/Matching';

import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar />
        <div>
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
              path="/login" 
              element={<Login />}
            />
             <Route 
              path="/Signup" 
              element={<Signup />}
            />
            <Route 
              path="/matching" 
              element={<Matching />}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
