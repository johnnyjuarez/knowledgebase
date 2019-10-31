import React, { Component } from 'react';

export default class Modal extends Component {
    onClose = e => {
        // this.props.show = false;
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="App">
                <div>{this.props.children}</div>
                <div>
                    <button onClose={e => {
                        this.onClose(e);
                    }}
                    >
                        Close
                    </button>
                </div>
            </div>
        )
    }
}