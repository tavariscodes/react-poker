import React, {Component} from 'react';
import '../css/Card.css';


class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={`card ${this.props.color} ${this.props.suit} card-corner-rank card-corner-suit "`}>
                <span className="card-topleft card-corner-rank">{this.props.rank}</span>
                <span className="card-bottomright card-corner-rank">{this.props.rank}</span>
            </div>
        )
    }
}


export default Card;