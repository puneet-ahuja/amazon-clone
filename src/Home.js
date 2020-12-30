import React from 'react';
import './Home.css'
import Product from './Product';

function Home(){

    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/3000x1200_Hero-Tall_p._CB412486743_.jpg"
                alt=""
            />
            <div className="home__row">
               <Product
                    id="1"
                    title="Ikigai: The Japanese secret to a long and happy life"
                    rating={4}
                    price="500"
                    image="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY436_FMwebp_QL65_.jpg"
                ></Product>
                <Product
                    id="2"
                    title="Blaupunkt BH21 Bluetooth Over-The -Ear High Bass HD Sound Wireless Headphone with Turbo Bass Equaliser Mode, Super Soft Protein Over-The Ear Cushions, 24 Hours Battery Life"
                    rating={4}
                    price="2,699"
                    image="https://m.media-amazon.com/images/I/31EU1g65YbL.jpg"
                ></Product>

            </div>

            <div className="home__row">
               <Product
                    id="3"
                    title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
                    rating={4}
                    price="399"
                    image="https://m.media-amazon.com/images/I/31IdiM9ZM8L.jpg"
                ></Product>
                <Product
                    id="4"
                    title="Redmi 9 Power (Blazing Blue, 4GB RAM, 64GB Storage)"
                    rating={4}
                    price="10,999"
                    image="https://m.media-amazon.com/images/I/41+aHRW9EqL.jpg"
                ></Product>
                <Product
                    id="5"
                    title="boAt Rockerz 255 Sports in-Ear Bluetooth Neckband Earphone with Mic (Active Black)"
                    rating={4}
                    price="1,199"
                    image="https://m.media-amazon.com/images/I/41j7VEAjdRL.jpg"
                ></Product>

            </div>
            
        </div>
    )

}

export default Home;