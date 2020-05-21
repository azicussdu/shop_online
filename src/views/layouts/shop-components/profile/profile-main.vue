<template>
  <div class="shop-main">
    <div class="shop-main__img">
      <img src="https://s0.rbk.ru/v6_top_pics/media/img/8/27/755749516543278.png" alt="">
    </div>
    <div class="questions" id = "questions">
      <h4 class="question__heading">Часто задаваемые вопросы (FAQ):</h4>
      <div class="questions__item">
        <div class="questions__header" data-slide-toggle>
          Как конвертировать Bonus в бонусы?
        </div>
        <p class="questions__content">
          Возможно, ваш доверенный номер в Halyk Bank, отличается от номера, указанного при регистрации в бонусной программе.
          Пройдите регистрацию повторно с указанием верного номера телефона.
        </p>
     </div>
      <div class="questions__item">
        <div class="questions__header" data-slide-toggle>
          Как конвертировать Bonus в бонусы?
        </div>
        <p class="questions__content">
          Возможно, ваш доверенный номер в Halyk Bank, отличается от номера, указанного при регистрации в бонусной программе.
          Пройдите регистрацию повторно с указанием верного номера телефона.
        </p>
      </div>
      <div class="questions__item">
        <div class="questions__header" data-slide-toggle>
          Как конвертировать Bonus в бонусы?
        </div>
        <p class="questions__content">
          Возможно, ваш доверенный номер в Halyk Bank, отличается от номера, указанного при регистрации в бонусной программе.
          Пройдите регистрацию повторно с указанием верного номера телефона.
        </p>
      </div>
      <div class="questions__item">
        <div class="questions__header" data-slide-toggle>
          Как конвертировать Bonus в бонусы?
        </div>
        <p class="questions__content">
          Возможно, ваш доверенный номер в Halyk Bank, отличается от номера, указанного при регистрации в бонусной программе.
          Пройдите регистрацию повторно с указанием верного номера телефона.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-main',
  mounted () {
    const elements = document.querySelectorAll('[data-slide-toggle]')
    for (let element of elements) {
      element.addEventListener('click', function () {
        if (element.nextElementSibling.classList.contains('show-active')) {
          element.nextElementSibling.classList.remove('show-active')
          animation('hide', 'hide-active', element)
        } else {
          element.nextElementSibling.classList.remove('hide-active')
          animation('show', 'show-active', element)
        }
      })
    }
    function myFunction (fn) {
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          fn()
        })
      })
    }
    function animation (class1, class2, element) {
      let content = element.nextElementSibling
      let handler = function () {
        if (class1 === 'hide')content.style.display = 'none'
        content.removeEventListener('transitionend', handler)
      }
      if (class1 === 'show') content.style.display = 'block'
      content.classList.add(class1)
      myFunction(function () {
        content.classList.add(class2)
        content.classList.remove(class1)
        if (!element.classList.contains('active')) element.classList.add('active')
        else element.classList.remove('active')
      })
      content.addEventListener('transitionend', handler)
    }
  }
}
</script>

<style scoped>

  .shop-main__img img{
    max-width: 100%;
    height: auto;
  }

  .question__heading{
    font-size: 21px;
    color:#242424;
    padding: 20px 0 10px;
    font-weight: 700;
    text-align: center;
  }
  .questions__item{
    margin-bottom: 8px;
  }
  .questions__header{
    padding: 10px 20px 10px 40px;
    border:1px solid #f1f1f1;
    position: relative;
    cursor: pointer;
    transition: .3s background-color linear;
  }
  .questions__header:hover{
    background-color: #fff5f5;
  }
  .questions__header::before {
    content: '';
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-15%);
    border-width: 5px;
    border-style: solid;
    border-color: red transparent transparent transparent;
    transition: .4s transform linear;
  }
  .questions__header.active::before{
    transform:translateY(-6px) rotate(-180deg) ;
  }
  .questions__content{
    padding: 12px 20px;
    border:1px solid #f1f1f1;
    border-top:0;
    display: none;
    overflow: hidden;
  }
  .questions__content.show{
    height: 0;
    opacity: 0;
    padding: 0 20px;
    margin-bottom:0;
  }
  .questions__content.show-active{
    transition: .4s all linear;
  }
  .questions__content.hide{

  }
  .questions__content.hide-active{
      transition:all .3s linear;
      opacity: 0;
      height: 0;
      margin:0;
      padding: 0 20px;
  }
  .questions__content.hide-to{
    max-height: 0;
  }
</style>
