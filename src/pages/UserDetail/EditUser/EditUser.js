import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./EditUser.scss"
export default class EditUser extends Component {
    userData

    constructor(props) {
        super(props);
        this.onChangefirstName = this.onChangefirstName.bind(this)
        this.onChangelastName = this.onChangelastName.bind(this)
        this.onChanguserName = this.onChanguserName.bind(this)
        this.state = {
            firstName: "",
            lastName: "",
            userName: ""
        }
    }

    //Form events
    onChangefirstName(e) {
        this.setState({ firstName: e.target.value })
    }
    onChangelastName(e) {
        this.setState({ lastName: e.target.value })
    }
    onChanguserName(e) {
        this.setState({ userName: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            firstName: "",
            lastName: "",
            username: ""
        })
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem("user"))
        if (localStorage.getItem("user")) {
            this.setState({
                firstName: this.userData.firstName,
                lastName: this.userData.lastName,
                username: this.userData.username
            })
        } else {
            this.setState({
                firstName: "",
                lastName: "",
                username: ""
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem("user", JSON.stringify(nextState))
    }
    handleInput = event => {
        const { value } = event.target
        this.setState({ value })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstname && user.lastname) {
            this.props.register(user);
        }
    }
    render() {
        return (
            <div>
                <form>
                    <h1>
                        Edit User
                    </h1>

                    <img style={{
                        verticalAlign: "middle",
                        width: 50,
                        height: 50,
                        borderRadius: 50
                    }} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                    <div className="form-group">
                        <div>
                            <label>First Name</label>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.firstname}
                            onChange={this.onChangefirstName}
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            <label>Last Name</label>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangelastName}
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            <label>Email</label>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChanguserName}
                        />
                    </div>


                    <button type="submit" className="btn btn-outline-success">
                        Submit 🤔
                    </button>
                </form>
            </div>
        );
    }
}

EditUser.propTypes = {

};