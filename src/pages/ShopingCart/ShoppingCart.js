import React from 'react'
import { connect } from 'react-redux'
import { formatMoney } from "../../pipes/priceFormatter"
import CartItem from "../../components/CartItem/CartItem"
import { NavLink } from 'react-router-dom'

// import axios from 'axios'
import * as axios from 'axios'

import './ShoppingCart.scss'

const ShoppingCart = (props) => {
    // payment with momo
    const paymentMomo = () => {
        // endpoint payment momo
        const endpoint = "https://test-payment.momo.vn/gw_payment/transactionProcessor"
        const hostname = "https://test-payment.momo.vn"

        // api endpoint
        const path = "gw_payment/transactionProcessor"

        // create  request example
        const partnerCode = "MOMOQIKG20201017"
        const accessKey = "s288OBQJn5Eogcw2"
        const serectkey = "AZT7Pr5WVmYGKfWEBOkzEfEqRNhvwT7u"
        const orderInfo = "Thánh toán tiền sách trên Website bằng ví MoMo"
        const returnUrl = "http://localhost:3000"
        const notifyurl = "https://momo.vn/return"
        const amount = (props.totalPrice)
        const orderId = (Math.random().toString(36) + 'Momo').slice(2, 234234)
        const requestId = (Math.random().toString(36) + 'Momo').slice(2, 234234)
        const requestType = "captureMoMoWallet"
        const extraData = "merchantName=Tran Due"

        // create signature send to momo
        let newSinature =
            "partnerCode=" + partnerCode +
            "&accessKey=" + accessKey +
            "&requestId=" + requestId +
            "&amount=" + amount +
            "&orderId=" + orderId +
            "&orderInfo=" + orderInfo +
            "&returnUrl=" + returnUrl +
            "&notifyUrl=" + notifyurl +
            "&extraData=" + extraData

        // console.log("Raw signature >>>>>>>>>", newSinature)

        // use hash function for signature
        let signature = CryptoJS.HmacSHA256(newSinature, serectkey).toString(CryptoJS.enc.Hex)

        // change amount before send data
        const getAmount = amount.toString()

        // create body
        let body = JSON.stringify({
            partnerCode: partnerCode,
            accessKey: accessKey,
            requestId: requestId,
            amount: getAmount,
            orderId: orderId,
            orderInfo: orderInfo,
            returnUrl: returnUrl,
            notifyUrl: notifyurl,
            extraData: extraData,
            requestType: requestType,
            signature: signature,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        // console.log("Body >>>>>>>", body)

        console.log('THis is signature =>>>>>', signature)

        const options = {
            hostname: 'test-payment.momo.vn',
            port: 443,
            path: '/gw_payment/transactionProcessor',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        // test url
        let url = options.hostname + ":" + options.port + options.path
        url = 'https://' + url
        console.log("URL >>>>>>>>>>", url)

        // post request to MoMo payment
        axios.post(endpoint, body).then((res) => {
            window.open(res.data.payUrl)
        }, () => {
            console.log("thanh toán thất bại")
        })

    }
    return (
        <>
            <div className="container" style={{ paddingTop: '2rem' }}>
                <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                        Giỏ hàng
                        <div className="clearfix"></div>
                    </div>

                    <div className="card-body">
                        {props.cartItemCount ? props.cartItems.map(cart => (
                            <CartItem {...cart} key={cart.id} img={cart.images[0]} />
                        )) :
                            <div
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                className="continue row">
                                <div className="col-xs-12 col-sm-12 col-md-9 offset-md-1 col-lg-8 offset-lg-2 right-side">
                                    <h1 className="text-center">Bạn chưa thêm sản phẩm nào</h1>
                                    <button className="btn btn-warning "><NavLink className="nav-link" to="/shop">Tiếp tục đặt sách</NavLink></button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="card-footer">
                        <div className="pull-right" style={{ margin: '10px' }}>
                            <div
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="3000"
                                className="pull-right"
                                style={{ margin: '5px' }}>
                                Thành tiền: <b>{formatMoney(props.totalPrice)}</b>
                            </div>
                        </div>
                    </div>

                    <div className="checkout">
                        <div className="row">
                            <div className="col-xs-12 col-sm-5 offset-sm-7 col-md-4 offset-md-8 right-side">
                                <button className="btn btn-primary w-100">
                                    <NavLink className="nav-link " to={"/orderadress"}>Đặt Hàng</NavLink>
                                </button>

                                {/* click to MoMo payment */}
                                <br />  <br />
                                <button onClick={paymentMomo} className="btn btn-outline-danger w-100">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-mo-mo.svg" alt="momo loading" />
                                    Momo
                                </button>
                                <br />  <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

const mapStateToProps = state => {
    console.log(state, 'state has changed')
    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity)
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart)
