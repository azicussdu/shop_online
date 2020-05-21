<template>
    <section class="profile">
       <div class="container">
         <div class="row">
           <div class="col-lg-3 col-md-4">
              <sidebar />
           </div>
           <div class="col-lg-9 col-md-8">
             <router-view />
           </div>
         </div>
       </div>
    </section>
</template>

<script>
import sidebar from './profile-sidebar'
export default {
  name: 'profile',
  components: {
    sidebar
  }
}
</script>

<style scoped>
  .profile{
    margin-bottom: 100px;
  }
</style>
