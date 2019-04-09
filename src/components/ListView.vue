<template lang="html">
    <div class="lists">
        <h3>ToDo Lists</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Item Count</th>
                    <th>Created</th>
                    <th>Modified</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in lists">
                    <td>{{ list.id }}</td>
                    <td>{{ list.title }}</td>
                    <td>{{ list.description }}</td>
                    <td>{{ list.items.length }}</td>
                    <td>{{ list.created }}</td>
                    <td>{{ list.modified }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'list-view',
    data() {
        return {

        }
    },
    computed: {
        lists(){
            return this.$store.getters.lists;
        }
    },
    created() {
        this.$store.dispatch('loadLists');
        this.$store.dispatch('loadItems');
    }
}
</script>

<style lang="sass" scoped>

</style>
