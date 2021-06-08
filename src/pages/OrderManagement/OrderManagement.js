import React from "react";
import { NavLink } from "react-router-dom";
import BillItem from "../../components/BillItem/BillItem";
import "./OrderManagement.scss";

export default function OrderManagement(props) {
  return (
    <>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="card shopping-cart">
          <div className="card-header bg-blue text-light">
            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
            Quản lý đơn hàng
            <div className="clearfix"></div>
          </div>

          <div className="card-body">
            {props.cartItemCount ? (
              props.cartItems.map((cart) => (
                <BillItem {...cart} img={cart.images[0]} />
              ))
            ) : (
              <div className="continue row">
                <div className="col-xs-12 col-sm-12 col-md-9 offset-md-1 col-lg-8 offset-lg-2 right-side">
                  <h1 className="text-center">Bạn chưa có đơn hàng ... </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
