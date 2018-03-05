<template>
<div class="">
              <div class="col-sm-3 editor">
                <br>
  <br>
  <div class="dropdown form-group">
    <button class="btn btn-primary" type="button" data-toggle="dropdown">选择要编辑的页面
    <span class="caret"></span></button>
    <ul class="nav-dropdown dropdown-menu nav">
      <li v-for="(section) in data" :key="section.index">
        <a class="nav-tab" data-toggle="tab" v-bind:href="'#' + section.index">页面{{ section.index }}</a>
      </li>
    </ul>
  </div>
              <div class="form-group">
        <button class="btn btn-success" v-on:click="updateHomePage" v-bind:disabled="!isHomePageUploaded">保存编辑</button>
        </div>

            <div class="form-group">
          <button class="btn btn-primary" v-on:click="data.push({index: data.length + 1, images: [], useVideo: false})">添加页面</button>
        </div>
  <div class="tab-content"> 
  <div v-for="(section, i) in data" :key="section.index" v-bind:id="section.index" 
    v-bind:class="{'tab-pane':true, fade:true, in: i === 0, active: i === 0}">
    <h1>页面{{section.index}}</h1>
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
        <div class="col-md-12">
          <div class="form-group">
            <label>背景形式</label>
            <div class="radio">
              <label><input type="radio" v-model="section.useVideo" :value="true">视频</label>
            </div>
            <div class="radio">
              <label><input type="radio" v-model="section.useVideo" :value="false">图片</label>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div v-if="!section.useVideo" class="form-group">
            <label>已有图片(拉拽调整顺序)</label>
            <ul v-sortable="{onEnd: reorder}" class="list-group">
              <li class="list-group-item" v-for="(image, imageIndex) in section.images" :key="image.name">
                <label>{{image.name}}</label>
                <img v-bind:src="image.src" style="width:200px; height:150px">
                <button type="button" class="btn btn-danger" v-on:click="triggerDeleteImageDialog(section.index, image.src, image.name, imageIndex)">删除</button>
              </li>
            </ul>
            <label>添加图片</label>
            <input @change="uploadFile(section, 'image', $event)" type="file" name="photo" accept="image/*">
          </div>  
        </div>
        <div class="col-md-12">
          <div v-if="section.useVideo" class="form-group">
            <div class="list-group-item">
            <label>{{section.images[0].name}}</label>
                <img v-bind:src="section.images[0].src" style="width:200px; height:150px">
             </div>
             <label>添加（替換）備用图片</label>
              <input @change="uploadFile(section, 'image', $event)" type="file" name="photo" accept="image/*">
               <label>添加視頻</label>
            <input @change="uploadFile(section, 'video', $event)" type="file" name="photo" accept="video/*">
          </div>
        </div>
                  <div class="form-group">
          <button class="btn btn-primary" v-on:click="triggerDeletePageDialog(section.index)">删除此页面</button>
        </div>
        </div><br />
    </form>
  </div>
  </div>

<button type="button" class="btn btn-primary btn-hidden" data-toggle="modal" data-target="#deleteImageModal" ref="deleteImageBtnHidden">
  Launch demo modal
</button>
<button type="button" class="btn btn-primary btn-hidden" data-toggle="modal" data-target="#deletePageModal" ref="deletePageBtnHidden">
  Launch demo modal
</button>

            <hr>
            <label>宽度(%)</label>
            <input type="number" class="form-control" min="0" max="100" step="5"  v-model="width">
            <label>高度(%)</label>
            <input type="number" class="form-control" min="0" max="100" step="5" v-model="height">
            </div>
<div class="content col-sm-9">
  <div class="page-view-container" v-bind:style="{ width: width + '%', height: height + '%' }">
            <iframe id="view" class="view" src="http://localhost:3000" ></iframe>
        </div>
</div>
  
<!-- Modal -->
<div class="modal fade" id="deleteImageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">确定要删除这个图片么？</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img v-bind:src="toBeDeletedProperties.srcToBeDeleted" style="width:200px; height:150px">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="removeSrcFromSection">删除</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="deletePageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">确定要删除页面{{toBeDeletedPageIndex}}么？</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="removePage">删除</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style>
.btn-hidden {
  display: none;
}
</style>

<script>
var toBeExported = {
  data: function() {
    return {
      data: [],
      toBeDeletedProperties: {},
      toBeDeletedPageIndex: -1,
      isHomePageUploaded: true,
      width: 100,
      height: 100
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      let uri = "http://localhost:3000/homePage.json";
      this.axios.get(uri).then(response => {
        this.data = response.data;
      });
    },
    uploadFile: function(thisSection, fileType, e) {
      var axios = this.axios;
      var files = e.target.files;
      if (!files[0]) {
        return;
      }
      var thisFile = files[0];
      var reader = new FileReader();
      reader.readAsDataURL(thisFile);
      reader.onload = function(e) {
        var newItem = {
          src: e.target.result,
          name: thisFile.name
        };
        if (!thisSection.useVideo) {
          thisSection.images.push(newItem);
        } else {
          if (fileType === 'image') {
            thisSection.images = [newItem];
            return;
          }
          axios.post('/uploadVideo', newItem).then(
            function() {
              thisSection.video = '/video/' + newItem.name;
            }
          ).catch(
            function(e) {
              alert(e.message);
          });
        }
      };
    },
    triggerDeleteImageDialog: function(index, src, name, imageIndex) {
      this.toBeDeletedProperties = {
        nameToBedeleted: name,
        srcToBeDeleted: src,
        targetedSectionIndex: index,
        imageIndex: imageIndex
      };
      this.$refs.deleteImageBtnHidden.click();
    },
    triggerDeletePageDialog: function(index) {
      this.toBeDeletedPageIndex = index;
      this.$refs.deletePageBtnHidden.click();
    },
    removeSrcFromSection: function() {
      var targetedSectionIndex = this.toBeDeletedProperties
        .targetedSectionIndex;
      var targetedSection = this.data.find(function(section) {
        return section.index === targetedSectionIndex;
      });
      targetedSection.images.splice(this.toBeDeletedProperties.imageIndex, 1);
    },
    removePage: function() {
      this.data.splice(parseInt(this.toBeDeletedPageIndex) - 1, 1);
      for (var index in this.data) {
        this.data[index].index = parseInt(index) + 1;
      }
    },
    changeOrder: function(section, imageIndex, newIndex) {
      var thisImage = Object.assign({}, section.images[imageIndex]);
      section.images[imageIndex] = section.images[newIndex];
      section.images[newIndex] = thisImage;
    },
    updateHomePage: function() {
      var axios = this.axios;
      var scope = this;
      scope.isHomePageUploaded = false;

      axios
        .post("/updateHomePage", scope.data)
        .then(response => {
          scope.isHomePageUploaded = true;
          scope.data = response.data;
          document.getElementById("view").src += "";
        })
        .catch(function(e) {
          alert(e.message);
          scope.isHomePageUploaded = true;
        });
    },
    reorder({ oldIndex, newIndex }) {
      const movedItem = this.items.splice(oldIndex, 1)[0];
      this.items.splice(newIndex, 0, movedItem);
    }
  }
};
export default toBeExported;
</script>