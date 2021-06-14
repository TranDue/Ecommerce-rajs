import React from 'react';
import { connect, useSelector } from "react-redux";
import { formatMoney } from "../../pipes/priceFormatter"
import { shortenTitle } from "../../pipes/shortenTitle"

const BillItem = ({
    name,
    sdt,
    address,
    madh,
    title,
    price,
    d,
    city,
    q,
    p
    // quantity
}) => {
    return (
        // list bill in order management
        <div>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="row align-items-center mb-3">
                <div className="col-12 col-sm-12 col-md-2 text-center">
                    <h5 style={{
                        marginTop: -82
                    }}>
                        <strong>Mã đơn hàng</strong>
                    </h5>
                    <h5>
                        <small><a style={{
                            color: "blue"
                        }}>{madh}</a></small>
                    </h5>
                </div>
                <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-4">
                    <h5>
                        <strong>Chi tiết đơn hàng</strong>
                    </h5>
                    <h5>
                        <small>Họ tên:<b> &nbsp;{name}</b></small>
                    </h5>
                    <h5>
                        <small>Sđt: <b> &nbsp;{sdt}</b></small>
                    </h5>
                    <h5>
                        <small>Địa chỉ giao hàng:<b> &nbsp; {address}</b></small>
                    </h5>
                    <h5>
                        <small>Thời gian đặt hàng:<b>
                            &nbsp; {d}</b>
                        </small>
                    </h5>
                    {/* <h5>
                    <small>Số lượng:<b>
                        &nbsp; {quantity}</b>
                    </small>
                </h5> */}
                </div>
                <div className="col-12 col-sm-12 col-md-2 text-center">
                    <h5 style={{
                        marginTop: -82
                    }}>
                        <strong>Tên sản phẩm</strong>
                    </h5>
                    <h5>
                        <small>
                            {shortenTitle(title)}
                        </small>
                    </h5>
                </div>
                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
                    <div
                        className="col-6 col-sm-6 col-md-6 text-md-right"
                        style={{ paddingTop: "5px" }}
                    >
                        <h5 style={{
                            marginTop: -82
                        }}>
                            <strong>Giá tiền</strong>
                        </h5>
                        <h6>
                            <strong>
                                <span style={{
                                    color: "red"
                                }}> {formatMoney(price)}</span>
                                &nbsp;
                            </strong>
                        </h6>
                    </div>
                </div>
            </div>
            <hr
                style={{ borderColor: "black" }}
                data-aos="fade-up"
                data-aos-duration="3000" />
        </div>
    );
}

export default connect()(BillItem);