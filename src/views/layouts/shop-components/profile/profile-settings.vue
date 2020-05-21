<template>
    <div class="personal-info">
      <form class="personal-info__form">
        <h3 class="personal-info__title">Личные данные</h3>
        <input type="text" class = "personal-info__input" placeholder="Введите имя">
        <input type="text" class = "personal-info__input" placeholder="Введите email">
        <input type="text" class = "personal-info__input" placeholder="Введите пароль">
        <input type="text" class = "personal-info__input" placeholder="Подтвердите пароль">
        <button type = "button" class = "personal-info__btn">Изменить</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'profile-settings'
}
</script>

<style scoped lang="scss">
  .personal-info{
      &__form{
        border:1px solid rgba(0,0,0,.1);
        min-height: 60vh;
        border-radius: 20px;
        padding: 30px 20px;
        box-shadow: 0 0 4px rgba(0,0,0,.19);
        display: flex;
        flex-direction: column;
      }
      &__title{
        font-size: 18px;
        color:#000;
        text-align: center;
        margin-bottom: 25px;
        font-style: italic;
      }
      &__input{
        width: 80%;
        border:1px solid rgba(0,0,0,.1);
        border-radius: 10px;
        margin:0 auto 18px;
        padding: 5px 15px;
        outline: none;
        transition: .5s border linear;
        font-size: 14px;
        line-height: 2;
        box-shadow: 0 2px 4px rgba(0,0,0,.19);
        &:focus{
          border:1px solid lighten(#0B88EE,25%);
        }
        &::placeholder{
          color:rgba(0,0,0,.4);
        }
      }
      &__btn{
        width: 50%;
        margin:10px auto 0;
        color:#fff;
        background-color:#FF5C18;
        text-align: center;
        border-radius:15px;
        padding: 5px 0;
        box-shadow: 0 6px 1px darken(#FF5C18,13%);
        &:active{
          transform: translateY(4px);
          box-shadow: 0 2px 1px darken(#FF5C18,13%);
        }
      }
  }
</style>
