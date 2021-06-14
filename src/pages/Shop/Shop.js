import React from 'react';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
const Shop = () => {
    return (
        <React.Fragment>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200"
                className="container"
                style={{ paddingTop: '6rem' }} >
                <div className="row">
                    <FilterBar data-aos="fade-right" />
                    <ProductList data-aos="fade-left" />
                </div>
            </div>
        </React.Fragment>
    );
};
export default Shop;
