<template>
    <section class="contact">
        <div class="container">
          <div class="row">
            <div class="col-12">
                <app-breadcrumbs :items = "items"></app-breadcrumbs>
            </div>
            <div class="col-lg-6">
              <h3 class = "mb-xl-4 text-lg-left text-center mb-md-3 display-5">Оставьте Ваш отзыв!</h3>
              <form>
                <div class="form-group">
                  <label for="name">Имя</label>
                  <input type="text" placeholder="Введите имя" class = "form-control" id = "name">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" placeholder="Введите email" class = "form-control" id = "email">
                </div>
                <div class="form-group">
                  <label for="message">Сообщение</label>
                  <textarea class = "form-control"  id="message" cols="30" rows="10" placeholder="Введите ваше сообщение"></textarea>
                </div>
                <div class="form-group">
                  <button class = "btn btn-primary bg-blue">Отправить</button>
                </div>
              </form>
            </div>
            <div class="col-lg-6">
                <div class="contact-information ml-lg-4">
                  <h3 class = "text-lg-left text-center mb-md-3 contact-information__heading">Свяжитесь с нами</h3>
                  <div class="contact-card mt-lg-4">
                    <span class = "circle-rounded">
                      <font-awesome-icon icon = "map-marker-alt"></font-awesome-icon>
                    </span>
                    <div class="contact-card-text">
                      МУИТ - Международный Университет Информационных Технологий
                      Манаса 14а, уг. ул. Жандосова
                    </div>
                  </div>
                  <div class="contact-card">
                    <span class = "circle-rounded">
                      <font-awesome-icon icon = "phone-volume"></font-awesome-icon>
                    </span>
                    <div class="contact-card-text">
                      <b>Номер:</b>
                      <br />
                      <a href="#" class = "contact-link">+7 (747) 123 4567</a>
                    </div>
                  </div>
                  <div class="contact-card">
                      <span class = "circle-rounded">
                        <font-awesome-icon icon="envelope-open-text"></font-awesome-icon>
                      </span>
                    <div class="contact-card-text">
                      <b>Email:</b>
                      <br />
                      <a href="#" class = "contact-link">info@smartdos.com</a>
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
  name: 'contact',
  data () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'Контакты',
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

<style>
  .form-control{
    border:1px solid rgba(0,0,0,.15);
  }
  .contact-information__heading{
    color:rgba(0,0,0,.7);
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
  }
  .contact-card{
    padding: 1.2em 1em;
    position: relative;
  }
  .contact-card + .contact-card {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .contact-card-text{
    padding-left: 60px;
    color:rgba(0,0,0,.7);
  }
  .circle-rounded{
    font-size: 27px;
    position: absolute;
    left: 0;
    top:15%;
    border: 1px solid #aaa;
    width: 60px;
    line-height: 2.1;
    text-align: center;
    height: 60px;
    border-radius: 100px;
  }
  .contact-link{
    color:inherit;
  }
  .contact-link:hover{
    text-decoration: none;
  }
  .contact{
    margin-bottom: 50px;
  }
</style>
