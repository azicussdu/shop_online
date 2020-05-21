<template>
    <div class="order-list">
      <div class="order-list__item order-list__item--heading">
        <div class="order-list__id">ID</div>
        <div class="order-list__status">Статус</div>
        <div class="order-list__price">Цена</div>
        <div class="order-list__detail">
          Деталь
        </div>
      </div>
      <div class="order-list__item">
        <div class="order-list__id">1</div>
        <div class="order-list__status">Новый</div>
        <div class="order-list__price">1245</div>
        <router-link tag = "div" :to = "{name:'profile-orders-detail'}" class="order-list__detail">
          <font-awesome-icon :icon = "['far','eye']"></font-awesome-icon>
        </router-link>
      </div>
      <div class="order-list__item">
        <div class="order-list__id">2</div>
        <div class="order-list__status">Одобрен</div>
        <div class="order-list__price">5547</div>
        <div class="order-list__detail">
          <font-awesome-icon :icon = "['far','eye']"></font-awesome-icon>
        </div>
      </div>
      <div class="order-list__item">
        <div class="order-list__id">і</div>
        <div class="order-list__status">Отклонен</div>
        <div class="order-list__price">6854</div>
        <div class="order-list__detail">
          <font-awesome-icon :icon = "['far','eye']"></font-awesome-icon>
        </div>
      </div>
      <div class="order-list__item">
        <div class="order-list__id">4</div>
        <div class="order-list__status">Новый</div>
        <div class="order-list__price">1245</div>
        <div class="order-list__detail">
          <font-awesome-icon :icon = "['far','eye']"></font-awesome-icon>
        </div>
      </div>
      <div class="order-list__item">
        <div class="order-list__id">1</div>
        <div class="order-list__status">Новый</div>
        <div class="order-list__price">2478</div>
        <div class="order-list__detail">
          <font-awesome-icon :icon = "['far','eye']"></font-awesome-icon>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'profile-orders'
}
</script>

<style scoped lang="scss">
    .order-list{
      &__item{
        display: flex;
        padding:0;
        border:1px solid rgba(0,0,0,.1);
        overflow: auto;
        >div{
          width: 25%;
          border-right: 1px solid rgba(0,0,0,.1);
          padding: 5px 15px;
          &:last-child{
            border-right: 0;
          }
        }
        &--heading{
          background-color: lighten(#e9ecef,1%);
          >div{
            color:#000;
            &:hover{
              cursor: initial;
              color:inherit;
            }
          }
        }
      }
      &__detail{
        color:#0B88EE;
        cursor: pointer;
        transition: .2s color linear;
        &:hover{
          color:darken(#0B88EE,15%);
        }
      }
    }
</style>
