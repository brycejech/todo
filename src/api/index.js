'use strict';

const baseUrl = 'http://localhost:5000';

export function getToDoLists(){
    return fetch(`${ baseUrl }/lists`)
        .then(r => r.json())
        .catch(console.log);
}

export function getToDoItems(){
    return fetch(`${ baseUrl }/items`)
        .then(r => r.json())
        .catch(console.log);
}
