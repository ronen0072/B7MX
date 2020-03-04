import React, {Component, createRef} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
//import { Provider } from 'react-redux';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import queryString from "query-string";

//import {loadUser, loginWith} from "./store/actions/authActions";
//import store from "./store/store";
import {Header, Footer} from './components/layouts';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import './App.css';
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#59beee',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }
    //refs
    header = createRef();
    about = createRef();
    contact = createRef();

    changeSelection = index => {
        this.setState({
            selected: index
        });
    };

    componentDidUpdate(prevProps, prevState) {
        this.scrollToSection(this.state.selected);
    }

    scrollToSection = index => {
        let refs = [
            this.header,
            this.about,
            this.contact
        ];

        if (refs[index].current) {
            refs[index].current.scrollIntoView({
                behavior: "smooth",
                nearest: "block"
            });
        }
    };
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <MuiThemeProvider theme = {theme}>
                        <div ref={this.header}>
                            <Header changeSelection={this.changeSelection}/>
                            <Home changeSelection={this.changeSelection}/>
                        </div>
                        <div ref={this.about}>
                            <About changeSelection={this.changeSelection}/>
                        </div>
                        <div ref={this.contact}>
                            <Contact/>
                        </div>
                        <Route path='/my order' component={Contact} />
                        <Footer />
                    </MuiThemeProvider>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
