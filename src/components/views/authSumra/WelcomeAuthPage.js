import React from "react";

export default class WelcomeAuthPage extends React.PureComponent {
    static replaces = "Welcome";

    render() {
        return (
            <>
                <header className="sumra-header">
                    <div className="logotype"></div>
                </header>
                <main className="sumra-main">{this.props.children}</main>
            </>
        );
    }
}
