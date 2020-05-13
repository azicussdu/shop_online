<template>
  <div>
    <div class="products__inner">
      <div class="products__content">
        <ul class="list">
          <li class="list-item">
            <div class="list-item__img">
              <img :src="item_data.image" alt="">
            </div>
            <div class="list-item__text">
              {{item_data.name}}
            </div>
          </li>
          <li class="list-item">
            <div class="v-cart-item__quantity">
              <p>Qty:</p>
              <span class="quantity__tools">
                <span class="quantity__btn" @click="DECREMENT(item_data.id)">-</span>
                  {{item_data.quantity}}
                <span class="quantity__btn" @click="INCREMENT(item_data.id)">+</span>
              </span>
            </div>
          </li>
          <li class="list-item">
            <span><font-awesome-icon class = "list-item__icon-1" :icon = "['far','eye']"></font-awesome-icon></span>
            <span @click="DELETE_ITEM_FROM_CART(item_data.id)"><font-awesome-icon class = "list-item__icon-2" :icon = "['far','trash-alt']"/></span>
          </li>
          <li class="list-item">{{item_data.price * item_data.quantity}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'cart-item',
  props: {
    item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    this.$set(this.item_data, 'quantity', 1)
  },
  methods: {
    ...mapActions([
      'INCREMENT',
      'DECREMENT',
      'DELETE_ITEM_FROM_CART'
    ])
  }
}
</script>

<style scoped>
  .cart{
    padding-bottom: 80px;
  }
  .title{
    font-size: 25px;
    font-weight: 700;
    color:#000;
    word-spacing: 2px;
    padding-bottom: 10px;
  }
  .products__titles .list-item{
    text-align: left;
  }
  .products__item{
    border:1px solid rgba(0,0,0,.1);
    border-radius:5px;
    padding:15px 24px;
    min-height: 180px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,.2);
    margin-bottom:15px;
  }
  .products__content{
    padding: 15px 0 5px;
    min-height: 100px;
  }
  .products__item:last-child{
    border-bottom: none;
  }
  .list{
    display: flex;
    list-style: none;
    align-items: center;
  }
  .list-item{
    width: 20%;
    font-weight: 500;
    font-size: 15px;
    color:#a7a7a7;
    text-transform: uppercase;
    padding:0 20px;
    text-align: center;
    line-height: 1.2;
  }
  .list-item:first-child{
    width: 40%;
    position: relative;
    text-align: left;
  }
  .list-item:last-child{
    text-align: left;
  }
  .list-item__img{
    position:absolute;
    left:20px;
    top:0;
  }
  .list-item__img img{
    max-width: 60px;
    height: auto;
  }
  .list-item__text{
    padding: 0 0 0 90px;
    font-size: 11px;
  }
  .list-item__icon-1{
    color:darkblue;
    margin-right:10px;
    cursor: pointer;
  }
  .list-item__icon-2{
    color:orangered;
    margin-right: 15px;
    cursor: pointer;
  }
  .sumaries{
    padding:15px 24px;
    border:1px solid rgba(0,0,0,.1);
    border-radius:5px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,.3);
    min-height: 180px;
  }
  .sumaries__inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sumaries__text{
    color:#000;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .sumaries__count,.sumaries__price{
    color:#000;
    font-size: 15px;
  }
  .empty{
    padding:15px 24px;
    border:1px solid rgba(0,0,0,.1);
    border-radius:5px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,.3);
    min-height: 180px;
    text-align: center;
    font-size: 15px;
    font-style: italic;
  }
  .quantity__btn {
    cursor: pointer;
  }
  .quantity__tools {
    user-select: none;
  }
</style>
