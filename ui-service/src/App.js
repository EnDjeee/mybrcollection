import React from 'react';
import Layout from './components/Layout/Layout';
import MyToolbar from './components/Toolbar/MyToolbar';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { amber } from '@material-ui/core/colors';
import MovieViewer from './containers/MovieViewer/MovieViewer';


const theme = createMuiTheme({
  palette: {
      primary: blue,
      secondary: {
        main: amber[400],
      }
  },
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Layout>
      <MyToolbar/>
      <MovieViewer/>
    </Layout>
    </MuiThemeProvider>
  );
}

export default App;
