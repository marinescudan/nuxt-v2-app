<template>
    <cv-data-table :columns="columns" :title="title" :helper-text="helperText">
        <template slot="data">
            <cv-data-table-row v-for="(row, rowIndex) in data" :key="`${rowIndex}`">
                <cv-data-table-cell
                    v-for="(cell, cellIndex) in row.data"
                    :key="`${cellIndex}`"
                >
                    {{cell}}
                </cv-data-table-cell>
                <template slot="expandedContent">
                {{ row.description }}
                </template>
            </cv-data-table-row>
        </template>
    </cv-data-table>
</template>

<script>
export default {
    name: 'RepositoriesTable',
    props: {
        headers: Array,
        rows: Array,
        title: String,
        helperText: String,
    },
    computed: {
        columns() {
            return this.headers.map(header => header.header);
        },
        data() {
            return this.rows.map(row => ({
                data: [
                    row.name,
                    row.createdAt,
                    row.updatedAt,
                    row.issueCount,
                    row.stars,
                    row.links,
                ],
                description: 'Row description',
            }));
        },
    },
};
</script>

<style lang="scss">
@import '@/assets/styles/carbon-utils';

.repo-page .bx--row {
  padding-top: $spacing-05;
  padding-bottom: $spacing-05;
}
</style>
