<template>
  <div class="todolist">
    <header>
      <h1>記事本</h1>
    </header>

    <main>
      <Add :addComment="addComment" />
      <List :list="list" :deleteComment="deleteComment" />
    </main>

    <footer v-cloak>
      <span v-show="list.length != 0"
        ><strong>{{ list.length }}</strong> items left</span
      >

      <button v-on:click="clearAll" v-show="list.length != 0">Clear</button>
    </footer>
  </div>
</template>

<script>
import Add from "./components/Add";
import List from "./components/List";
import FirebaseDB from "./js/firebaseDB.js";

export default {
  data() {
    return {
      db: new FirebaseDB(), //new一個firebase class和資料庫連線
      list: [], //存資料庫拿回來的資料
    };
  },
  //vue創建完執行
  created() {
    this.db.initListData(this.getList);
  },
  methods: {
    //增加
    addComment(comment) {
      this.db.writeListData(comment);
    },
    //刪除
    deleteComment(key) {
      this.db.removeListData(key);
    },
    //全部刪除
    clearAll() {
      this.db.clearListData();
    },
    //取得資料
    getList: function (data = null) {
      const newList = [];

      if (data != null) {
        Object.keys(data).forEach((key) => {
          let d = {
            id: key,
            msg: data[key],
          };
          newList.unshift(d);
        });
      }

      this.list = newList;
    },
  },
  //組件
  components: {
    Add,
    List,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

[v-cloak] {
  display: none;
}

.todolist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40vw;
  padding: 20px;
  margin: 250px auto;
  border: 1px solid;
  border-radius: 10px;
}

footer {
  align-self: flex-end;
  margin: 20px 0;
}
</style>
