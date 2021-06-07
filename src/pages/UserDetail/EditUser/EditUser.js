import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./EditUser.scss"
export default class EditUser extends Component {
    userData

    constructor(props) {
        super(props);
        this.onChangefirstName = this.onChangefirstName.bind(this)
        this.onChangelastName = this.onChangelastName.bind(this)
        this.state = {
            firstName: "",
            lastName: "",
        }
    }

    //Form events
    onChangefirstName(e) {
        this.setState({ firstName: e.target.value })
    }
    onChangelastName(e) {
        this.setState({ lastName: e.target.value })
    }
    onChangeusername(e) {
        this.setState({ username: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            firstName: "",
            lastName: "",
        })
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem("user"))
        if (localStorage.getItem("user")) {
            this.setState({
                firstName: this.userData.firstName,
                lastName: this.userData.lastName,
            })
        } else {
            this.setState({
                firstName: "",
                lastName: "",
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
        if (user.firstName && user.lastName && user.username && user.password) {
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
                    }} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar" />
                    <div className="form-group">
                        <div>
                            <label>First Name</label>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.firstName}
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
                            value={this.state.lastName}
                            onChange={this.onChangelastName}
                        />
                    </div>

                    <button type="submit" class="btn btn-outline-success">
                        Submit 🤔
                    </button>
                </form>
            </div>
        );
    }
}

EditUser.propTypes = {

};