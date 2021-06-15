import React from 'react';
import { Formik } from "formik";
import { connect } from 'react-redux'

import {
    addBillToOrderManagement
} from '../../actions'
import * as Yup from "yup";
import './OrderAdress.scss'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

// const idUser = JSON.parse()

const OrderAdress = (props) => {

    // format date
    var dateFormat = require("dateformat");

    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.shop)


    // loop for get all title
    const _title = cartItem.cart
    var a = ""
    for (let tl of _title) {
        console.log("title >>>>", a += tl.title)
    }
    var _allTitle = a
    console.log("abc", _allTitle)

    const _submit = (values) => {
        dispatch(addBillToOrderManagement(values))
    }

    return (
        <div>
            <div className="order">
                <h2 className="text-center m-3">Đơn đặt hàng</h2>
                <Formik
                    initialValues={{

                        id: Math.floor(Math.random() * 10000),
                        name: "",
                        sdt: "",
                        address: "",
                        d: dateFormat(new Date(), "dddd, mmmm dS, yyyy"),
                        madh: Math.floor(Math.random(10) * 10000),
                        title: _allTitle,
                        // title:
                        //     <h1 render={cartItems => (
                        //         <h3>{cartItems.title}</h3>
                        //     )}></h1>
                        // ,

                        price: props.totalPrice.toString()
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            // alert order success
                            Swal.fire({
                                title:
                                    'Đặt hàng thành công' +
                                    '<br />' +
                                    '<a href="http://localhost:3000/order-management">Xem đơn hàng</a>',
                                icon: 'success',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                            _submit(values)
                            console.log("History order", values);
                            setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required("Vui lòng nhập họ tên"),
                        sdt: Yup.string()
                            .required("Vui lòng nhập SĐT"),
                        address: Yup.string()
                            .required("Vui lòng nhập địa chỉ."),
                    })}
                >

                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;
                        return (
                            <form onSubmit={handleSubmit} className="formi">

                                <label htmlFor="name">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Nhập tên"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.name && touched.name && "error"}
                                />
                                {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                )}

                                <label htmlFor="sdt">SĐT</label>
                                <input
                                    name="sdt"
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    value={values.sdt}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.sdt && touched.sdt && "error"}
                                />
                                {errors.sdt && touched.sdt && (
                                    <div className="input-feedback">{errors.sdt}</div>
                                )}

                                <label htmlFor="city">Tỉnh/Thành phố</label>
                                <select
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ display: 'block' }}
                                >
                                    <option value="Hồ Chí Minh" label="Hồ Chí Minh" />
                                    <option value="Bình Định" label="Bình Định" />
                                    <option value="Đà Lạt" label="Đà Lạt" />
                                </select>

                                <label htmlFor="q">Quận huyện</label>
                                <select
                                    name="q"
                                    value={values.quan}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ display: 'block' }}
                                >
                                    <option value="ĐL" label="ĐL" />
                                    <option value="TS" label="TS" />
                                    <option value="QN" label="QN" />
                                </select>

                                <label htmlFor="p">Phường/Xã</label>
                                <select
                                    name="p"
                                    value={values.huyen}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ display: 'block' }}
                                >
                                    <option value="" label="Thị Trấn Vĩnh Thạnh" />
                                    <option value="DL" label="DL" />
                                    <option value="Lâm Đồng" label="Lâm Đồng" />
                                </select>

                                <label htmlFor="address">Địa chỉ</label>
                                <textarea
                                    name="address"
                                    type="text"
                                    placeholder="Địa chỉ"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.address && touched.address && "error"}
                                />
                                {errors.address && touched.address && (
                                    <div className="input-feedback">{errors.address}</div>
                                )}

                                <button type="submit" disabled={isSubmitting}>
                                    Xác nhận
                                </button>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div >
    )
}
const mapStateToProps = state => {
    console.log(state, 'state has total price')
    return {
        cartItems: state.shop.cart,
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity)
        }, 0)
    }
}

export default connect(mapStateToProps, null)(OrderAdress);