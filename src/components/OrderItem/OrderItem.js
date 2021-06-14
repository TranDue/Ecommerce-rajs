import React from 'react';
import { connect } from "react-redux";
import { shortenTitle } from "../../pipes/shortenTitle";
import { formatMoney } from "../../pipes/priceFormatter";
import "./OrderItem.scss"
import {
    addProductToWistList,
    removeProductToWistList,
} from "../../actions"
import Swal from 'sweetalert2'

const OrderItem = ({
    title,
    price,
    description,
    id,
    img,
    dispatch
}) => {
    console.log("wistlist", id)
    const removeItem = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeProductToWistList(id))
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    const handleQuantityChange = (e) => {
        const value = e.target.value
        console.log(value)

        if (value > 0 && value <= 20) {
            setItemQuantity(value)
            dispatch(addProductToWistList(id))
        }
    }
    const onCart = () => {
        swal("Chúng tôi sẽ sớm quay lại", "", "");
        // props.dispatch(addProductToCart(props.product));
    };
    return (
        <div>
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="row align-items-center mb-3">
                <div className="col-12 col-sm-12 col-md-2 text-center">
                    <img
                        className="img-responsive"
                        src={img}
                        style={{ height: "60%", width: "60%" }}
                        alt={description}
                    />
                </div>
                <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                    <h4 className="product-name">
                        <strong>{shortenTitle(title)}</strong>
                    </h4>
                    <h4>
                        <small className="product-description">{description}</small>
                    </h4>
                </div>
                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
                    <div
                        className="col-6 col-sm-6 col-md-6 text-md-right"
                        style={{ paddingTop: "5px" }}
                    >
                        <h6>
                            <strong>
                                {formatMoney(price)}<span className="text-muted"></span>
                            </strong>
                        </h6>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 text-right">
                        <button
                            style={{
                                width: 100
                            }}
                            onClick={onCart}
                            className="btn btn-warning  text-uppercase">
                            <i className="fa fa-shopping-cart" />
                        </button>
                        <br />
                        <br />
                        <button
                            onClick={removeItem}
                            type="button"
                            className="btn btn-outline-danger btn-xs"
                            style={{
                                width: 100
                            }}
                        >
                            Bỏ thích
                        </button>
                    </div>
                </div>
            </div>
            <hr
                style={{ borderColor: "black" }}
                data-aos="fade-up"
                data-aos-duration="3000" />
        </div>
    )
}



export default connect()(OrderItem);