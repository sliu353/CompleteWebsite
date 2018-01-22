<template>
<div>
  <div v-for="section in data" :key="section.index">
    <h1>{{section.index}}</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="section.title">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>Text</label>
            <input type="text" class="form-control" v-model="section.text">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label>buttonText</label>
            <input type="text" class="form-control" v-model="section.buttonText">
          </div>
        </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add Item</button>
        </div>
    </form>
  </div>
  </div>
</template>
<script>
var toBeExported = {
  data: function() {
    return {
      data: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let uri = "http://localhost:3000/homePage.json";
      this.axios.get(uri).then(response => {
        this.data = response.data;
      });
    }
  }
};
export default toBeExported;
</script>