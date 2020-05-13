<template>
    <section class="payment">
      <div class="container">
        <div class="row">
          <div class="col-12 pb-0">
            <app-breadcrumbs :items = "items"></app-breadcrumbs>
          </div>
          <div class="col-12 pt-0">
            <div class="payment__heading">
              <h3 class="payment__title">Защита покупателя</h3>
              <div class="payment__text">
                  Вы получите деньги обратно, если полученный вами товар не соответствует
                  описанию или не был доставлен в течение периода защиты покупателя. Вы получите
                  возврат в течение 15 дней после рассмотрения вашей заявки.</div>
            </div>
            <div class="information">
              <h4 class="information__heading">Гарантия возврата</h4>
              <div class="information__text">
                    Вы получите деньги обратно, если полученный вами товар не соответствует описанию или не
                    был доставлен в течение периода защиты покупателя. Вы получите возврат в течение 15 дней
                    после рассмотрения вашей заявки.
              </div>
              <div class="content">
                <div class="content__item">
                  <div class="content__heading">
                            1. Свяжитесь с продавцом
                  </div>
                  <div class="content__text">
                          Зайдите в историю заказов и выберите товар. Обсудите проблему с продавцом и попытайтесь найти решение.
                  </div>
                </div>
                <div class="content__item">
                  <div class="content__heading">
                        2. Подайте заявку на возврат
                  </div>
                  <div class="content__text">
                        Если вы не можете прийти к соглашению с продавцом, просто подайте заявку на возврат, открыв спор на
                        странице заказа. Сделайте это в течение 15 дней с момента получения заказа.
                  </div>
                </div>
                <div class="content__item">
                  <div class="content__heading">
                        3. Получите деньги в течение 15 дней
                  </div>
                  <div class="content__text">
                        Большинство продавцов вернут ваши деньги через 15 дней. Если этого не произошло,
                        свяжитесь с AliExpress со страницы деталей заказа, чтобы обострить спор.
                  </div>
                </div>
              </div>
            </div>
            <div class="information information--spaceTop">
              <h4 class="information__heading">Местный возврат</h4>
              <div class="information__text">
                Вы найдётё значок «Местный возврат» на странице c информацией о товаре,
                если продавец предоставляет данную услугу. В течение 15 дней от даты получения заказа вы можете
                решить, хотите ли вы оставить товар или вернуть его без объяснений. Вы сможете сделать это быстро и просто:
              </div>
              <div class="content">
                <div class="content__item">
                  <div class="content__heading">
                    1. Просто
                  </div>
                  <div class="content__text">

                    Вы можете вернуть товары без объяснений на один из наших местных складов, если они не были использованы и
                    находятся в своем первоначальном состоянии, а также сохранили оригинальную упаковку, этикетку и т. д.
                  </div>
                </div>
                <div class="content__item">
                  <div class="content__heading">
                    2. Быстро
                  </div>
                  <div class="content__text">
                    Вы получите денежный возврат на ваш счёт в течение 7 дней
                  </div>
                </div>
                <div class="content__item">
                  <div class="content__heading">
                    3. Стоимость доставки при возврате
                  </div>
                  <div class="content__text">
                    Покупатель несёт расходы по доставке на указанный адрес местного склада.
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
  name: 'delivery',
  data: function () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'Оплата и доставка',
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
  .payment{
    margin-bottom: 5em;
  }
  .payment__title{
    font-size: 2em;
    color:#454545;
    font-weight: 700;
    line-height: 1.7;
    margin-bottom: .3em;
  }
  .payment__text{
    font-size: .9em;
    color:rgba(0,0,0,.7);
    margin-bottom:1em;
  }
  .information{
    background-color: #f7f7f7;
    padding: 1.6em 2.2em 2.5em;
    color:rgba(0,0,0,.6);
  }
  .information--spaceTop{
    margin-top:3em;
  }
  .information__heading{
    color:#454545;
    font-weight: 700;
    font-size: 1.3em;
    line-height: 1.3;
    margin-bottom: 1.1em;
  }
  .information__text{
    margin-bottom: 1em;
    font-size: .9em;
  }
  .content{
    box-sizing: border-box;
  }
  .content__item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    border-top:1px solid rgba(0,0,0,.1)
  }
  .content__heading{
    flex:1;
    padding: 1.5em 0;
  }
  .content__text{
    flex:1;
    padding: 1.5em 1em;
    text-align: justify;
  }
</style>
