<template lang="html">
    <div class="to-do-list">
        <h3>ToDo Items</h3>
        <div class="to-do-items">
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Due Date</td>
                        <td>Created On</td>
                        <td>List</td>
                        <td>Tags</td>
                    </tr>
                </thead>
                <tbody>
                    <to-do-item
                        v-for="item in items"
                        :id="item.id"
                        :uuid="item.uuid"
                        :title="item.title"
                        :slug="item.slug"
                        :description="item.description"
                        :due="item.due"
                        :created="item.created"
                        :list="item.list" />
                </tbody>
            </table>
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

        }
    },
    methods: {

    },
    computed: {
        items(){
            return this.$store.getters.items;
        }
    },
    components: {
        ToDoItem
    }
}

</script>

<style lang="sass" scoped>

</style>
