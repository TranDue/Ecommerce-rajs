import React, { Component } from "react"
import { connect } from "react-redux"
import {
    Switch,
    Route,
    Redirect,
    Router,
} from "react-router-dom"

import "./App.scss"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"

import { history } from "./_helpers/history"
import Blog from "./pages/Blog/Blog"
import Register from "./pages/Register/Register"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import ShoppingCart from "./pages/ShopingCart/ShoppingCart"
import OrderAdress from "./pages/OrderAdress/OrderAdress"
import Login from "./pages/Login/Login"
import HomePage from "./pages/LoginAnHome/HomePage"
import UserDetail from "./pages/UserDetail/UserDetail"
import { alertActions } from "./actions/alert.actions"
import { PrivateRoute } from "./components/PrivateRT/PrivateRoute"
import Contact from "./pages/Contact/Contact"
import Wishlist from "./pages/Wishlist/Wishlist"
import OrderManagement from "./pages/OrderManagement/OrderManagement"

class App extends Component {
    constructor(props) {
        super(props)

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts()
        })
    }
    render() {
        const { alert } = this.props
        return (
            <div>
                <Router history={history}>
                    <React.Fragment>
                        <Header data-aos="fade-down" />
                        <Switch>
                            <Route
                                exact
                                path={"/"}
                                render={() => {
                                    return <Redirect to={"/products"} />
                                }}
                            />
                            <Route
                                exact
                                path={"/order"}
                                render={() => {
                                    return <Redirect to={"/orderadress"} />
                                }}
                            />
                            {/* page Contact */}
                            <Route exact path={"/contact"} component={Contact} />

                            {/* page after Login */}
                            <PrivateRoute exact path="/homepage" component={props => <HomePage {...props} />} />

                            {/* page Product Home */}
                            <Route exact path={"/products"} component={Home} />

                            {/* page User Detail */}
                            <Route exact path={"/userdetail"} component={props => <UserDetail {...props} />} />

                            {/* page Order */}
                            <Route exact path={"/orderadress"} component={OrderAdress} />

                            {/* page Shop. All product*/}
                            <Route exact path={"/shop"} component={Shop} />

                            {/* page Blog */}
                            <Route exact path={"/Blog"} component={props => <Blog {...props} />} />

                            {/* page Register  */}
                            <Route exact path={"/register"} component={props => <Register {...props} />} />

                            {/* page Login */}
                            <Route exact path={"/login"} component={props => <Login {...props} />} />

                            {/* page Product Detail  */}
                            <Route exact path={"/products/:id"} component={props => <ProductDetail {...props} />} />

                            {/* page Cart */}
                            <Route exact path={"/cart"} component={props => <ShoppingCart {...props} />} />

                            {/* Page wishlist */}
                            <Route exact path={"/wishlist"} component={props => <Wishlist {...props} />} />

                            {/* Page order management */}
                            <Route exact path={"/order-management"} component={props => <OrderManagement {...props} />} />

                        </Switch>
                        <Footer />
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

function mapState(state) {
    const { alert } = state
    return { alert }
}

const actionCreators = {
    clearAlerts: alertActions.clear,
}

export default connect(mapState, actionCreators)(App)
