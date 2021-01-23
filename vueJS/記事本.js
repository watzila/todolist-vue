const app = new Vue({
	el: "#todoapp",
	data: {
		list: [],
		inputValue: "",
	},
	created() {
		initListData(this.getList);
	},
	methods: {
		add: function () {
			if (this.inputValue != "") {
				writeListData(this.inputValue);
				this.inputValue = "";
			}
		},
		remove: function (key) {
			removeListData(key);
		},
		clearAll: function () {
			clearListData();
		},
		getList: function (data = null) {
			if (data != null) {
				Object.keys(data).forEach(key => {
					let d = {
						id: key,
						msg: data[key],
					};
					this.list.push(d);
				});
			} else {
				this.list = [];
			}
		},
	},
});
