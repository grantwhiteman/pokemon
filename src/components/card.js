import React from "react"

export default class Card extends React.Component {
    capitalise (input) {
        return input.substring(0, 1).toUpperCase() + input.substring(1)
    }

    render() {
        return (
            <div style={{"height":"320px"}}className={this.props.type} id="Card">
                <h1>{this.capitalise(this.props.name)}</h1>
                <div>
                    <span>{this.capitalise(this.props.type)} type
                    <span id="ID">  ID : {this.props.id}</span></span>
                </div>                
                <img alt={this.props.name} className="image" src={`https://pokeres.bastionbot.org/images/pokemon/${this.props.id}.png`} />
                <hr className="solid"></hr>
                <h3 id="abilities">Abilities</h3>
                <ol>{this.props.abilities.map((obj, index) => <li className="ability" key={index}>{this.capitalise(obj.ability.name)}</li>)}</ol>
            </div>
        )
    }
}