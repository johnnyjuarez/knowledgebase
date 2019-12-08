import React, { Component } from 'react';

import './KBCard.css'

class KBCard extends Component {

    cardHandler = () => {

        console.log(this.props.cardArr);
        const cardDisplay = this.props.cardArr.map((card, index) => {
            return (
                <a href="localhost:3000">
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                            <p className="card-text">{card.description}</p>
                        </div>
                    </div>
                </a>
            )
        })
        return cardDisplay
    }



    render() {
        return (
            <div className="cardContainer container">
                {this.cardHandler()}
            </div>
        )
    }
}

export default KBCard