'use strict';

import Vue  from 'vue'
import Vuex from 'vuex'

import * as api from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lists: [],
        items: []
    },
    getters: {
        lists(state){ return state.lists },
        items(state){ return state.items }
    },
    mutations: {
        addList(state, list){
            const exists = state.lists.filter(ToDoList => ToDoList.id === list.id)[0];

            if(exists){
                const idx = state.lists.indexOf(exists);

                state[idx] = list;
            }
            else{ state.lists.push(list) }
        },
        addItem(state, item){
            console.log(item);
            const exists = state.items.filter(ToDoItem => ToDoItem.id === item.id)[0];

            if(exists){
                const idx = state.items.indexOf(exists);

                state[idx] = item;
            }
            else{ state.items.push(item) }
        }
    },
    actions: {
        async loadLists(context){
            const lists = await api.getToDoLists();

            lists.forEach(list => context.commit('addList', list));
        },
        async loadItems(context){
            const items = await api.getToDoItems();

            items.forEach(item => context.commit('addItem', item));
        }
    }
});
