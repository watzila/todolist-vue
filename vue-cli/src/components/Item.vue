<template>
  <li class="msg">
    <div>
      <span>{{ index + 1 }}.</span>
      <label>{{ item.msg }}</label>
      <button class="destory" @click="deleteItem">x</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    //一般寫法
    item: Object,
    index: Number,
    deleteComment: Function,
  },
  methods: {
    deleteItem() {
      const { item, deleteComment } = this;

      if (window.confirm(`確定刪除${item.msg}嗎?`)) {
        deleteComment(item.id);
      }
    },
  },
};
</script>

<style scoped>
.msg {
  margin: 10px 0;
  list-style: none;
}
</style>
