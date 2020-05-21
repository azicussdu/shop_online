<template>
<!--  <div class="container">-->
<!--    <div class="row">-->
<!--      <div class="col-md-3">-->
<!--        <nav class="sidebar sidebar-offcanvas" id="sidebar">-->
<!--          <ul class="nav pt-0">-->
<!--            <li class="nav-item"-->
<!--                v-for="(filter,index) in GET_FILTER_GROUPS"-->
<!--                :key="index"-->
<!--            >-->
<!--              <span class="nav-link" v-b-toggle="`filter${index}`">-->
<!--                <span class="menu-title">-->
<!--                  {{filter.name}}-->
<!--                </span>-->
<!--              </span>-->
<!--              <b-collapse :id="`filter${index}`">-->
<!--                <ul class="nav flex-column sub-menu">-->
<!--                  <li class="nav-item"-->
<!--                      v-for="(filter_value, index) in filter.filter_values"-->
<!--                      :key="index"-->
<!--                  >-->
<!--                    <b-form-checkbox @change="addFilter(filter_value.id)">{{filter_value.value}}</b-form-checkbox>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </b-collapse>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </nav>-->
<!--      </div>-->
<!--      <div class="col-md-9">-->
<!--        <div class="row">-->
<!--          <product-item-->
<!--            v-for="(product,index) in CATEGORY_PRODUCTS"-->
<!--            :key="index"-->
<!--            :product_data="product"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <section class="product-catalog">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="product-filters">
              <div
                class="product-filters__item"
                v-for="(filter,index) in GET_FILTER_GROUPS"
                :key="index"
              >
                <div class="product-filters__title">{{filter.name}}</div>
                <ul class="product-filters__options">
                  <li v-for="(filter_value, index) in filter.filter_values"
                      :key="index"
                  >
                    <input  type="checkbox" @change="addFilter(filter_value.id)">
                    <label>{{filter_value.value}}</label>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <div class="col-lg-9">
            <div class="product-list">
              <div class="product-list__header">
                <div class="product-list__icons">
                  <span><font-awesome-icon icon="th" class="product-list__icons--1 active" /></span>
                </div>
                <div class="product-list__text">There Are {{CATEGORY_PRODUCTS.length}} Products</div>
                <div class="sorting">
                  <strong>Sort By:</strong>
                  <div class="sorting__main" data-toggle = "sortingDropdown">
                    <span>Relevance</span>
                  </div>
                  <div class="sorting__dropdown" id = "sortingDropdown">
                  </div>
                </div>
              </div>
              <div class="product-list__content">
                <product-item
                  v-for="(product,index) in CATEGORY_PRODUCTS"
                  :key="index"
                  :product_data="product"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productItem from './product-item'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'product-catalog',
  data () {
    return {
      filter_values: []
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORY_PRODUCTS',
      'GET_FILTER_GROUPS'
    ])
  },
  components: {
    productItem
  },
  methods: {
    ...mapActions([
      'GET_CATEGORY_PRODUCTS',
      'FILTER_GROUPS_REQUEST'
    ]),
    addFilter (id) {
      let index = this.filter_values.indexOf(id)
      if (index > -1) {
        this.filter_values.splice(index, 1)
      } else {
        this.filter_values.push(id)
      }
      this.filter_values = [...new Set(this.filter_values)]
      this.GET_CATEGORY_PRODUCTS(this.filter_values)
    }
  },
  mounted () {
    this.GET_CATEGORY_PRODUCTS()
    this.FILTER_GROUPS_REQUEST()
  },
  watch: {
    $route () {
      this.GET_CATEGORY_PRODUCTS()
      this.FILTER_GROUPS_REQUEST()
    }
  }
}
</script>

<style scoped>
  .product-catalog{
    margin-bottom: 50px;
  }
  .product-filters__item{
    border:1px solid rgba(0,0,0,.1);
    padding: 10px;
    margin-bottom: 10px;
  }
  .product-filters__title{
    color: #454545;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 20px;
  }
  .product-filters__options{
    list-style: none;
    padding: 0 25px 10px;
    margin-bottom:0;
  }

  .product-filters__options label {
    display: inline-block;
    box-sizing: border-box;
    padding-left: 5px;
    color:#7e7e7e;
  }
  .product-list__header{
    padding: 5px;
    border:.5px solid rgba(0,0,0,.1);
    display: flex;
    margin-bottom: 25px;
  }
  .product-list__icons{
    flex:1 1 0;
    text-align: left;
    box-sizing: border-box;
    padding: 5px;
  }
  .product-list__icons--1{
    margin-right: 7px;
    cursor: pointer;
    transition: .2s all linear;
  }
  .product-list__icons--1:hover,
  .product-list__icons--1.active
  {
    color:#0B88EE;
  }

  .product-list__text{
    flex:1 1 0;
    font-size: 15px;
    color:#7e7e7e;
    font-weight: 700;
    text-align: center;
    box-sizing: border-box;
    padding: 5px;
  }
  .sorting{
    flex:1 1 0;
    color:#7e7e7e;
    font-size: 15px;
    margin-right: 10px;
    text-align: right;
    box-sizing: border-box;
    padding: 5px;
  }
  .sorting__main{
    display: inline-block;
    padding: 0 11px 0 0 ;
    position: relative;
  }
  .sorting__main::after{
    content:'';
    position: absolute;
    left:100%;
    top:29%;
    display: block;
    border-top:1.5px solid rgba(0,0,0,.2);
    border-right:1.5px solid rgba(0,0,0,.2);
    width: 7px;
    height: 7px;
    transform: rotate(135deg);
    cursor: pointer;
  }
  .product-list__content{
    display: flex;
    flex-wrap: wrap;
  }

</style>
