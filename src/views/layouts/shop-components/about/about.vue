<template>
    <section class="about">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <app-breadcrumbs :items="items"></app-breadcrumbs>
            </div>
              <div class="col-md-6">
                <img src="../../../../assets/images/about-image.jpg" height="700" class = "w-100" alt="img">
              </div>
              <div class="col-md-6" style = "position:relative">
                <div class="smartdos">
                  <div class="smartdos__header">
                      <h2 class="smartdos__subtitle">
                        Кто такие
                      </h2>
                      <h1 class="smartdos__title">
                        Smartdos
                      </h1>
                  </div>
                  <div class="smartdos__description">
                      <h4 class="smartdos__heading">
                        Описание
                      </h4>
                      <p class="smartdos__text">
                        Мы даем возможность предприятиям трансформировать способы сбыта, продажи и
                        работы, а также повышать свою эффективность. Мы предоставляем технологическую
                        инфраструктуру и маркетинговый охват, чтобы помочь торговцам, брендам и другим
                        предприятиям использовать возможности новых технологий для взаимодействия со своими
                        пользователями и клиентами и более эффективной работы.
                      </p>
                  </div>
                  <div class="smartdos__address">
                      <div class="smartdos__heading">
                        Адрес
                      </div>
                    <div class="smartdos__text">
                      Манаса 14а, уг. ул. Жандосова
                    </div>
                  </div>
                </div>
              </div>
          </div>
           <div class="statistics">
             <div class="row">
               <div class="col-12">
                 <h3 class="statistics__heading">
                   Наши товары
                 </h3>
               </div>
               <div class="col-lg-6">
                    <div class="statistics__item">
                      <div class="statistics__wrapper">
                        <div class="statistics__progress statistics__progress--1" style = "width:90%">
                            Смартфоны
                        </div>
                      </div>
                      <div class="statistics__circle">
                        <div class="statictics__index">
                          90%
                        </div>
                      </div>
                    </div>
                 <div class="statistics__item">
                   <div class="statistics__wrapper">
                     <div class="statistics__progress statistics__progress--2" style = "width:80%">
                       Чехлы для телефонов
                     </div>
                   </div>
                   <div class="statistics__circle">
                     <div class="statictics__index">
                       80%
                     </div>
                   </div>
                 </div>
                 <div class="statistics__item">
                   <div class="statistics__wrapper">
                     <div class="statistics__progress statistics__progress--3" style = "width:95%">
                       Бытовая техника
                     </div>
                   </div>
                   <div class="statistics__circle">
                     <div class="statictics__index">
                       90%
                     </div>
                   </div>
                 </div>
                 <div class="statistics__item">
                   <div class="statistics__wrapper">
                     <div class="statistics__progress statistics__progress--4" style = "width:75%">
                       Обувь
                     </div>
                   </div>
                   <div class="statistics__circle">
                     <div class="statictics__index">
                       75%
                     </div>
                   </div>
                 </div>
               </div>
               <div class="col-lg-6">
                 <div class="statistics__item">
                   <div class="statistics__wrapper">
                     <div class="statistics__progress statistics__progress--1" style = "width:90%">
                       Мужская одежда
                     </div>
                   </div>
                   <div class="statistics__circle">
                     <div class="statictics__index">
                       90%
                     </div>
                   </div>
                 </div>
                 <div class="statistics__item">
                   <div class="statistics__wrapper">
                     <div class="statistics__progress statistics__progress--2" style = "width:80%">
                       Косметика
                     </div>
                   </div>
                   <div class="statistics__circle">
                     <div class="statictics__index">
                       80%
                     </div>
                   </div>
                 </div>
                 <div class="statistics__item">
                   <div class="statistics__wrapper">
                     <div class="statistics__progress statistics__progress--3" style = "width:95%">
                       Часы
                     </div>
                   </div>
                   <div class="statistics__circle">
                     <div class="statictics__index">
                       90%
                     </div>
                   </div>
                 </div>
                 <div class="statistics__item">
                   <div class="statistics__wrapper">
                     <div class="statistics__progress statistics__progress--4" style = "width:75%">
                       Автотовары
                     </div>
                   </div>
                   <div class="statistics__circle">
                     <div class="statictics__index">
                       75%
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
export default {
  name: 'about',
  data () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'О нас',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  components: {
    appBreadcrumbs
  }
}
</script>

<style scoped>
  .about{
    margin-bottom: 3em;
  }
  .smartdos{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left: -70px;
    width: 595px;
    height: 590px;
    padding: 65px 50px;
    background-color: #f5f5f5;
  }
  .smartdos__subtitle{
    font-size: 3.8em;
    color:#666;
  }
  .smartdos__title{
    color:#0B88EE;
    font-size: 6em;
    font-weight: 700;
    text-align: center;
  }
  .smartdos__heading{
    margin-bottom: 15px;
    color:#000;
    font-weight: 600;
    font-size: .9em;
    border-bottom: 1px dashed rgba(0,0,0,.1);
  }
  .smartdos__text{
    line-height: 24px;
    font-size: 14px;
    color:#7e7e7e;
  }
  .statistics__heading{
    color:#454545;
    font-size: 1.1em;
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: .4em;
    border-bottom: 1px solid rgba(0,0,0,.1);
    position: relative;
  }
  .statistics__heading::after{
    content:'';
    width: 180px;
    height: 2.4px;
    position: absolute;
    top:92%;
    left: 0;
    background-color: #0B88EE;
    display: block;
  }
  .statistics__wrapper{
    width: 100%;
    background-color: #f2f2f2;
    height: 30px;
  }
  .statistics__item{
    position: relative;
    margin:0 0 3em;
  }
  .statistics__progress{
    box-sizing: border-box;
    padding:2.5px 60px;
    width: 0;
    display: block;
    text-align: left;
    background-color: #0B88EE;
    height: inherit;
    color:#fff;
    font-weight: 400;
  }
  .statistics__progress--1{
    animation-name: increase1;
    animation-duration: 3s;
  }
  .statistics__progress--2{
    animation-name: increase2;
    animation-duration: 3s;
  }
  .statistics__progress--3{
    animation-name: increase3;
    animation-duration: 3s;
  }
  .statistics__progress--4{
    animation-name: increase4;
    animation-duration: 3s;
  }
  .statistics__circle{
    position: absolute;
    top:13.5px;
    left: -5px;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: #ffe11b;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1;
  }
  .statictics__index{
    font-size:.9em;
    text-align: center;
  }
  @keyframes increase1 {
    0% {width:0;}
    100% {width:90%}
  }
  @keyframes increase2 {
    0% {width:0;}
    100% {width:80%}
  }
  @keyframes increase3 {
    0% {width:0;}
    100% {width:95%}
  }
  @keyframes increase4 {
    0% {width:0;}
    100% {width:75%}
  }
</style>
