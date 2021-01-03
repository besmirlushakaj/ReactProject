
import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import WebDelopment from './WebDelopmentComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARDS } from "../shared/cards";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    cards={this.state.cards.filter(card => card.homeComponent)}
                />
            );
        };

        const WebDevelopmentPage = () => {
            return (
                <WebDelopment
                    cards={this.state.cards.filter(card => card.webDelopmentComponent)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/webdevelopment' component={WebDevelopmentPage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;