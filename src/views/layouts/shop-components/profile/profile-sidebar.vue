<template>
  <nav class="shop-sidebar">
      <ul class="shop-sidebar__list">
        <router-link tag = "li" :to = "{name:'profile-main'}" class="shop-sidebar__item">
          <font-awesome-icon class = "shop-sidebar__icon" :icon = "['fas','home']"></font-awesome-icon>
          <a href = "#"  class="shop-sidebar__link">Главная страница</a>
        </router-link>

        <router-link tag = "li" class="shop-sidebar__item" :to = "{name:'profile-settings'}">
          <font-awesome-icon class = "shop-sidebar__icon" :icon = "['far','user']"></font-awesome-icon>
          <a href = "#" class="shop-sidebar__link">Личные данные</a>
        </router-link>

        <li class="shop-sidebar__item" @click = "toCart">
          <font-awesome-icon  class = "shop-sidebar__icon"  :icon = "['fas','shopping-cart']"></font-awesome-icon>
          <a href="#" class="shop-sidebar__link">Текущая корзина</a>
        </li>

        <router-link tag = "li" :to = "{name:'profile-orders'}" class="shop-sidebar__item">
          <font-awesome-icon  class = "shop-sidebar__icon"  :icon = "['fas','list-ul']"></font-awesome-icon>
          <a href="#" class="shop-sidebar__link">Все заказы</a>
        </router-link>

        <router-link tag = "li" to = "" class="shop-sidebar__item">
          <font-awesome-icon  class = "shop-sidebar__icon"  :icon = "['far','heart']"></font-awesome-icon>
          <a href="#" class="shop-sidebar__link">Список желаний</a>
        </router-link>

        <router-link tag = "li" to = "" class="shop-sidebar__item">
          <font-awesome-icon  class = "shop-sidebar__icon"  :icon = "['fas','sign-out-alt']"></font-awesome-icon>
          <a href="#" class="shop-sidebar__link">Выйти</a>
        </router-link>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'profile-sidebar',
  methods: {
    toCart (e) {
      this.$router.push('/cart')
    }
  }

}
</script>

<style scoped>
  .shop-sidebar__list {
    list-style: none;
    padding: 3px;
  }
  .shop-sidebar__item{
    border-top:1px solid #f6f6f6;
    display: flex;
    align-items: center;
    padding: 10px 5px;
  }
  .shop-sidebar__item:hover,
  .shop-sidebar__item.active{
    box-shadow: 0 0 6px -2px rgba(102,102,102,.75);
    border-radius: 3px;
    transition: .1s all linear;
  }
  .shop-sidebar__item:hover  .shop-sidebar__link,
  .shop-sidebar__item:hover  .shop-sidebar__icon,
  .shop-sidebar__item.active .shop-sidebar__link,
  .shop-sidebar__item.active .shop-sidebar__icon
  {
    color: #d71a21;
    transition: .1s color linear;
  }
  .shop-sidebar__link{
    display:block;
    color:#666;
    font-size: 14px;
    margin-left: 15px;
    width: 90%;
    text-decoration: none;
    transition: .1s color linear;
  }

  .shop-sidebar__icon{
    width:10%;
    font-size: 16px;

  }

</style>
