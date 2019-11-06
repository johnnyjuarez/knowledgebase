import React, { Component } from 'react';
import './Modal.css'

export default class Modal extends Component {
    render() {
        let classSet = ["test"];
        if (!this.props.show) {
            classSet = ["test", "off"]
        } else {
            classSet = ["test"]
        }
        return (
            <div className={classSet.join(' ')}>
                <div className="content">{this.props.children}</div>
            </div>
        )
    }
}