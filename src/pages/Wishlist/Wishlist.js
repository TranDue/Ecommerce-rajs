import React from "react";
import { connect } from "react-redux"
import OrderItem from "../../components/OrderItem/OrderItem";
import { NavLink } from "react-router-dom";
import "./Wishlist.scss";

const Wishlist = (props) => {
  return (
    <>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="card shopping-cart">
          <div className="card-header bg-pink text-light">
            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
            Danh sách yêu thích
            <div className="clearfix"></div>
          </div>

          <div className="card-body">
            {props.wistlistItemCount ? props.wistlistItems.map(wistlist => (
              <OrderItem {...wistlist} img={wistlist.images[0]} />
            )) : <div className="continue row">
              <div className="col-xs-12 col-sm-12 col-md-9 offset-md-1 col-lg-8 offset-lg-2 right-side">
                <h1 className="text-center">Chưa có sản phẩm yêu thích</h1>
                <button className="btn btn-warning "><NavLink className="nav-link" to="/shop">Tìm kiếm sản phẩm yêu thích</NavLink></button>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  console.log(state, 'state has changed');
  return {
    wistlistItems: state.shop.wistlist,
    wistlistItemCount: state.shop.wistlist.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    totalPrice: state.shop.wistlist.reduce((count, curItem) => {
      return count + (curItem.price * curItem.quantity);
    }, 0)
  }
}
export default connect(mapStateToProps, null)(Wishlist);
