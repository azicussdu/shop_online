<template>
<section class="cart mx-5">
    <div class="container" data-app>
        <div class="data">
          <div class="row">
            <div class="col-lg-8">
              <div class="title">Корзина</div>
              <div class="products">
                <div class="products__item" v-if = "CART.length">
                  <div class="product__header">
                    <div class="products__titles">
                      <ul class="list">
                        <li class="list-item">Товар</li>
                        <li class="list-item">Кол - во</li>
                        <li class="list-item"></li>
                        <li class="list-item">Цена</li>
                      </ul>
                    </div>
                  </div>
                  <div v-for="(item, index) in CART" :key="index">
                    <cart-item
                      :item_data="item"
                    />
                  </div>
                </div>
                <div v-else class = "empty">
                  Корзина пуста
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="title">Оплата</div>
              <div class="sumaries">
                <div class="sumaries__inner py-1">
                  <div class="sumaries__text">Количество товаров:</div>
                  <div class="sumaries__count">{{CART.length}}</div>
                </div>
                <div class="sumaries__inner pt-2 pb-1">
                  <div class="sumaries__text">Сумма к оплате</div>
                  <div class="sumaries__price">{{cartTotal}}</div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <template v-slot:activator="{ on }">
                        <button class="btn btn-success w-100 mt-4" v-on="on">Оформить</button>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">Address Data</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="9">
                                <v-text-field label="Address*" type="text" required></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="3">
                                <v-text-field label="Zip code*" type="text" required></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="Full name*" type="text" required></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="Phone number*" type="text" required></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-select
                                  :items="cities"
                                  item-value="id"
                                  item-text="name"
                                  label="City*"
                                  required
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-container>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialog = false">Отменить</v-btn>
                          <v-btn color="blue darken-1" text @click="dialog = false">Отправить</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</section>
</template>

<script>
import appBreadcrumbs from '../breadcrumbs'
import {mapGetters} from 'vuex'
import cartItem from './cart-item'

export default {
  name: 'cart',
  data: function () {
    return {
      dialog: false,
      cities: [
        {
          id: 1,
          name: 'Нур-Султан'
        },
        {
          id: 2,
          name: 'Атбасар'
        },
        {
          id: 3,
          name: 'Акшимрау'
        },
        {
          id: 4,
          name: 'Алматы'
        },
        {
          id: 5,
          name: 'Атырау'
        }
      ],
      count: 0,
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'Корзина',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    cartTotal () {
      if (this.CART.length) {
        let total = []
        for (let item of this.CART) {
          total.push(item.price * item.quantity)
        }
        total = total.reduce(function (sum, el) {
          return sum + el
        })
        return total
      } else {
        return 0
      }
    }
  },
  components: {
    appBreadcrumbs,
    cartItem
  },
  created () {

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
</style>
