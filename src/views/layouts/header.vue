<template>
  <header>
    <div class="header-wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-sm-6 order-1 order-lg-1">
            <div class="logo d-flex justify-content-center">
              <img src="../../assets/images/logo-white.png" alt="Logo">
            </div>
          </div>
          <div class= "col-lg-6 col-12 order-3 order-lg-2">
            <div class="header-search">
              <input type="search" class = "header-search-input" placeholder="Поиск...">
              <div class="search-btn">
                <button><font-awesome-icon icon="search"></font-awesome-icon></button>
              </div>
            </div>
          </div>
          <div class = "col-lg-3 col-sm-6 order-2 order-lg-3">
              <div class="tools">
<!--                <div class="likedProducts">-->
<!--                  <font-awesome-icon icon = "heart"></font-awesome-icon>-->
<!--                </div>-->
<!--                <router-link :to="`/sign`" style="text-decoration: none;">-->
<!--                  <div class="likedProducts">-->
<!--                    <font-awesome-icon icon = "user"></font-awesome-icon>-->
<!--                  </div>-->
<!--                </router-link>-->
                <div class="profile pr-4" @click = "toggle" data-toggle = "dropdownProfile">
                  <font-awesome-icon icon="user" class = "mr-2" style = "font-size:1.3em;"></font-awesome-icon>
                  <span class="myProfile">Мой аккаунт</span>
                  <font-awesome-icon icon="chevron-down" class = "ml-1" style = "font-size:.7em;"></font-awesome-icon>
                  <div class="dropdown-profile">
                    <ul class = "dropdown-profile-menu" id= "dropdownProfile">
                      <div v-if="!isAuthenticated">
                        <li class = "dropdown-profile-item">
                          <router-link :to="`/login`" tag="a">
                            Вход
                          </router-link>
                        </li>
                        <li class = "dropdown-profile-item last">
                          <router-link :to="`/register`" tag="a">
                            Регистрация
                          </router-link>
                        </li>
                      </div>
                      <div v-else>
                        <li class = "dropdown-profile-item">
                          <router-link :to="`/profile`" tag="a">
                            Профиль
                          </router-link>
                        </li>
                        <li class = "dropdown-profile-item last" @click="LOG_OUT">
                          <a href="javascript:void(0)">
                            Выйти
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div class="basket">
                  <div class="basket__inner" @click = "toggle" data-toggle = "basketDropdown">
                    <font-awesome-icon icon = "shopping-cart"></font-awesome-icon>
                    <div class="cart-product-count">
                      <span>{{CART.length}}</span>
                    </div>
                  </div>
                  <div class="basket-dropdown" id = "basketDropdown">
                    <div class="basket-dropdown__header">
                      <div class="container">
                        <div class="row">
                          <div class="col-6 py-0">
                            <div class="basket-dropdown__title text-left">Корзина</div>
                          </div>
                          <div class="col-6 py-0">
                            <div class="basket-dropdown__close text-right">
                              <span @click = "hideCart" ><font-awesome-icon icon = "times" class = "basket-dropdown__close-icon" /></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basket-dropdown__content" v-if = "CART.length">
                      <div class="container">
                        <div class="row">
                          <div class="col-12 py-0">
                            <div class="basket-dropdown__item" v-for="(item, index) in CART" :key="index">
                              <div class="basket-dropdown__item-inner">
                                <div class="basket-dropdown__img">
                                  <img :src="item.image" alt="">
                                </div>
                                <p class="basket-dropdown__text">
                                  {{item.alias}}
                                </p>
                                <p class="basket-dropdown__price">{{item.price}}</p>
                              </div>
                              <div class="basket-tools">
                                <div class="basket-tools__actions">
                                  <span><font-awesome-icon class = "basket-tools__icon-1" :icon = "['far','eye']"></font-awesome-icon></span>
                                  <span @click="DELETE_ITEM_FROM_CART(item.id)"><font-awesome-icon class = "basket-tools__icon-2" :icon = "['far','trash-alt']"/></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else class = "basket-dropdown__empty">У вас нет товаров в корзине</div>
                    <div class="basket-dropdown__footer">
                      <div class="basket-dropdown__total">
                        <span>{{CART.length}} товара на сумму</span>
                        <span>{{cartTotal}}</span>
                      </div>
                      <div class="basket-dropdown__btn">
                        <span  @click = "hideCart"><router-link tag = "button" :to = "{name:'cart'}" class = "btn btn-success w-100">Перейти в корзину</router-link></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav-wrapper">
      <div class="container p-0">
        <div class="row">
          <div class="col-12 p-0">
            <nav>
              <ul class="header-nav">
                <li class = "nav-item">
                  <router-link :to="{name: 'main'}" tag = "a" exact>
                    Главная страница
                  </router-link>
                </li>
                <li class = "nav-item">
                  <router-link :to="{name:'payment'}" tag = "a">
                     Оплата и доставка
                  </router-link>
                </li>
                <li class = "nav-item">
                  <router-link :to="{name:'about'}" tag = "a">О нас</router-link>
                </li>
                <li class = "nav-item"><router-link :to = "{name:'contact'}" tag="a">Контакты</router-link></li>
                <li class = "nav-item" v-if="(user_role === 'admin') && isAuthenticated">
                  <a href="#">
                    <router-link :to="{name: 'admin'}">
                     Admin Panel
                    </router-link>
                  </a>
                </li>
                <li class = "nav-item" v-if="(user_role === 'moderator')">
                  <a href="#">
                    &lt;!&ndash;<router-link :to="{name: 'my_products'}">&ndash;&gt;
                    My Products
                    &lt;!&ndash;</router-link>&ndash;&gt;
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data: function () {
    return {
      user_role: localStorage.getItem('user_role'),
      isOpen: false
    }
  },
  directives: {
    'font': {
      bind (el, binding) {
        if (binding.value.color) el.style.color = binding.value.color
        if (binding.value.fontSize) el.style.fontSize = binding.value.fontSize
        if (binding.value.marginRight) el.style.marginRight = binding.value.marginRight
        if (binding.value.marginLeft) el.style.marginLeft = binding.value.marginLeft
      }
    }
  },
  methods: {
    ...mapActions([
      'LOG_OUT',
      'DELETE_ITEM_FROM_CART'
    ]),
    changeCount (e) {
    },
    toggle (e) {
      let dropdownId = e.currentTarget.dataset.toggle
      let dropdown = document.getElementById(dropdownId)
      if (dropdown.classList.contains('hide')) dropdown.classList.remove('hide')
      if (dropdown) dropdown.classList.toggle('show')
    },
    hideCart (e) {
      let hideElement = document.querySelector('#basketDropdown')
      if (!hideElement.classList.contains('hide')) hideElement.classList.add('hide')
      if (hideElement.classList.contains('show')) hideElement.classList.remove('show')
    }
  },
  computed: {
    ...mapGetters([
      'CART', 'isAuthenticated'
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
  }
}
</script>

<style lang = "scss">
   $yellow:#FFE11B;
   $blue: #0B88EE;
   $white:#fff;
  .header-wrapper{
    display: grid;
    align-items: center;
    background-color: $blue;
    min-height:140px;
  }
  .header-search {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr;
      position: relative;
    .header-search-input {
      grid-column: 2/ 12;
      min-height: 42px;
      background-color: #fff;
      width: 100%;
      border-radius: .5em;
      padding: .4em 1.5em;
      font-size: .8em;
      border:1px solid transparent;
      &:focus{
        border:1px solid rgba(0,0,139,.5);
      }
    }
    .search-btn {
      position: absolute;
      right:9%;
      top:2.2px;
      background-color: $yellow;
      padding: .4em .7em;
      box-sizing: border-box;
      border-radius: .5em;
      transition: .3s all ease-in;
      &:hover{
        background-color: $blue;
      }
    }
  }
   .tools{
     display: flex;
     justify-content: center;
     align-items: center;
     .profile{
       color:#fff;
       font-weight: bold;
       font-size:.9em;
       cursor:pointer;
       position: relative;
       .dropdown-profile-menu{
         position: absolute;
         top: 138%;
         left:0;
         right: auto;
         background: #fff;
         border-bottom: 2px solid #0B88EE;
         padding: 0 20px;
         min-width: 150px;
         text-align: left;
         box-shadow: 0 2px 13.95px 1.05px rgba(0,0,0,.05);
         z-index: 99;
         display: none;
         .dropdown-profile-item{
           border-bottom: 1px solid rgba(0,0,0,.2);
         }
         .dropdown-profile-item.last{
           border-bottom: none;
         }
         .dropdown-profile-item a{
           display: block;
           width: 100%;
           clear: both;
           font-weight: 400;
           white-space: nowrap;
           background: 0 0;
           border: 0;
           padding: 10px 0;
           color: #7e7e7e;
           line-height: 25px;
           font-size: 13px;
           text-decoration: none;
           transition: all .4s ease-in-out 0s;
           &:hover{
             color:$blue;
           }
         }
       }
       .dropdown-profile-menu.show{
         transition: .4s all;
         display: block;
       }
     }
     .cart-product-count{
       position: absolute;
       top:-5px;
       right: -5px;
       padding:.1em .5em;
       min-width: 20px;
       min-height: 5px;
       line-height: 1.5;
       font-weight: 500;
       font-size: .8em;
       border-radius: 1.5em;
       background-color: $yellow;
     }
   }
   .header-nav-wrapper{
     box-shadow: 0 0 7px 0 #ccc;
     .header-nav{
       display: flex;
       list-style: none;
       text-align: center;
       margin-bottom:0;
       .nav-item{
         flex:1;
         height: 40px;
       }
       a{
         display: block;
         padding: .5em 0;
         color:rgba(0,0,0,.8);
         text-decoration: none;
         &:hover{
           border-bottom: 2px solid #f5c002;
           min-height: 38px;
           background-color: #f6f8fd;
         }
       }
       a.active{
         border-bottom: 2px solid #f5c002;
       }
     }
   }
   .basket{
     position: relative;
   }
   .basket__inner{
     padding: .8em;
     box-sizing: border-box;
     border-radius: 1.5em;
     border:1px solid rgba(0,0,0,.3);
     cursor:pointer;
     width: 48px;
     height: 48px;
     background-color:#fff;
     margin-left: .2em;
     transition: .5s background-color linear;
   }
   .basket__inner:hover{
     border:1px solid #fff;
     background-color: $blue;
   }
   .basket__inner:hover .basket{
     background-color: $blue;
     border:1px solid rgba(0,0,0,.1);

   }
  .basket-dropdown{
    position: absolute;
    left:-130px;
    width: 320px;
    height:auto;
    background-color: #fff;
    border:1px solid rgba(0,0,0,.1);
    border-radius: 3px;
    transition: .5s all linear;
    top:-1000px;
    z-index: 1;
  }
  .basket-dropdown::after{
    content:'';
    position: absolute;
    bottom: 100%;
    left:50%;
    transform: translateX(-50%);
    border-width: 9px;
    border-style: solid;
    border-color:transparent transparent white transparent;
  }
  .basket-dropdown.show{
    top:60px;
  }
   .basket-dropdown.hide{
     top:-1000px;
   }
  .basket-dropdown__header{
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .basket-dropdown__title{
    font-size: 13px;
    font-weight: 600;
    color:rgba(0,0,0,.6)
  }
  .basket-dropdown__close-icon{
    font-weight:200;
    font-size: 16px;
    cursor: pointer;
  }
  .basket-dropdown__content{
    max-height: 290px;
    overflow-y: scroll;
  }
  .basket-dropdown__item{
    box-sizing: border-box;
    padding: 10px 0 5px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .basket-dropdown__item-inner{
    display: flex;
  }
  .basket-dropdown__img{
    width: 20%;
  }
  .basket-dropdown__img img{
    max-width: 60px;
    height: auto;
  }
  .basket-dropdown__text{
    text-align: left;
    font-size: 12px;
    line-height: 1.2;
    overflow: hidden;
    padding:0 12px 0 18px;
    box-sizing: border-box;
    width: 50%;
  }
  .basket-dropdown__price{
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    width: 30%;
    padding:0 12px;
  }
  .basket-dropdown__empty{
    padding: 12px;
    font-size: 11px;
    background-color: #f4f4f4;
  }
  .basket-tools{
    display: flex;
    padding: 5px 0;
  }
  .basket-tools__count{
    width:50%;
    padding: 0 25px;
  }
  .basket-tools__count input {
    width: 40px;
  }
  .basket-tools__actions{
    width: 50%;
    text-align: right;
    padding:0 25px;
  }
  .basket-tools__icon-1{
    margin-right: 5px;
    color:darkblue;
    cursor: pointer;
  }
  .basket-tools__icon-2{
    color:orangered;
    cursor: pointer;
  }
  .basket-dropdown__total{
    display: flex;
    padding: 10px 30px 12px 12px;
    font-size: 12px;
  }
  .basket-dropdown__total span{
    display:block;
    width: 50%;
  }
  .basket-dropdown__total span:last-child{
    font-weight: 700;
    text-align: right;
  }
  .basket-dropdown__btn{
    padding:7px 12px 12px;
  }
</style>
