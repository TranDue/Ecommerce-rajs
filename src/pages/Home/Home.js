import React from 'react';
import SlideEffect from '../../components/SildeEffect/SlideEffect';
import ProductListHome from '../../containers/ProductListHome.js/ProductListHome';
const Home = () => {
    return (
        <React.Fragment>
            <div>
                <SlideEffect></SlideEffect>
            </div>
            <div className="container">
                <br />
                <br />
                <div className="row">
                    <ProductListHome
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};
export default Home;
