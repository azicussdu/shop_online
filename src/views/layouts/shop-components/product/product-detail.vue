<template>
    <section class="product-detail">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="gallery">
              <div class="main-images" id = "mainImg">
                <div class="main-images__item active">
                  <img src="http://demo.devitems.com/haltico-v3/haltico/images/product/lg/product-image-3.jpg" alt="img">
                </div>
                 <div class="main-images__item">
                   <img src="https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/e/fe66c6abe9b884dfb909c0c75171ff0a6cbff189_15278462107678.jpg" alt="img">
                 </div>
                <div class="main-images__item">
                  <img src="https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/6/2/62d517058c2ffc7ce6db909f0dcce672399ea453_15921640865822.jpg" alt="img">
                </div>
              </div>
              <div class="images" id = "images">
                <div class="images__item active" @click = "show(1)">
                  <img src="http://demo.devitems.com/haltico-v3/haltico/images/product/lg/product-image-3.jpg" alt="img">
                </div>
                <div class="images__item" @click = "show(2)">
                  <img src="https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/e/fe66c6abe9b884dfb909c0c75171ff0a6cbff189_15278462107678.jpg" alt="img">
                </div>
                <div class="images__item" @click = "show(3)">
                  <img src="https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/6/2/62d517058c2ffc7ce6db909f0dcce672399ea453_15921640865822.jpg" alt="img">
                </div>
              </div>
              </div>
            </div>
          <div class="col-md-7">
            <div class="product">
              <h3 class="product__title">SonicFuel Wireless Over-Ear Headphones</h3>
              <span class = "product__price">$34.11</span>
              <p class="product__text">
                The ATH-S700BT offers clear, full-bodied audio reproduction with Bluetooth®
                wireless operation. The headphones are equipped with a mic, and music and
                volume controls, allowing you to easily answer calls..
              </p>
              <div class="count">
                <div class="count__field">
                  <button class = "count__btn"><span>-</span></button>
                  <input type="text" class ="count__input" value = "1">
                  <button class = "count__btn"><span>+</span></button>
                  <button class = "count__add-btn">В корзину</button>
                </div>
              </div>
              <div class="type">
                <span class="type__title">Categories :</span>
                <ul class = "type__content">
                  <a href="#">Accessories</a>
                  <a href="#">Kids</a>
                  <a href="#">Woman</a>
                </ul>
              </div>
              <div class="type">
                <span class="type__title">Tags :</span>
                <ul class = "type__content">
                  <a href="#">Electronic</a>
                  <a href="#">Television</a>
                </ul>
              </div>
              <div class="type">
                <span class="type__title">Share :</span>
                <ul class = "type__content">
                  <a href="#" class = "type__icon" target = "_blank"><font-awesome-icon :icon = "['fab','facebook']"/></a>
                  <a href="#" class = "type__icon" target = "_blank"><font-awesome-icon :icon = "['fab','twitter']" /></a>
                  <a href="#" class = "type__icon" target = "_blank"><font-awesome-icon :icon = "['fab','google-plus']" /></a>
                  <a href="#" class = "type__icon" target = "_blank"><font-awesome-icon :icon = "['fab','instagram']" /></a>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="information">
              <div class="information__header">
                    <button class="information__btn information__btn--1 active">Description</button>
                    <button class="information__btn information__btn--2">More information</button>
                    <button class="information__btn information__btn--3">Reviews</button>
              </div>
              <div class="information__content">
                <div class="information__text information__text--1 active">
                  <p>
                    Use the Canon VIXIA GX10 Camcorder to capture UHD 4K video at 60 fps, recording
                    in MP4 to dual SD memory card slots. This camcorder packs several pro-style
                    features into its compact form, including Dual-Pixel Autofocus (DPAF). The
                    GX10's 1" 8.29MP CMOS sensor and dual DIGIC DV 6 image processors support Wide
                    DR Gamma with high sensitivity and low noise. Slow and fast-motion recording up
                    to 120 fps offers special looks for highlighting sports and other special
                    events. Smooth, steady shooting is assisted by the GX10's five-axis optical
                    image stabilization. For composing and viewing your footage, the VIXIA GX10
                    incorporates a flip-out 3.5" touchscreen LCD, and a 0.24" electronic
                    viewfinder.
                  </p>
                  <p>
                    Additional GX10 features include an HDMI 2.0 port for outputting your 4K UHD
                    footage, assignable user buttons, and remote control using the included WL-D89
                    controller. Wi-Fi connectivity offers live streaming, FTP file sharing, and
                    remote control via iOS and Android apps.
                  </p>
                </div>
                <div class="information__text information__text--2"></div>
                <div class="information__text information__text--3"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'product-detail',
  methods: {
    show (index) {
      index--
      const mainImages = document.querySelectorAll('#mainImg .main-images__item')
      const images = document.querySelectorAll('#images .images__item')
      for (let i = 0; i < mainImages.length; i++) {
        if (mainImages[i].classList.contains('active'))mainImages[i].classList.remove('active')
        if (images[i].classList.contains('active')) images[i].classList.remove('active')
      }
      mainImages[index].classList.add('active')
      images[index].classList.add('active')
    }
  }
}
</script>

<style scoped>
  .product-detail{
    margin-bottom: 90px;
  }
  .main-images{
    position: relative;
    max-width: 100%;
    padding-bottom: 100%;
    box-shadow: 0 0 10px rgba(0,0,0,.07);
  }
  .main-images__item{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: .3s opacity linear;
  }
  .main-images__item.active{
    opacity: 1;
  }
  .main-images__item img{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    z-index: 1;
  }
  .images{
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;
  }
  .images__item{
    width: 83px;
    position: relative;
    height: 83px;
    padding: 2px;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0,0,0,.07);
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: .3s transform linear,.3s box-shadow linear;
  }
  images__item:nth-child(2){
    margin-right: 10px;
  }
  .images__item:nth-child(5n + 5),
  .images__item:nth-child(5){
    margin-right: 0;
  }

  .images__item:hover,.images__item.active{
    box-shadow: 0 0 12px rgba(0,0,0,.13);
    transform: scale(1.09,1.09);
  }
  .images__item img{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
  }
  .product{
    padding:0 15px;
  }
  .product__title{
    font-size: 19px;
    font-weight: 700;
    line-height: 1.3;
  }
  .product__price{
    font-size: 24px;
    font-weight: 700;
    color:#0B88EE;
  }
  .product__text{
    padding:15px 0;
    line-height: 1.7;
    font-size: 14px;
    color:#7e7e7e;
    margin-bottom: 0;
  }
  .count{
    padding: 10px 0;
    margin-bottom: 15px;
  }
  .count__field{
    display: inline-block;
    vertical-align: center;
  }
  .count__btn{
    display: inline-block;
    vertical-align: center;
    width: 25px;
    height: 25px;
    padding: 2px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
    text-align: center;
    position: relative;
    top:8px;
  }
  .count__field span {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    cursor: pointer;
  }
  .count__input{
    width: 40px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 5px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    text-align: center;
  }
  .count__add-btn{
    display: inline-block;
    vertical-align: center;
    padding: 6.5px 15px;
    box-sizing: border-box;
    border:none;
    background-color: #0B88C7;
    color:#fff;
    font-weight: 300;
    font-size: 17px;
    border-radius: 8px;
    margin-left: 20px;
    transition: .3s background-color linear;
  }
  .count__add-btn:hover{
    background-color:#0B88EE;
  }
  .type{
    padding: 5px 0;
    line-height: 1;
  }
  .type__title{
    font-size: 14px;
    color:#454545;
  }
  .type__content{
    display: inline-block;
    list-style: none;
    padding-left: 15px;
  }
  .type__content a {
    color:#7e7e7e;
    font-style: italic;
    text-decoration: none;
  }
  .type__content a::after{
    content:',';
  }
  .type__content a:last-child::after{
    content:'';
  }
  .type__content a:hover{
    text-decoration: underline;
    color:#0B88EE;
  }
  .type__icon{
    display: inline-block;
    vertical-align: middle;
    padding:7px;
    border:1px solid rgba(0,0,0,.1);
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    margin-right: 11px;
  }
  .type__content a.type__icon::after{
    content:''
  }
  .information__header{
    padding: 15px 0;
    display: flex;
    justify-content: center;
    background-color: #f4f4f4;
    margin-bottom: 15px;
  }
  .information__btn{
    padding: 3px 25px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    color:#7e7e7e;
  }
  .information__btn.active{
    color:#454545;
  }
  .information__content{
    padding: 15px 0;
  }
  .information__text{
    display: none;
    line-height: 2;
    color:#7e7e7e;
    word-spacing: 3px;
  }
  .information__text.active{
    display: block;
  }
</style>
