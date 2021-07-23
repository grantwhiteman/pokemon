import React from 'react'
import Card from './card'

 export default class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'pikachu',
            input: '',
            id: 25,
            abilities: [{ability: { name: "static" } }, { ability:{name:"lightening-rod"}}],
            type: 'electric',
            error: null
        }
    }

    input = (event) => {
        this.setState( { input: event.target.value.toLowerCase() } )
        console.log(this.state.input)
    }

    getPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.input}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.forms[0].name,
                    id: data.id,
                    abilities: data.abilities,
                    type: data.types[0].type.name,
                    error: null
                })
            })
            .catch((error) => {
                this.setState({ error: "Oh, we making up pokemon now? Try again" })
                console.error('Error:', error);
            })
        }

    getRandomPokemon = () => {
        const randomID = Math.floor(Math.random() * 151 + 1)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ name: data.forms[0].name,
                id: data.id, 
                abilities: data.abilities, 
                type: data.types[0].type.name,
                error: null
                })
            })
            .catch((error) => {
                alert("No idea what happened here, this isn't supposed to happen")
                console.error('Error:', error);
            })
    }

    getEvolution = () => {
        const arr=[3,6,9,12,15,18,20,22,24,26,28,31,34,36,38,40,42,45,47,49,51,53,55,57,59,62,65,68,71,73,76,78,80,82,85,87,89,91,94,95,97,99,102,103,105,107,108,110,112,113,114,115,117,119,121,122,123,124,125,126,127,128,129,130,131,136,137,139,141,142,143,144,145,146,149,150,151]
        if (!arr.includes(this.state.id)) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id + 1}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        name: data.forms[0].name,
                        id: data.id,
                        abilities: data.abilities,
                        type: data.types[0].type.name,
                        error: null
                    })
                })
                .catch((error) => {
                    alert("Oops, something went wrong!")
                    console.error('Error:', error);
                })
        } else this.setState({error: `Evolve a ${this.state.name}? Into what exactly?`})
    }

     render() {
        return (
            <div>
                <h1>Who's that pokemon?!</h1>
                <input type="text" onChange={this.input} placeholder="e.g. pikachu" />
                <button type="sumbit" onClick={this.getPokemon}>Show me!</button>
                <button type="sumbit" onClick={this.getRandomPokemon}>Random</button>
                <br></br>
                <br></br>
                <h2>{this.state.error}</h2>
                <Card name={this.state.name} id={this.state.id} abilities={this.state.abilities} type={this.state.type}/>
                <button type="sumbit" onClick={this.getEvolution}>Evolve!</button>
                <h4>Rules:</h4>
                <ol>
                    <li>Base set only</li>
                    <li>Search by name or ID (1 - 151)</li>
                    <li>Grant is the best</li>
                </ol>
            </div>
            
        )
     }
}