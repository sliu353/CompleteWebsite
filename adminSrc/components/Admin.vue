<template>
<div class="">
  <br>
  <br>
  <div class="dropdown">
    <button class="btn btn-primary" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="nav-dropdown dropdown-menu nav">
      <li v-for="(section) in data" :key="section.index">
        <a class="nav-tab" data-toggle="tab" v-bind:href="'#' + section.index">{{ section.index }}</a>
      </li>
    </ul>
  </div>
  <div class="tab-content"> 
  <div v-for="(section, i) in data" :key="section.index" v-bind:id="section.index" 
    v-bind:class="{'tab-pane':true, fade:true, in: i === 0, active: i === 0}">
    <h1>{{section.index}}</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label>标题</label>
            <input type="text" class="form-control" v-model="section.title">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>文字</label>
            <input type="text" class="form-control" v-model="section.text">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>按钮文字</label>
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
</div>
</template>
<script>
var toBeExported = {
  data: function() {
    return {
      enableActiveAttr: false,
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