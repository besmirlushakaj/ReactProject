import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import WebDelopment from './WebDelopmentComponent';
import RecruitmentSolutions from './RecruitmentSolutionsCompnent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARDS } from "../shared/cards";
import { MEDIA } from "../shared/media";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS,
            media: MEDIA
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

        const WedDevelopmentPage = () => {
            return (
                <WebDelopment
                    media={this.state.media.filter(itemMedia => itemMedia.webDevelopmentComponent)}
                />
            );
        };

        const RecruitmentSolutionsPage = () => {
            return (
                <RecruitmentSolutions
                    media={this.state.media.filter(itemMedia => itemMedia.recruitmentSolutionsComponent)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/webdevelopment' component={WedDevelopmentPage} />
                    <Route path='/recruitmentsolutions' component={RecruitmentSolutionsPage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;