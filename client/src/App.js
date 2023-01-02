import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Login from './Components/Pages/Login';
import Admin from './Components/Pages/Admin';
import Blog from './Components/Pages/Blog';
import Videos from './Components/Pages/Videos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
function Authorize({ children }) {
  const authed = localStorage.getItem('id_token') ? true : false;
  return authed === true ? children : <Navigate to="/loginChap" replace />;
}
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const theme = createTheme({
  typography: {
    fontFamily: [
      'brassika',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/admiralchap"
              element={
                <Authorize>
                  <Admin />
                </Authorize>
              }
            />
            <Route exact path="/loginchap" element={<Login />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/videos" element={<Videos />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
