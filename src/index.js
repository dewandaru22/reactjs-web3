import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name    : 'Atta',
        color   : 'Merah',
        img     : 'atta.jpg',
    },
    {
        name    : 'Babang',
        color   : 'Kuning',
        img     : 'babang.jpg',
    },
    {
        name    : 'Incess',
        color   : 'Hijau',
        img     : 'inces.jpg',
    },
    {
        name    : 'Adek',
        color   : 'Biru',
        img     : 'dua.jpg',
    },
];

ReactDOM.render(<App items={items} />, document.getElementById('root'));
serviceWorker.register();