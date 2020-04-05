import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// importando as páginas da aplicação:
import Register from './pages/Register';

export default function Routes(){
    return(
        <BrowserRouter> {/* Precisa ficar em volta de todas as rotas para que o roteamento funcione */}
            <Switch>
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}