import React, { Component } from 'react';


class ModalForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="enter title"></input>
                </div>
            </form>
            // <Form>
            //     <Form.Group controlId="title">
            //         <Form.Label>Title</Form.Label>
            //         <Form.Control type="text" placeholder="example title" />
            //     </Form.Group>
            //     <Form.Group controlId="description">
            //         <Form.Label>Short Descrip.</Form.Label>
            //         <Form.Control as="textarea" rows="2" />
            //     </Form.Group>
            //     <Form.Group controlId="themeat">
            //         <Form.Label>Details</Form.Label>
            //         <Form.Control as="textarea" rows="3" placeholder="the meat and potatoes goes here...." />
            //     </Form.Group>
            // </Form>
        )
    }
}

export default ModalForm;