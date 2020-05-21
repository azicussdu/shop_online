<template>
  <div class="order-detail">
    <div class="order-detail__item order-detail__item--heading">
      <div class="order-detail__image">Изображение</div>
      <div class="order-detail__name">Наименование</div>
      <div class="order-detail__alias">Alias</div>
      <div class="order-detail__price">Цена</div>
      <div class="order-detail__pieces">Кол-во</div>
    </div>
    <div class="order-detail__item">
      <div class="order-detail__image">
        <img src="https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/1/b/1b9d0bbd7b39a95f30f81af9f9aa34562aabc0d5_13051321483294.jpg" alt="">
      </div>
      <div class="order-detail__name">HP Notebook</div>
      <div class="order-detail__alias">HP</div>
      <div class="order-detail__price">45788</div>
      <div class="order-detail__pieces">5200</div>
    </div>

    <div class="order-detail__item">
      <div class="order-detail__image">
        <img src="https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/6/7/67014_0sd.jpg" alt="">
      </div>
      <div class="order-detail__name">HP Notebook</div>
      <div class="order-detail__alias">HP</div>
      <div class="order-detail__price">45788</div>
      <div class="order-detail__pieces">5200</div>
    </div>
    <div class="order-detail__item">
      <div class="order-detail__image">
        <img src="https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/2/8/28555_1.jpg" alt="">
      </div>
      <div class="order-detail__name">HP Notebook</div>
      <div class="order-detail__alias">HP</div>
      <div class="order-detail__price">45788</div>
      <div class="order-detail__pieces">5200</div>
    </div>
    <div class="order-detail__item order-detail__item--last">
      <div class="order-detail__offset">Итог</div>
      <div class="order-detail__price">45788</div>
      <div class="order-detail__pieces">5200</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'profile-orders-detail'
}
</script>

<style scoped lang="scss">
  .order-detail{
    box-sizing: border-box;
    &__item{
      padding:0 10px;
      border:1px solid rgba(0,0,0,.1);
      display: flex;
      img{
        display: block;
        max-width: 70px;
        margin:0 auto;
        max-height: 70px;
      }
      >div{
        width: 20%;
        border-right: 1px solid rgba(0,0,0,.1);
        text-align: center;
        padding: 5px 0;
        &:last-child{
          border-right: 0;
        }
      }
      &--heading{
        background-color: lighten(#e9ecef,1%);;
      }
      &--last{
        color:#000;
        font-weight: 700;
        div{
          width: 20%;
          &:first-child{
            width: 60%;
          }
        }
      }
    }
  }
</style>
