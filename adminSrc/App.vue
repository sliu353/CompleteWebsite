<template>
    <div class="container-fluid">
      <transition name="fade">
                <router-view></router-view>
            </transition>
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
};
</script>