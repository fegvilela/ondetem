import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// importando as páginas da aplicação:
import Register from './pages/Register';
import List from './pages/List';
import Entity from './pages/Entity'

export default function Routes(){
    return(
        <BrowserRouter> {/* Precisa ficar em volta de todas as rotas para que o roteamento funcione */}
            <Switch> {/* faz com que apenas uma rota seja executada de cada vez */}
                <Route path="/register" component={Register} />
                <Route path="/list" component={List} />
                <Route path="/entities/:id" component={Entity} />
            </Switch>
        </BrowserRouter>
    )
}