<template>
    <div class="container home">
        <h1 class="text-center">To-Do Application</h1>
        <list-view />
        <to-do-list />
    </div>
</template>

<script>
'use strict';

import ListView from '@/components/ListView';
import ToDoList from '@/components/ToDoList';

export default {
    name: 'home',
    components: {
        ToDoList,
        ListView
    }
}
</script>

<style lang="sass" scoped>

</style>
