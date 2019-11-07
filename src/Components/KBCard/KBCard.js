import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class KBCard extends Component {

    cardHandler = () => {
        const cardDisplay = this.props.cardArr.map((card, index) => {
            return (
                <Col key={index.toString()} xs={4}>
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
                <Button onClick={this.props.onclick} className="mt-4" variant="outline-success">Add</Button>
            </Container>
        )
    }
}

export default KBCard