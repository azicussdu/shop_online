<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body" style = "position: relative">
          <h5 class="card-title mb-4">Заказы</h5>
          <div class="table-responsive">
            <table class="table center-aligned-table table-hover">
              <thead>
              <tr>
                <th class="border-bottom-0 text-center">ID</th>
                <th class="border-bottom-0 text-center">Покупатель</th>
                <th class="border-bottom-0 text-center">Статус</th>
                <th class="border-bottom-0 text-center">Дата создания</th>
                <th class="border-bottom-0 text-center">Дата изменения</th>
                <th class="border-bottom-0 text-center">Действия</th>
<!--
                <th class="border-bottom-0">Payment Status</th>
-->
                <th class="border-bottom-0"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="order in ORDERS" :key="order.id">
                <td class="text-center">{{order.id}}</td>
                <td class="text-center">{{order.user.name}}</td>
                <td class="text-center"><span class = "badge" :class = "{'badge-primary':order.status == 'Новый',
                'badge-success':order.status == 'Одобрен',
                'badge-danger':order.status == 'Откланен'}" disabled>{{order.status}}</span></td>
                <td class="text-center">{{order.created_at | convert}}</td>
                <td class="text-center">{{order.updated_at | convert}}</td>
                <td class="text-center">
                  <router-link  :to="`/admin/orders/detail/${order.id}`">
                    <font-awesome-icon :icon="['far','eye']" class = "blue pointer"/>
                  </router-link>
                  /
                  <a @click = "DELETE_ORDER(order.id)">
                    <font-awesome-icon :icon="['far','trash-alt']" class = "red-icon-color pointer"/>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
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
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'list-orders',
  data () {
    return {}
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'ORDERS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_ORDERS',
      'DELETE_ORDER'
    ])
  },
  mounted () {
    this.GET_ORDERS()
  }
}
</script>

<style>
</style>
