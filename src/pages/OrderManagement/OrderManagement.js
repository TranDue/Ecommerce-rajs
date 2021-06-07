import React from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import "./OrderManagement.scss";

export default function OrderManagement(props) {
  return (
    <>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="card shopping-cart">
          <div className="card-header bg-blue text-light">
            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
            Order Management
            <div className="clearfix"></div>
          </div>

          <div className="card-body">
            {props.cartItemCount ? (
              props.cartItems.map((cart) => (
                <CartItem {...cart} img={cart.images[0]} />
              ))
            ) : (
              <div className="continue row">
                <div className="col-xs-12 col-sm-12 col-md-9 offset-md-1 col-lg-8 offset-lg-2 right-side">
                  <h1 className="text-center">Không có đơn hàng</h1>
                  <button className="btn btn-warning ">
                    <NavLink className="nav-link" to="/shop">
                      Thêm đơn hàng
                    </NavLink>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
