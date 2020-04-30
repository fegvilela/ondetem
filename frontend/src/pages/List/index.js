import React, {Component} from 'react';
import api from '../../services/api'; // importando nossa api
import {Link} from 'react-router-dom';

import './styles.css';

export default class List extends Component{

    state = {
        entities: [],
        entityInfo: {}, // vai guardar as informações do objeto (total de páginas, total de itens, etc)
        page: 1
    }

    // é executada assim que o componente é montado na tela
    componentDidMount(){
        this.loadEntities();
    }

    // precisamos fazer uso de arrow-function aqui para termos acesso aos outros métodos da classe com o 'this'
    loadEntities = async (page = 1) => {
        const response = await api.get(`/entities?page=${page}`);

        const {docs, ...entityInfo}  = response.data;

        this.setState({entities: docs, entityInfo, page})
    }

    prevPage = () => {
        const {page} = this.state;

        if(page === 1) return; // se a página for a primeira, não faça nada

        const pageNumber = page - 1; // voltando uma página

        this.loadEntities(pageNumber); // recarregando as entidades e informações
    }

    nextPage = () => {
        const {page, entityInfo} = this.state;

        if(page === entityInfo.pages) return; // se a página for a última, não faça nada

        const pageNumber = page + 1; // avançando uma página

        this.loadEntities(pageNumber); // recarregando as entidades e informações
    }

    render(){

        const {entities, page, entityInfo} = this.state;

        return (
            <div className="entity-list">
                <div className="searchBar">
                    <input type="text" placeholder="Pesquisar"/>
                </div>
                {entities.map(entity => ( /* vai executar o que estiver dentro da função para cada entidade encontrada */
                    <article key={entity._id}>
                        <strong>{entity.entName}</strong>
                        <p>{entity.entDescription}</p>

                        <Link to={`/entities/${entity._id}`} >Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === entityInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}