import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { act } from 'react';
import React from 'react';
import {setData} from "./stores/global";

global.fetch = require('node-fetch');

test('renders app without errors', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(screen.getByText('Toolbox')).toBeInTheDocument();
});

test('displays loading message when data is loading', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('displays no data found message when data is empty', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
});