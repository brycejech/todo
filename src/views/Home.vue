<template>
    <div class="container home">
        <h1>To-Do Application</h1>
        <to-do-list />
    </div>
</template>

<script>
'use strict';

import ToDoList from '@/components/ToDoList';

export default {
    name: 'home',
    components: {
        ToDoList
    }
}
</script>

<style lang="sass" scoped>

</style>
