import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import '../BrandFilter/BrandFilter.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { userActions } from '../../actions/user.actions'
import { formatMoney } from '../../pipes/priceFormatter'
class Header extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }
    getlegth() {
        return this.props.wistlistLength;
    }
    getlegth() {
        return this.props.cartLength;
    }
    getTotal() {
        return this.props.totalPrice;
    }
    getUserLocalStorage() {
        return JSON.parse(localStorage.getItem('user'));
    }
    submitSearch() {
        Swal.fire({
            title: 'Comming Soon',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    render() {
        const { user, users } = this.props;
        const cartLength = this.getlegth();
        const totalPrice = this.getTotal();
        const userLocalStorage = this.getUserLocalStorage();

        return (
            <div>
                <div className="header-top">
                    <div className="container">

                        <div className="ht-left">
                            <div className="logo-push">
                                <div className="logo">
                                    <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                                </div>
                            </div>
                            <div className="mail-service">
                                <i className=" fa fa-envelope"></i>
                                TranDue@gmail.com
                            </div>
                            <div className="phone-service">
                                <i className=" fa fa-phone"></i>
                                0123456677
                            </div>
                        </div>
                        <div data-aos="fade-left" className="ht-right">
                            {
                                userLocalStorage ? <NavLink className="nav-link login-panel" to={"/homepage"}><i className="fa fa-user" />Xin ch??o {user.firstName} {user.lastName}</NavLink> :
                                    <NavLink className="nav-link login-panel" to={"/homepage"}><i className="fa fa-user" />T??i kho???n</NavLink>
                            }

                            <div className="top-social">
                                <a href="/"><i className="fa fa-linkedin"></i></a>
                                <a href="https://github.com/TranDue"><i className="fa fa-github"></i></a>
                                <a href="/"><i className="fa fa-dev"></i></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="container">
                    <div className="inner-header">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="logo">
                                    <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-10 col-xs-8">
                                <div onClick={this.submitSearch} className="advanced-search">
                                    <form action="#" className="input-group">
                                        <input type="text" placeholder="T??m s???n ph???m b???n mu???n?" />
                                        <button type="button"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-3 text-right col-md-3 col-sm-2 col-xs-4">
                                <ul className="nav-right">
                                    <li className="heart-icon">
                                        <NavLink className="nav-link" to={"/wishlist"}><i className="fa fa-heart"
                                            aria-hidden="true" /><span>&hearts;</span></NavLink>
                                    </li>
                                    <li className="cart-icon">
                                        <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                            aria-hidden="true" /><span>Gi??? h??ng</span> {cartLength ? `(${cartLength})` : ''}</NavLink>
                                        <div className="cart-hover" style={{ zIndex: 2 }}>
                                            <div className="card-footer">
                                                <div>
                                                    Th??nh ti???n: <span style={{
                                                        color: "red",
                                                        fontWeight: "bold"
                                                    }}>{formatMoney(totalPrice)}</span>
                                                </div>
                                            </div>
                                            {/* <div className="select-button">
                                                <NavLink className="primary-btn view-card nav-link" to="/cart">Xem gi??? h??ng</NavLink>
                                            </div> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="navbar-navigation">
                    <div className="container-fluid">
                        <Navbar expand="lg" className="nav-item">
                            <Navbar.Brand href="#home">
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto  mobile-menu">
                                    <li><NavLink to={"/"}>Trang ch???</NavLink></li>
                                    <li><NavLink to={"/shop"}>T???t c??? s???n ph???m</NavLink></li>
                                    <li><NavLink to={"/blog"}>Blog</NavLink></li>
                                    <li><NavLink to={"/contact"}>Li??n h???</NavLink></li>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>

            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const { users, authentication } = state;
    const { user } = authentication;

    return {
        // handle wistlist
        wistListItems: state.shop.wistlist,
        wistlistItemCount: state.shop.wistlist.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),

        // handle cart
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),

        // quick check price
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0),

        cartLength: state.shop.cart.length,

        // get user
        user,
        users
    }
};


const actionCreators = {
    getUsers: userActions.getAll,
    getUser: userActions.getID,
    deleteUser: userActions.delete
}

export default connect(mapStateToProps, actionCreators)(Header);
