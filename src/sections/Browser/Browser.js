import React from 'react';
import {BrowserRouter,
        Link,
        Switch,
        Route} from 'react-router-dom';
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
            name:"Params",
            route: "/params/:id"
        }
    ];
    
    return (
        <BrowserRouter>
            {            
                Sections.map(section=>{
                    if (section.name!=="Params"){
                    return (<Link to= {section.route}>{section.name}</Link>)
                    }
                })
         
            }    
                <Link to="/params/8"> 8 </Link>     
                <Link to="/params/7"> 7 </Link>
                <Link to="/params/6"> 6 </Link>
                <Link to="/params/5"> 5 </Link>
                <Link to="/params/4"> 4 </Link>
            <Switch>
                {
                    Sections.map(section=>{
                        return (<Route path= {section.route} 
                                component={section.section}></Route>)
                    })
                }
            </Switch>
        
       
        </BrowserRouter>
    )
}

export default Browser