<template lang="html">
    <tr>
        <td>{{ this.id }}</td>
        <td>{{ this.title }}</td>
        <td>{{ this.description }}</td>
        <td>{{ this.due }}</td>
        <td>{{ this.created }}</td>
        <td>{{ this.list }}</td>
        <td>{{ this.tags }}</td>
    </tr>
</template>

<script>
'use strict';

export default {
    name: 'to-do-item',
    props: [
        'id', 'list',
        'title', 'slug',
        'due', 'created',
        'description', 'tags'
    ]
}

</script>

<style lang="sass" scoped>

</style>
