<template>
    <div class="container-fluid">
            <div class="col-sm-3 editor">
            <transition name="fade">
                <router-view></router-view>
            </transition>
            <hr>
            <label>宽度(%)</label>
            <input type="text" class="form-control"  v-model="width">
            <label>高度(%)</label>
            <input type="text" class="form-control"  v-model="height">
            </div>
<div class="content col-sm-9">
  <div class="page-view-container" v-bind:style="{ width: width + '%', height: height + '%' }">
            <iframe class="view" src="http://localhost:3000" ></iframe>
        </div>
</div>
        </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.container-fluid {
  height: 100vh;
  padding: 0;
}
.page-view-container {
  width: 100%;
  height: 100%;
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container-fluid > .row {
  height: 100vh;
}
.editor {
  height: 100vh;
  padding: 30px;
}
.content {
  height: 100vh;
  background-color: #F0F0F0;
    position: relative;
}
.view {
  height: 100%;
  width: 100%;
  padding: 0;
}
</style>
<script>
export default {
     data: function() {
    return {
      height: 100,
      width: 100,
    };
  }
};
</script>