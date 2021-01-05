import React from 'react';
import { Media } from 'reactstrap';

export function RenderMediaWebDevelopmentComponent({ item }) {
    if (item) {
        return (
            <React.Fragment>
                <div class="row row-content align-items-center mx-3">
                    {
                        item.leftContent === "Yes" ?
                            (
                                <React.Fragment>
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div className="card shadow">
                                            <Media object src={item.image} alt={item.name} className="img-fluid imgTaxRefund" />
                                        </div>
                                    </div>
                                    <Media body className="ml-5">
                                        <Media heading tag="h1" >{item.name}</Media>
                                        <Media heading tag="h3" >{item.subtitle}</Media>
                                        {item.description}
                                    </Media>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Media body className="ml-5">
                                        <Media heading tag="h1" >{item.name}</Media>
                                        <Media heading tag="h3" >{item.subtitle}</Media>
                                        {item.description}
                                    </Media>
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div className="card shadow">
                                            <Media object src={item.image} alt={item.name} className="img-fluid imgTaxRefund" />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )

                    }

                </div>
            </React.Fragment>
        );
    }
    return <div />
}

export function RenderMediaRecruitmentSolutionsComponent({ item }) {
    if (item) {
        return (
            <React.Fragment>
                <div class="row row-content align-items-center mx-3">
                    {
                        item.leftContent === "Yes" ?
                            (
                                <React.Fragment>
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div className="card shadow">
                                            <Media object src={item.image} alt={item.name} className="img-fluid imgTaxRefund" />
                                        </div>
                                    </div>
                                    <Media body className="ml-5">
                                        <Media heading tag="h1" >{item.name}</Media>
                                        <Media heading tag="h3" >{item.subtitle}</Media>
                                        {item.description}
                                    </Media>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Media body className="ml-5">
                                        <Media heading tag="h1" >{item.name}</Media>
                                        <Media heading tag="h3" >{item.subtitle}</Media>
                                        {item.description}
                                    </Media>
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <div className="card shadow">
                                            <Media object src={item.image} alt={item.name} className="img-fluid imgTaxRefund" />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )

                    }

                </div>
            </React.Fragment>
        );
    }
    return <div />
}