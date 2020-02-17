import  React from 'react';
import './BrandsSection.scss'
import Title from '../../components/Title';
import Brand from './components/Brand';
import cadbury from './assets/cadbury.jpg';
import ferrerorocher from './assets/ferrerorocher.jpg';
import mym from './assets/mym.jpg';
import nestle from './assets/nestle.jpg';
import snickers from './assets/snickers.png';
import toblerone from './assets/toblerone.jpg';

const BrandSection = () =>{
    let brandImages = [
        cadbury, 
        ferrerorocher,
        mym,
        nestle,
        snickers,
        toblerone ]
    return(
        <section className="brands-section">
           <Title titletxt="Brands"></Title>
            <div className="content">
                {
                    brandImages.map(image =>{
                        return <Brand imgSrc={image}></Brand>
                    })
                }
            </div>
        </section>      
    )
}

export default BrandSection;