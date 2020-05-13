<template>
 <section class = "list-user">
   <div class="row">
     <div class="col-12 grid-margin">
       <div class="card">
         <div class="card-body" style="position:relative">
           <h5 class="card-title mb-4">Пользователи</h5>
           <div class="table-responsive">
             <table class="table center-aligned-table table-hover" v-if = "USERS.length">
               <thead>
               <tr>
                 <th class="border-bottom-0">ID</th>
                 <th class="border-bottom-0">Email</th>
                 <th class="border-bottom-0">Имя</th>
                 <th class="border-bottom-0">Роль</th>
                 <th class="border-bottom-0">Действия</th>
               </tr>
               </thead>
               <tbody>
               <tr v-for="user in USERS" :key="user.id">
                 <td>{{user.id}}</td>
                 <td>{{user.email}}</td>
                 <td>{{user.name}}</td>
                 <td>{{user.role.name}}</td>
                 <td>
                   <router-link tag = "a" :to = "{name:'edit-user',params: {id:user.id}}">
                     <font-awesome-icon icon="edit" class="blue pointer"/>
                   </router-link>
                   /
                   <a @click = "deleteUser(user.id)">
                     <font-awesome-icon :icon="['far','trash-alt']" class="red-icon-color pointer"/>
                   </a>
                 </td>
               </tr>
               </tbody>
             </table>
             <div v-else>
               Пока что нет никаких пользователей
             </div>
           </div>
           <div style = "display: none" id = "overlay">
             <div class="spinner-border mySpinner" role="status">
               <span class="sr-only">Loading...</span>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'list-users',
  components: {
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'USERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERS',
      'DELETE_USER'
    ]),
    deleteUser (id) {
      this.DELETE_USER({id: id, obj: this})
    }
  },
  mounted () {
    this.GET_USERS()
  }
}
</script>

<style>

</style>
