import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss'
import App from './routers/App';

const jsx = <div>
    <App />
</div>

ReactDOM.render(jsx, document.getElementById('root'));
