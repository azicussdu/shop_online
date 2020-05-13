<template>
  <section class="list-filters">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body" style = "position:relative">
            <h5 class="card-title mb-4">Список брендов</h5>
            <p class = "mb-4">
              <router-link tag = "button" :to = "{name:'add-brand'}" class = "btn bg-blue btn-primary">
                <i class = "mdi mdi-hospital"></i>Добавить бренд
              </router-link>
            </p>
            <div class="table-responsive">
              <table class="table center-aligned-table table-hover">
                <thead>
                <tr>
                  <th class="border-bottom-0">ID</th>
                  <th class="border-bottom-0">Image</th>
                  <th class="border-bottom-0">Name</th>
                  <th class="border-bottom-0">Short name</th>
                  <th class="border-bottom-0"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for = "(brand,index) in BRANDS" :key="brand.id">
                  <td>{{index+1}}</td>
                  <td>
                    <img class="brand-image" :src="brand.image" >
                  </td>
                  <td>{{brand.name}}</td>
                  <td>{{brand.alias}}</td>
                  <td class="text-center">
                    <router-link :to = "`brands/detail/${brand.id}`" tag = "a" style = "color:#3c8dbc;">
                      <font-awesome-icon icon="edit" class = "pointer"/>
                    </router-link>
                    /
                    <a @click = "deleteBrand(brand.id)">
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
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'list-brands',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'BRANDS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_BRANDS',
      'DELETE_BRAND'
    ]),
    deleteBrand (id) {
      this.DELETE_BRAND({id: id, obj: this})
    }
  },
  mounted () {
    this.GET_BRANDS()
  }

}
</script>

<style>
  .brand-image{
    max-height: 50px;
  }
</style>
