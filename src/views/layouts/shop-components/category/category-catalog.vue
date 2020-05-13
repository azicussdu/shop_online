<template>
<!--  <div class="container">-->
<!--    <div class="row">-->
<!--      <category-item-->
<!--        v-for="(category,index) in CATEGORY_DETAIL.categories"-->
<!--        :key="index"-->
<!--        :category_data="category"-->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
  <section class="category">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="category-card">
            <div class="category-card__item"
                 v-for="(category,index) in CATEGORY_DETAIL.categories"
                 :key="index"
            >
              <category-item
                :key="index"
                :category_data="category"
              />
            </div>
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import categoryItem from './category-item'
export default {
  name: 'category-catalog',
  components: {
    categoryItem
  },
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
  watch: {
    $route () {
      this.GET_CATEGORY_DETAIL()
    }
  },
  mounted () {
    this.GET_CATEGORY_DETAIL()
  }
}
</script>

<style>

</style>
