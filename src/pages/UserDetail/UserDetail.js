import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';
import './UserDetail.scss';
import Modal from "react-modal"
import EditUser from "./EditUser/EditUser"
class UserDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
            news: []
        }
    }
    componentDidMount() {
        this.props.getUser("user");
    }

    // handleDeleteUser(id) {
    //     return (e) => this.props.deleteUser(id);
    // }
    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }
    render() {
        const { user, users } = this.props;
        return (
            <div className="homepage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 ">
                            <h2>Chi tiết tài khoản: </h2>
                            <div>
                                <button
                                    onClick={() => this.openModal()}
                                    type="button"
                                    className="btn btn-outline-info">
                                    Edit user
                                </button>
                                <Modal
                                    ariaHideApp={false}
                                    isOpen={this.state.modalIsOpen}
                                    onRequestClose={this.closeModal}
                                >
                                    <EditUser className="modalConfig" />
                                </Modal>

                            </div>
                            <br />
                            <ul component={'span'} variant={'body2'}>
                                <li
                                    data-aos="fade-up-right"
                                    component={'span'}
                                    variant={'body2'}>User name: <b>{user.firstName} {user.lastName}</b></li>
                                <li data-aos="fade-up-right"
                                    component={'span'}
                                    variant={'body2'}>Email: <b>{user.username}</b></li>
                            </ul>
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
                        <div className="col-md-0 col-sm-0">
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
                                <Link className="btn btn-outline-secondary" to="/login">Logout</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
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

export default UserDetail = connect(mapState, actionCreators)(UserDetail);
