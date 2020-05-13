<template>
  <section class="main">
    <div class="container pt-0">
      <div class="row">
        <div class="col-md-3">
          <sidebar :nodes="CATEGORIES" class="sidebar-categories"></sidebar>
          <div class="sidebar-wrapper"></div>
        </div>
        <div class="col-md-9">
          <app-content></app-content>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .sidebar-categories {
    background-color:#fff;
    position: relative;
    width: 250px;
    z-index: 101;
    height: 480px;
    border-radius: .7px;
    position: relative;
  }
  .sidebar-categories:hover {
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,.3);
  }
  /*.sidebar-categories:hover {*/
  /*  position: relative;*/
  /*}*/

  .sidebar-wrapper {
    background-color: rgb(220, 220, 220);
    opacity: .2;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left:0;
    transition: all .3s;
    box-shadow:10px 15px 30px 1px red;
    display: none;
  }
  .main{
    margin-top: 1em;
    margin-bottom: 80px;
  }
</style>

<script>
import sidebar from './sidebar'
import appContent from './content'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'main',
  components: {
    sidebar, appContent
  },
  created () {
    this.GET_CATEGORIES()
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CATEGORIES'
    ])
  }
}
</script>
