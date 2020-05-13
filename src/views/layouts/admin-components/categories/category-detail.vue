<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">ID {{CATEGORY_DETAIL.id}} - category details</h4>
        <b-tabs class="tab-solid tab-solid-success">
          <b-tab title="Category" active>
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <b-form-group label="Name" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="City" size="lg" :value="CATEGORY_DETAIL.name"></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="col-md-6">
                      <b-form-group label="Short name" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Zip code" size="lg" :value="CATEGORY_DETAIL.alias"></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
                </div>
                <b-form-group label="Category type" label-for="input11">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-6">
                        <b-form-input v-if="!CATEGORY_DETAIL.parent_id" type="text" id="input11" placeholder="Type" size="lg" value="Parent"></b-form-input>
                        <b-form-input v-else type="text" id="input11" placeholder="Type" size="lg" value="Child"></b-form-input>
                      </div>
                      <div class="col-md-6">
                        <img :src="CATEGORY_DETAIL.image" alt="" class="w-25">
                      </div>
                    </div>
                  </div>
                </b-form-group>
                <table v-if="!CATEGORY_DETAIL.parent_id" class="table center-aligned-table">
                  <thead>
                  <tr>
                    <th class="border-bottom-0">ID</th>
                    <th class="border-bottom-0">Name</th>
                    <th class="border-bottom-0">Short Name</th>
                    <th class="border-bottom-0 text-center">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="subcategory in CATEGORY_DETAIL.categories" :key="subcategory.id">
                    <td>{{subcategory.id}}</td>
                    <td>{{subcategory.name}}</td>
                    <td>{{subcategory.alias}}</td>
                    <td class="text-center">
                      <a>
                        <font-awesome-icon :icon="['far','trash-alt']" class = "red pointer"/>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </b-tab>
          <b-tab title="More information">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-12">
                  <b-form-group label="Keywords" label-for="input11" :rows="2" :max-rows="3">
                    <b-form-textarea type="text" id="input11" placeholder="Keywords" size="lg" :value="CATEGORY_DETAIL.keyword"></b-form-textarea>
                  </b-form-group>
                  <b-form-group label="Description" label-for="input11" :rows="2" :max-rows="3">
                    <b-form-textarea type="text" id="input11" placeholder="Description" size="lg" :value="CATEGORY_DETAIL.description"></b-form-textarea>
                  </b-form-group>
                  <div class="row">
                    <div class="col-md-6">
                      <b-form-group label="Created at" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Date" size="lg" :value="CATEGORY_DETAIL.created_at"></b-form-input>
                      </b-form-group>
                    </div>
                    <div class="col-md-3">
                      <b-form-group label="Updated at" label-for="input11">
                        <b-form-input type="text" id="input11" placeholder="Date" size="lg" :value="CATEGORY_DETAIL.updated_at"></b-form-input>
                      </b-form-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'category-detail',
  data () {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters([
      'CATEGORY_DETAIL'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CATEGORY_DETAIL'
    ])
  },
  mounted () {
    this.GET_CATEGORY_DETAIL()
  }
}
</script>

<style>

</style>
