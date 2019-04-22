import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name    : 'Merah',
        color   : 'Merah',
        img     : 'atta.jpg',
    },
    {
        name    : 'Kuning',
        color   : 'Kuning',
        img     : 'babang.jpg',
    },
    {
        name    : 'Ijo',
        color   : 'Hijau',
        img     : 'inces.jpg',
    },
    {
        name    : 'Biru',
        color   : 'Biru',
        img     : 'dua.jpg',
    },
    {
        name    : 'Calculator',
        color   : 'Pink',
    },
    {
        name    : 'Profile',
        color   : 'Orange',
    },
];

ReactDOM.render(<App items={items} />, document.getElementById('root'));
serviceWorker.register();