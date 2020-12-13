import React, { Component } from "react";
import "../style.css";

class Form extends Component {
    state = {
        name: "",
        email: "",
        textArea: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        alert(`Thank you, ${this.state.name} for contacting me! I will get back to you shortly!`);
        this.setState({
            name: "",
            email: "",
            textArea: ""
        });
    };

    render() {
        return (
            <div>
                <form className="form">
                    <div className="form-group">
                    <input className="form-control"
                        value={this.state.name}
                        name="Name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                </div>
                <div className="form-group">
                    <input className="form-control"
                        value={this.state.email}
                        name="Email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email Address"
                    />
                </div>
                <div className="form-group">
                    <textarea className="form-control"
                        value={this.state.textArea}
                        name="Comments"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Comments Here"
                    />
                </div>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;