<template>
  <section class="edit-user">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body" style="position:relative">
            <h5 class = "mb-4">Редактирование пользователя</h5>
            <label for="name" class = "input-label my-2">Имя</label>
            <input type="text" id = "name" class = "form-control input-border-black" placeholder="Введите ваше имя" v-model="GET_EDIT_USER.name">
            <label for="password" class = "input-label my-2">Пароль</label>
            <input type="password" id = "password" class = "form-control input-border-black" placeholder="Введите ваш пароль" v-model = "GET_EDIT_USER.password">
            <label for="password-confirm" class = "input-label my-2">Подтверждение пароля</label>
            <input type="password" id = "password-confirm" class = "form-control input-border-black" placeholder="Подтвердите ваш пароль" v-model = "GET_EDIT_USER.confirmePassword">
            <label for="email" class = "input-label my-2">Email</label>
            <input type="email" id = "email" class = "form-control input-border-black" placeholder="Введите свой email" v-model = "GET_EDIT_USER.email">
            <label for="role" class = "input-label my-2">Роль</label>
            <select id="role" class = "form-control input-border-black" v-model = "GET_EDIT_USER.role.id">
              <option v-for = "(role,index) in ROLES" v-bind:key="role.id"  :value="index + 1">{{role.name}}</option>
            </select>
            <br />
            <button class = "btn btn-sm success btn-outline-primary" @click = "editUser">Сохранить</button>
            <div style = "display: none" id = "overlay">
              <div class="spinner-border mySpinner" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
             <h5>Заказы пользователя</h5>
              <table class = "table table-hover" v-if = "GET_EDIT_USER.orders.length">
                <thead>
                    <th>ID</th>
                    <th>Статус</th>
                    <th>Сумма</th>
                    <th>Дата создания</th>
                    <th>Дата изменения</th>
                    <th>Действия</th>
                </thead>
                <tbody>
                    <tr v-for = "order in GET_EDIT_USER.orders" v-bind:key="order.id">
                      <td>{{order.id}}</td>
                      <td>{{order.status}}</td>
                      <td>{{order.products | sumItems}}</td>
                      <td>{{order.created_at | convert}}</td>
                      <td>{{order.updated_at | convert}}</td>
                      <td>
                        <router-link :to = "{name:'order-detail',params:{id:order.id}}">
                          <font-awesome-icon :icon="['far','eye']" class="blue pointer"/>
                        </router-link>
                      </td>
                    </tr>
                </tbody>
              </table>
            <div v-else style = "font-size:.8em;color:red;margin-top:1.5em;">
              Этот пользователь не сделал никаких заказов
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  filters: {
    sumItems: function (products) {
      // eslint-disable-next-line no-unused-vars
      let sum = 0
      for (let product of products) sum += (product.price * product.pivot.pieces)
      return sum
    }
  },
  computed: {
    ...mapGetters(['ROLES', 'GET_EDIT_USER']),
    name: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-undef
        return this.GET_EDIT_USER.name
      },
      set (name) {
        this.SET_EDIT_USER_NAME(name)
      }
    },
    confirmePassword: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-unused-expressions
        this.GET_EDIT_USER.confirmPassword
      },
      set (confirmePassword) {
        this.SET_EDIT_USER_CONFIRM_PASSWORD(confirmePassword)
      }
    },
    password: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-undef
        return this.GET_EDIT_USER.password
      },
      set (password) {
        this.SET_EDIT_USER_PASSWORD(password)
      }
    },
    email: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-undef
        return this.GET_EDIT_USER.email
      },
      set (email) {
        this.SET_EDIT_USER_EMAIL(email)
      }
    },
    role_id: {
      // eslint-disable-next-line vue/return-in-computed-property
      get () {
        // eslint-disable-next-line no-undef
        return this.GET_EDIT_USER.role.id
      },
      set (role) {
        this.SET_EDIT_USER_ROLE(role)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_EDIT_USER_NAME', 'SET_EDIT_USER_PASSWORD', 'SET_EDIT_USER_EMAIL', 'SET_EDIT_USER_ROLE', 'SET_ORDER', 'SET_EDIT_USER_CONFIRM_PASSWORD']),
    ...mapActions(['GET_ROLES_REQUEST', 'GET_EDIT_USER_REQUEST', 'UPDATE_EDIT_USER']),
    async editUser () {
      if (this.GET_EDIT_USER.name && this.GET_EDIT_USER.email && this.GET_EDIT_USER.role.id) {
        this.UPDATE_EDIT_USER(this.GET_EDIT_USER)
      } else {
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'error',
          title: 'Заполните все поля правильно'
        })
      }
    }
  },
  async mounted () {
    await this.GET_EDIT_USER_REQUEST(this.$route.params.id)
    await this.GET_ROLES_REQUEST()
  }
}
</script>

<style scoped>
  .input-border-black{
    outline:1px solid rgba(0,0,0,.3);
  }
  .success{
    background-color: #3c8dbc;
  }
  .blue{
    color:#3c8dbc;
  }
</style>
