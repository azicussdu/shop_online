<template>
  <div class="product-item">
    <div class="product-item__img">
      <img :src="product_data.image" alt="img">
      <div class="product-item__buttons">
        <button class="product-item__button product-item__button--1">
        <span @click="ADD_ITEM_TO_CART(product_data)"><font-awesome-icon icon = "shopping-cart"></font-awesome-icon></span>
      </button>
        <button class="product-item__button product-item__button--2">
          <span><font-awesome-icon :icon = "['far','eye']"></font-awesome-icon></span>
        </button>
        <button class="product-item__button product-item__button--3">
          <span><font-awesome-icon :icon = "['far','heart']"></font-awesome-icon></span>
        </button>
      </div>
    </div>
    <div class="product-item__content">
      <div class="product-item__text">
        <h3>{{product_data.alias}}</h3>
      </div>
      <div class="product-item__price">$ {{product_data.price}}</div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'product-item',
  components: {},
  computed: {},
  methods: {
    ...mapActions([
      'ADD_ITEM_TO_CART'
    ])
  },
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style>
  .product-item{
    width: 33.333%;
    padding:15px 30px;
    cursor: pointer;
  }
  .product-item:hover .product-item__buttons{
    opacity: 1;
  }
  .product-item:hover .product-item__img img {
    opacity: .3;
  }
  .product-item:hover{
    box-shadow: 0 0 18px 1px rgba(0,0,0,.1);
  }
  .product-item__img{
    padding-bottom: 100%;
    position: relative;
    margin:15px 5px 0;
  }
  .product-item__img img{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    z-index: 2;
    opacity: 1;
    transition: .3s opacity linear;
  }
  .product-item__text h3{
    font-size: 15px;
    color:#454545;
    line-height: 1;
    margin-bottom: 15px;
  }
  .product-item__price{
    color:#0B88EE;
    font-size: 17px;
    font-weight: 700;
  }
  .product-item__buttons{
    position: absolute;
    top:50%;
    left:0;
    width: 100%;
    transform: translateY(-50%);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px;
    opacity: 0;
    transition: opacity .3s linear;
  }
  .product-item__button{
    display: inline-block;
    vertical-align: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #ededed;
    transition: .2s background-color linear;
    margin-right: 9px;
  }
  .product-item__button:last-child{
    margin-right:0;
  }
  .product-item__button:hover{
    background-color: #0B88EE;
  }
  .product-item__button:hover > span{
    color:#fff;
  }
</style>
