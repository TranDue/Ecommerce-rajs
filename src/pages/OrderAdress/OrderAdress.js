import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Formik, Field } from "formik";
import { shortenTitle } from "../../pipes/shortenTitle"
import { formatMoney } from "../../pipes/priceFormatter"
import swal from 'sweetalert';
import {
    addBillToOrderManagement
} from '../../actions'
import * as Yup from "yup";
import './OrderAdress.scss'


const OrderAdress = (props) => {

    // const OrderBill = () => {
    //     props.dispatch(addBillToOrderManagement(props.bill))
    //     swal("Đã thêm vào danh sách yêu thích!", "You clicked the button!", "success")
    // }
    return (
        <div>
            <div className="order">
                <h2 className="text-center m-3">Đơn đặt hàng</h2>
                <Formik
                    initialValues={{ name: "", sdt: "", address: "" }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required("Vui lòng nhập họ tên"),
                        sdt: Yup.string()
                            .required("Vui lòng nhập SĐT"),
                        address: Yup.string()
                            .required("Vui lòng nhập địa chỉ.")
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            // alert order success
                            swal("Đặt hàng thành công!", "You clicked the button!", "success")

                            console.log("History order", values);
                            setSubmitting(false);
                        }, 500);
                    }}
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
        </div>
    )
}
export default connect()(OrderAdress);