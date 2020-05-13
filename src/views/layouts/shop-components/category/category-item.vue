<template>
  <router-link :to="category_data.categories.length>0 ? `/categories/${category_data.id}` : `/products/category/${category_data.id}`">
    <div>
      <div class="category-card__img">
        <img :src="category_data.image" alt="img">
      </div>
      <div class="category-card__text">{{category_data.name}}</div>
    </div>
  </router-link>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'category-item',
  components: {},
  computed: {},
  methods: {
    ...mapActions([
      'GET_CATEGORY_DETAIL'
    ])
  },
  props: {
    category_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    $route () {
      this.GET_CATEGORY_DETAIL()
    }
  }
}
</script>

<style>

</style>
