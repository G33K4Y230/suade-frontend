<template>

  <ul>
    <li v-for="item in paginatedData" :key="item._id">
      {{ item.name }}
    </li>
  </ul>
  <div class="pagination">
    <ul>
      <li :class="{disabled: currentPage === 0}" @click="$emit('changePage', currentPage-1)">&lt;</li>
      <li v-for="p in pages" :key="p" :class="{active: p === currentPage}" @click="$emit('changePage', currentPage)">{{ p + 1 }}</li>
      <li :class="{disabled: currentPage === pages.length - 1}" @click="$emit('changePage', currentPage+1)" >&gt;</li>
    </ul>
  </div>

</template>

<script>

  export default {
    name: 'List',
    props: {
      data: {type: Array, default: ()=>[]},
      options: {type: Object, default: ()=>({limit: 25, offset: 0})},
    },
    emits: ['changePage'],
    computed: {
      // sort data by name
      sortedData() {
        console.log(this.data)
        return this.data.slice().sort((a, b)=>{
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      },
      // paginate data
      paginatedData() {
        return this.sortedData.slice(this.options.pagination?.offset, this.options.pagination?.offset + this.options.pagination.limit);
      },
      // list of pages to display
      pages() {
        return new Array(Math.ceil(this.data.length / this.options.pagination.limit))
          .fill()
          .map((_v, i)=>i);
      },
      // currently displayed page
      currentPage() {
        return (this.options.pagination?.offset / this.options.pagination?.limit);
      },
    },
  };

</script>

<style scoped lang="scss">

  .pagination ul {
    list-style: none;
    user-select: none;

    li {
      display: inline-block;
      padding: 0 4px;
      cursor: pointer;
      color: #888;

      &:hover {
        color: #000;
        font-weight: bold;
      }
      &.active{
        color: #000;
        font-weight: bold;
        pointer-events:none;
      }
      &.disabled {
        color: #ddd;
        pointer-events:none;
      }
    }
  }

</style>
