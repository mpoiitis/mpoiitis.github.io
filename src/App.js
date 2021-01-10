import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'Home.js';
import Experience from 'Experience.js';
import Research from 'Research.js';
import ResearchWrapper from 'ResearchWrapper.js';
import Contact from 'Contact.js';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import 'App.css';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3c1874'
    },
    secondary: {
      main: '#932432'
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
});

theme = responsiveFontSizes(theme)


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Switch>
            <Route path="/research/:work" component={ResearchWrapper} />
            <Route path="/research" component={Research} />
          </Switch>
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
