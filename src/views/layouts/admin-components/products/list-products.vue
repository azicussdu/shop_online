<template>
    <section class = "list-products">
      <div class="row">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title mb-4">Товары</h5>
              <div class="table-responsive">
                <table class="table center-aligned-table table-hover">
                  <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Категория</th>
                    <th class="border-bottom-0">Наименование</th>
                    <th class="border-bottom-0">Цена</th>
                    <th class="border-bottom-0 text-center">Статус</th>
                    <th class="border-bottom-0 text-center">Действия</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for = "product in PRODUCTS" v-bind:key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.alias}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td class="text-center">{{product.status}}</td>
                    <td class="text-center">
                      <router-link tag = "a" :to = "`/admin/products/detail/${product.id}`">
                        <font-awesome-icon :icon="['far','eye']" class="blue pointer"/>
                      </router-link>
                      /
                      <a href="javascript:void(0)" @click="DELETE_PRODUCT(product.id)">
                        <font-awesome-icon :icon="['far','trash-alt']" class="red-icon-color pointer"/>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'list-products',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'PRODUCTS_LIST_REQUEST',
      'DELETE_PRODUCT'
    ])
  },
  mounted () {
    this.PRODUCTS_LIST_REQUEST()
  }
}
</script>

<style>

</style>
