import React, { useState } from "react"
import { connect } from "react-redux"
import { shortenTitle } from "../../pipes/shortenTitle"
import { formatMoney } from "../../pipes/priceFormatter"
import "./CartItem.scss"
import {
  addProductToCart,
  removeProductToCart,
  decrementCartQuantity,
  incrementCartQuantity
} from "../../actions"

const CartItem = ({
  title,
  price,
  description,
  quantity,
  id,
  img,
  dispatch,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity)

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
        // dispatch action remove product
        dispatch(removeProductToCart(id))

        // alert remove product success
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
      dispatch(addProductToCart(id))
    }
  }

  const incrementOrDecrement = (e, type) => {
    const value = itemQuantity
    console.log(type, value)

    if (type === "inc" && value < 20) {
      setItemQuantity(itemQuantity + 1)
      dispatch(incrementCartQuantity(id))
    }

    if (type === "desc" && value > 1) {
      setItemQuantity(itemQuantity - 1)
      dispatch(decrementCartQuantity(id))
    }
  }

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
                {formatMoney(price)}<span className="text-muted">x</span>
              </strong>
            </h6>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <div className="quantity">
              <input
                onClick={(e) => {
                  incrementOrDecrement(e, "inc")
                }}
                type="button"
                value="+"
                className="plus"
              />
              <input
                onChange={handleQuantityChange}
                type="number"
                step="1"
                max="10"
                min="1"
                value={itemQuantity}
                title="Qty"
                className="qty"
                size="4"
              />
              <input
                onClick={(e) => {
                  incrementOrDecrement(e, "desc")
                }}
                type="button"
                value="-"
                className="minus"
              />
            </div>
          </div>
          <div className="col-2 col-sm-2 col-md-2 text-right">
            <button
              onClick={removeItem}
              type="button"
              className="btn btn-outline-danger btn-xs"
            >
              <i className="fa fa-trash" />
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

export default connect()(CartItem)
