import React, { Component } from 'react';
import './Modal.css'

export default class Modal extends Component {
    render() {
        let classSet = ["test", "justify-content-center"];
        if (!this.props.show) {
            classSet = ["test", "off"]
        } else {
            classSet = ["test"]
        }
        return (
            <div className={classSet.join(' ')}>
                <button className="btn btn-danger float-right" onClick={this.props.closeButton}>x</button>
                <div className="content">{this.props.children}</div>
                <button className="btn btn-primary btn-lg btn-block">Submit</button>
            </div>
        )
    }
}