import React, {Component} from "react";

import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            digimonList: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then(response => response.json())
            .then(digimons => this.setState({digimonList: digimons}))
    }

    render() {
        const {digimonList, searchField} = this.state;
        const filteredDigimons = digimonList.filter(digimon =>
            digimon.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1> Digimon Rolodex </h1>
                <SearchBox
                    placeholder='search Digimon'
                    handleChange={e => this.setState({searchField: e.target.value})}
                />
                <CardList digimonList={filteredDigimons}/>
            </div>
        );
    }
}

export default App;
