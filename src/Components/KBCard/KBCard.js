import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class KBCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardObj: [{
                title: "Title",
                description: "Description",
                details: "Details"
            },
            {
                title: "I hope",
                description: "this creates",
                details: "another card!"
            }
            ]
        }
    }


    cardHandler = () => {
        const cardDisplay = this.state.cardObj.map((card) => {
            return (
                <Col xs={4}>
                    <a href="localhost:3000"
                        style={{
                            textDecoration: 'none',
                            color: 'black'
                        }}
                    >
                        <Card style={{
                            width: '18rem',
                            marginTop: '20px',
                            marginLeft: '5px'
                        }}>
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>{card.title}</Card.Title>
                                <Card.Text style={{ textAlign: 'center' }}>{card.description}</Card.Text>
                                <Card.Text>{card.details}</Card.Text>
                                <Button variant="info">Edit</Button>
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            )
        })
        return cardDisplay
    }

    render() {
        return (
            <Container>
                {this.cardHandler()}
                <Button variant="success">Add</Button>
            </Container>
        )
    }
}

export default KBCard