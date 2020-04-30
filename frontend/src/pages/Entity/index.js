import React, {Component} from 'react';
import api from '../../services/api'; // importando a api

import './styles.css';

export default class Entity extends Component{

    state = {
        entity: {},
        entInfo: {},
        entProducts: []
    }

    async componentDidMount(){
        const {id} = this.props.match.params; // pegando o id enviado como parâmetro

        const response = await api.get(`/entities/${id}`)

        this.setState({entity: response.data});
        this.setState({entInfo: response.data.entInfo});
        this.setState({entProducts: response.data.entProducts});
    }

    render(){
        const{entity, entInfo:{site, phone}, entProducts} = this.state;

        return(
            <div className="entity-info">
                <h1>{entity.entName}</h1>
                <p>{entity.entDescription}</p>
                <p>{phone}</p>


                <p>Nossos itens:</p>
                {entProducts.map(item => ( /* vai executar o que estiver dentro da função para cada entidade encontrada */
                    <li>{`${item.item}: R$${item.value}`}</li>
                ))}

                <p>
                    Site: <a href={"https://" + site}>{site}</a>
                </p>
            </div>
        )
    }
}