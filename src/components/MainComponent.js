import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import WebDelopment from './WebDelopmentComponent';
import WebDesign from './WebDesignComponent';
import RecruitmentSolutions from './RecruitmentSolutionsCompnent';
import Contact from './ContactComponent';
import Shop from './ShopComponent';
import Marketing from './MarketingComponent';
import AboutUs from './AboutUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        cards: state.cards,
        carousel: state.carousel,
        imageheader: state.imageheader,
        media: state.media
    };
};



class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                    cards={this.props.cards.filter(card => card.homeComponent)}
                    carousel={this.props.carousel.filter(item => item.homeComponent)}
                    
                />
            );
        };

        const WedDevelopmentPage = () => {
            return (
                <WebDelopment
                    media={this.props.media.filter(itemMedia => itemMedia.webDevelopmentComponent)}
                    carousel={this.props.carousel.filter(item => item.webDevelopment)}
                />
            );
        };

        const WebDesignPage = () => {
            return (
                <WebDesign
                    media={this.props.media.filter(itemMedia => itemMedia.webDesignComponent)}
                />
            );
        };

        const ShopPage = () => {
            return (
                <Shop
                    media={this.props.media.filter(itemMedia => itemMedia.shopComponent)}
                />
            );
        };

        const MarketingPage = () => {
            return (
                <Marketing
                    media={this.props.media.filter(itemMedia => itemMedia.marketingComponent)}
                />
            );
        };

        const AboutUsPage = () => {
            return (
                <AboutUs
                    media={this.props.media.filter(itemMedia => itemMedia.aboutusComponent)}
                />
            );
        };



        const RecruitmentSolutionsPage = () => {
            return (
                <RecruitmentSolutions
                    media={this.props.media.filter(itemMedia => itemMedia.recruitmentSolutionsComponent)}
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
                    <Route path='/marketing' component={MarketingPage} />
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

export default withRouter(connect(mapStateToProps)(Main));