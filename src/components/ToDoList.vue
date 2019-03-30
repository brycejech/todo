<template lang="html">
    <div class="to-do-list">
        <div class="to-do-items">
            <to-do-item
                v-for="item in items"
                :guid="item.guid"
                :title="item.title"
                :slug="item.slug"
                :due="item.due"
                :created="item.created"
                :list="item.list" />
        </div>
    </div>
</template>

<script>
'use strict';

import ToDoItem from '@/components/ToDoItem';

export default {
    name: 'to-do-list',
    data(){
        return {
            items: [
                {
                    guid: 'ada6c92f-21cd-4830-baa9-007f7ac5f424',
                    title: 'My First ToDo Item',
                    slug: 'my-first-todo-item',
                    due:  '03/31/2019',
                    created: '03/29/2019',
                    list: 'd8b778b5-69d6-4082-abb3-af9f62e0a660',
                    tags: []
                },
                {
                    guid: 'ada6c92f-21cd-4830-baa9-007f7ac5f424',
                    title: 'My First ToDo Item',
                    slug: 'my-first-todo-item',
                    due:  '03/31/2019',
                    created: '03/29/2019',
                    list: 'd8b778b5-69d6-4082-abb3-af9f62e0a660',
                    tags: []
                }
            ]
        }
    },
    methods: {
        addItem(toDoItem){
            this.items.push(toDoItem);
        }
    },
    components: {
        ToDoItem
    }
}

</script>

<style lang="sass" scoped>

</style>
