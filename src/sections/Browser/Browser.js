import React from 'react';
import {BrowserRouter,
        Link,
        Switch,
        Route} from 'react-router-dom';
import './Browser.scss';
import ProductsAndActions from '../Products+Actions/ProductsAndActions'
import BrandsSection from '../Brands/BrandsSection';
import Params from '../Params/Params';

const Browser = () => {
    const Sections=[
        {
            section: ProductsAndActions,
            name: "Our products",
            route: "/ourProducts"
        },
        {
            section: BrandsSection,
            name: "Brands",
            route: "/brands"
        },
        {   section: Params,
            name:"Log In",
            route: "/log-in"
        }
    ];
    
    return (
        <div className="browser">
            <BrowserRouter>
                <div className="browser-menu">
                    {            
                    Sections.map(section=>{
                        return (<Link className="menu-item" to= {section.route}>{section.name}</Link>)
                    })}    
                </div>
                <Switch>
                    {
                        Sections.map(section=>{
                            return (<Route path= {section.route} 
                                    component={section.section}></Route>)
                        })
                    }
                </Switch>       
            </BrowserRouter>
        </div>
    )
}

export default Browser