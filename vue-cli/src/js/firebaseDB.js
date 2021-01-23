//firebase資料庫會給你的一些個人設定
var firebaseConfig = {
  apiKey: "AIzaSyBd-Ru8B4HXKbyvK2l1SwK8mII_L_VoChk",
  authDomain: "todolist-4eb21.firebaseapp.com",
  databaseURL: "https://todolist-4eb21-default-rtdb.firebaseio.com",
  projectId: "todolist-4eb21",
  storageBucket: "todolist-4eb21.appspot.com",
  messagingSenderId: "9250110104",
  appId: "1:9250110104:web:bfe94a29e98455b4ac6eed",
  measurementId: "G-EVPN81W11P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let database = firebase.database().ref("/todolist"); //firebase資料庫路徑

export default class FirebaseDB {
  //讀取
  initListData(getList) {
    //只要資料庫有變化就會自動執行一次
    database.on("value", result => {
      console.log(result.val());
      if (result.val() != null) {
        getList(result.val());
      } else {
        getList();
      }
    });
  }

  //寫入
  writeListData(data) {
    database.push(data);
    console.log("ok");
  }

  //指定移除
  removeListData(key) {
    database.child(key).remove();
  }

  //全部移除
  clearListData() {
    database.remove();
  }
}
