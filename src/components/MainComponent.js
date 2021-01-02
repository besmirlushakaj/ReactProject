
import React, { Component } from 'react';
import Header from "./HeaderComponent";

import Footer from "./FooterComponent";
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARDS } from "../shared/cards";




class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            cards: CARDS
        };
    }





    render() {

        const HomePage = () => {
            return (
                <Home

                card={this.state.cards.filter(card => card.featured)[0]}
                   
                />
            );
        };

        
                
            
        

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;