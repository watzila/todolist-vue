<template>
  <ul>
    <Item
      v-for="(item, index) in list"
      :key="item.id"
      :item="item"
      :index="index"
      :deleteComment="deleteComment"
    />
  </ul>
</template>

<script>
import Item from "./Item";

export default {
  //簡寫
  props: ["list", "deleteComment"],
  components: {
    Item,
  },
};
</script>

<style scoped></style>
