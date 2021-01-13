import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import WebDelopment from './WebDelopmentComponent';
import WebDesign from './WebDesignComponent';
import RecruitmentSolutions from './RecruitmentSolutionsCompnent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CARDS } from "../shared/cards";
import { MEDIA } from "../shared/media";
import { CAROUSEL } from "../shared/carousel";
import Shop from './ShopComponent';
import AboutUs from './AboutUsComponent';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: CARDS,
            media: MEDIA,
            carousel: CAROUSEL
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    cards={this.state.cards.filter(card => card.homeComponent)}
                    carousel={this.state.carousel.filter(item => item.homeComponent)}
                    
                />
            );
        };

        const WedDevelopmentPage = () => {
            return (
                <WebDelopment
                    media={this.state.media.filter(itemMedia => itemMedia.webDevelopmentComponent)}
                    carousel={this.state.carousel.filter(item => item.webDevelopment)}
                />
            );
        };

        const WebDesignPage = () => {
            return (
                <WebDesign
                    media={this.state.media.filter(itemMedia => itemMedia.webDesignComponent)}
                />
            );
        };
        const ShopPage = () => {
            return (
                <Shop
                    media={this.state.media.filter(itemMedia => itemMedia.shopComponent)}
                />
            );
        };
        const AboutUsPage = () => {
            return (
                <AboutUs
                    media={this.state.media.filter(itemMedia => itemMedia.aboutusComponent)}
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
                    <Route path='/webdesign' component={WebDesignPage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/recruitmentsolutions' component={RecruitmentSolutionsPage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route  path='/aboutus' component={AboutUsPage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;