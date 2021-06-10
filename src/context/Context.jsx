import React, { Component } from "react";

const Context = React.createContext();
export const ContextConsumer = Context.Consumer;

export class ContextProvider extends Component {
    state = {
        username: "bibirka",
    };
    login = () => {
        this.setState({ username: "roberto from bahamas" });
    };
    render() {
        debugger;
        const { username } = this.state;
        const { login } = this;
        return (
            <Context.Provider value={{ username, login }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;
