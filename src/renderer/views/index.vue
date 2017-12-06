<template>
<div>

  <el-button >按钮</el-button>
  <i class="el-icon-edit"></i>
  <i class="el-icon-share"></i>
  <i class="el-icon-delete"></i>
  <el-button type="primary" icon="search">搜索</el-button>

  <div class="block">
    <span class="demonstration">默认显示颜色</span>
    <span class="wrapper">
      <el-button type="success">成功按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="info">信息按钮</el-button>
    </span>
  </div>

  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
  <el-button type="primary" icon="search">搜索</el-button>
  <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  <el-button type="primary" size="large">大型按钮</el-button>
  <el-button type="primary">正常按钮</el-button>
  <el-button type="primary" size="small">小型按钮</el-button>
  <el-button type="primary" size="mini">超小按钮</el-button>

  <el-time-select
    v-model="value"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    placeholder="选择时间">
  </el-time-select>

</div>
</template>

<script>
    export default {
      created () {
        // console.log('')
      },
      data () {
        return {
          value: ''
        }
      },
      methods: {
        // console.log('')
      },
      watch: {
        // console.log('')
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-levelbar.el-breadcrumb {
      display: inline-block;
      font-size: 14px;
      line-height: 50px;
      margin-left: 10px;
      .no-redirect {
        color: #97a8be;
        cursor: text;
      }
    }
</style>
