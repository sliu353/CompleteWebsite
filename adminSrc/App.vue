<template>
    <div class="container-fluid">
            <div class="col-sm-3 editor">
            <transition name="fade">
                <router-view></router-view>
            </transition>
            <hr>
            <label>宽度(%)</label>
            <input type="number" class="form-control" min="0" max="100" step="5"  v-model="width">
            <label>高度(%)</label>
            <input type="number" class="form-control" min="0" max="100" step="5" v-model="height">
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  background-color: #f0f0f0;
  position: relative;
}
.view {
  height: 100%;
  width: 100%;
  padding: 0;
}

.editor {
  overflow-y: scroll;
}
</style>
<script>
export default {
  data: function() {
    return {
      height: 100,
      width: 100
    };
  }
};
</script>