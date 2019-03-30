<template lang="html">
    <table>
        <thead>
            <tr>
                <td>GUID</td>
                <td>Title</td>
                <td>Slug</td>
                <td>Due Date</td>
                <td>Created On</td>
                <td>List</td>
                <td>Tags</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ this.guid }}</td>
                <td>{{ this.title }}</td>
                <td>{{ this.slug }}</td>
                <td>{{ this.due }}</td>
                <td>{{ this.created }}</td>
                <td>{{ this.list }}</td>
                <td>{{ this.tags }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
'use strict';

export default {
    name: 'to-do-item',
    props: [
        'guid', 'list',
        'title', 'slug',
        'due', 'created',
        'tags'
    ]
}

</script>

<style lang="sass" scoped>

</style>
