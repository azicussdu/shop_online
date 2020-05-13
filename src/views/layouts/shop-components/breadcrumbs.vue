<template>
  <div class="container p-0">
    <div class="row py-0 no-gutters">
      <div class="col-12 p-0">
          <div class="my-breadcrumb">
            <div class="my-breadcrumb__item" v-for = "item in items" :key="item.id">
              <router-link tag = "a" :to = "item.href" class="my-breadcrumb__link" :class = "{disable:item.disabled}">{{item.text}}</router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'items'
  ],
  mounted () {
    console.log(this.items)
  }
}
</script>

<style>
  .my-breadcrumb{
      display: flex;
    line-height: 1;
  }
 .my-breadcrumb__link{
   display: inline-block;
   color:#2e383e;
   padding:0 15px 0 5px;
   text-transform: uppercase;
   position: relative;
 }
  .my-breadcrumb__link::after{
    content:'>';
    position: absolute;
    top:0;
    right: 0;
    color:rgba(0,0,0,.5)
  }
  .my-breadcrumb__link:hover:after{
    text-decoration: none;
  }
  .disable{
    color:rgba(0,0,0,.3);
    cursor:not-allowed;
  }
  .disable::after {
    content:''
  }
  .disable:hover{
    text-decoration: none;
    color:rgba(0,0,0,.3)
  }
</style>
