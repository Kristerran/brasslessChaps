import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Admin from './Components/Pages/Admin';
import Blog from './Components/Pages/Blog';
import Videos from './Components/Pages/Videos';
import Header from './Components/Header';
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
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admiralchap" element={<Admin />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/videos" element={<Videos />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
