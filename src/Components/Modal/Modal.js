import React, { Component } from 'react';
import ModalForm from '../Form/Form'
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
                <div className="container py-4">
                    <ModalForm />
                </div>
                <button className="btn btn-primary btn-lg btn-block">Submit</button>
            </div>
        )
    }
}