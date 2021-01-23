<template>
  <div class="inputBox">
    <input
      type="text"
      autofocus="autofocus"
      autocomplete="off"
      placeholder="請輸入任務..."
      v-model="inputValue"
      v-on:keydown.enter="add"
    />

    <button @click="add">送出</button>
  </div>
</template>

<script>
export default {
  props: {
    //完整寫法
    addComment: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    add() {
      const inputValue = this.inputValue.trim();

      if (!inputValue) {
        alert("不能為空");
        return;
      }

      this.addComment(inputValue);

      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
.inputBox {
  margin: 20px 0;
  /*border: 1px solid;*/
}

input,
button {
  padding: 5px;
  font-size: 18px;
  outline: none;
}
</style>
