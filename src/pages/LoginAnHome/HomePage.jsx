import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';
import './HomePage.scss';
class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }

    // handleDeleteUser(id) {
    //     return (e) => this.props.deleteUser(id);
    // }
    render() {
        const { user, users } = this.props;
        return (
            <div className="homepage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 ">
                            <h1>Xin chào {user.firstName} {user.lastName}!</h1>
                            {/* <h3>All registered users:</h3> */}
                            {/* {users.loading && <em>Loading users...</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>} */}

                            {/* {users.items &&
                            <ul>
                                {users.items.map((user, index) =>
                                    <li key={user.id}>
                                        {user.firstName + ' ' + user.lastName}
                                        {
                                            user.deleting ? <em> - Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                        }
                                    </li>
                                )}
                            </ul>
                        } */}

                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="700"
                            data-aos-duration="700"
                            className="col-md-0 col-sm-0">
                            <span>
                                <Link className="btn btn-info" to="/userdetail"><i className="fa fa-cog"></i>Chi tiết tài khoản</Link>
                            </span>
                            <span>
                                <Link className="btn btn-success" to="/order-management">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg> Quản lý đơn hàng
                                </Link>
                            </span>
                            <span>
                                <Link className="btn btn-primary" to="/shop"><i className="fa fa-plus"></i>Đặt sách</Link>
                            </span>
                            <span>
                                <Link className="btn btn-danger" to="/wishlist"><i className="fa fa-heart"></i>Danh sách yêu thích</Link>
                            </span>
                            <span>
                                <Link className="btn btn-outline-secondary" to="/login">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                                    </svg>
                                    Logout
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    getUser: userActions.getID
}

export default HomePage = connect(mapState, actionCreators)(HomePage);
