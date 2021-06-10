import React from "react";
import { connect } from "react-redux";
import BillItem from "../../components/BillItem/BillItem";
import "./OrderManagement.scss";

OrderManagement.propTypes = {}

function OrderManagement(props) {
  return (
    <>
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="card shopping-cart">
          <div className="card-header bg-blue text-light">
            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
            Đơn hàng của tôi
          </div>
          <div className="card-body">
            {props.billItemCount ? (
              props.billItems.map((orderbill) => (
                <BillItem
                  {...orderbill} a={orderbill.madh[0]}
                />
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
const mapStateToProps = state => {
  console.log(state, 'state has changed');
  return {

    // get order bill
    billItems: state.shop.orderbill,
    billItemCount: state.shop.orderbill.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),

    // get cart item
    cartItems: state.shop.cart,
    cartItemCount: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    totalPrice: state.shop.cart.reduce((count, curItem) => {
      return count + (curItem.price * curItem.quantity);
    }, 0)
  }
}
export default connect(mapStateToProps, null)(OrderManagement)