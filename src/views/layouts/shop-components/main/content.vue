<template>
    <div class="content">
      <div class="slider">
        <span class="slider__arrow slider__arrow--prev" id = "arrowPrev"></span>
        <span class = "slider__arrow slider__arrow--next" id = "arrowNext"></span>
        <div class="slider__dots" id = "dots">
          <span class = "slider__dot active"></span>
          <span class = "slider__dot"></span>
          <span class = "slider__dot"></span>
        </div>
        <div class="slider__images">
          <div class="slider__item active">
            <img src="https://btw.by/images/case/11/23/omega_wristwatch_style_reliability_28349_1920x1080.jpg" alt="">
          </div>
          <div class="slider__item">
            <img src="https://99px.ru/sstorage/53/2013/07/tmb_74052_5104.jpg" alt="">
          </div>
          <div class="slider__item">
            <img src="https://lh3.googleusercontent.com/proxy/X0-dFKNTYredT48qZukzL7i_EY34dNWzYK_Gnfn4vdwo0wFZMNcehuvaXNUXBGgLAyN-jmmQjS12vfl0xI-TIj3lSqhCxHy1kQsM" alt="">
          </div>
        </div>
      </div>
      <div class="garantee"></div>
    </div>
</template>

<style scoped lang = "scss">
  %generalStyles {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  %responsiveImg {
    display: block;
    width: 100%;
    height: auto;
  }
  .slider{
    position: relative;
    width: 100%;
    min-height: 440px;
    &__images{
      @extend %generalStyles;
    }
    &__item{
      @extend %generalStyles;
      opacity: 0;
      transition: .6s opacity linear;
      img{
        @extend %responsiveImg;
        max-height: 440px;
      }
      &.active{
        opacity: 1;
        z-index: 500;
      }
    }
    &__dots{
      position: absolute;
      left:50%;
      bottom: 20px;
      transform: translateX(-50%);
      z-index: 100;
    }
    &__dot{
      display: inline-block;
      vertical-align: middle;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color:darken(#fff,15%);
      opacity: .8;
      cursor: pointer;
      transition: .3s opacity linear;
      &:hover,&.active{
        opacity: 1;
      }
    }
    &__arrow{
      position: absolute;
      top:50%;
      transform: translateY(-50%) rotate(-135deg);
      width: 20px;
      height: 20px;
      border-top:2px solid darken(#fff,65%);
      border-right: 2px solid darken(#fff,65%);
      z-index: 2;
      cursor: pointer;
      transition: .2s border linear;
      &:hover{
        border-top:2px solid darken(#fff,5%);
        border-right: 2px solid darken(#fff,5%);
      }
      &--prev{
        left:15px
      }
      &--next{
        right: 15px;
        transform:translateY(-50%) rotate(45deg);
      }
    }
  }
</style>

<script>
export default {
  name: 'content',
  mounted () {
    const arrowNext = document.getElementById('arrowNext')
    const arrowPrev = document.getElementById('arrowPrev')
    const images = document.getElementsByClassName('slider__item')
    const dots = document.querySelectorAll('#dots .slider__dot')
    let index = 0
    const currentSlide = (i) => {
      for (let img of images) {
        img.classList.remove('active')
      }
      index = i
      activeDot(index)
      images[index].classList.add('active')
    }
    const activeDot = (i) => {
      for (let dot of dots) {
        dot.classList.remove('active')
      }
      dots[i].classList.add('active')
    }
    const nextSlide = () => {
      moveSlide()
      clearInterval(interval)
    }
    const moveSlide = () => {
      if (index == images.length - 1) {
        index = 0
        currentSlide(index)
      } else {
        currentSlide(++index)
      }
    }
    const prevSlide = () => {
      if (index == 0) {
        index = images.length - 1
        currentSlide(index)
      } else {
        currentSlide(--index)
      }
      clearInterval(interval)
    }
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(interval)
        index = i
        currentSlide(i)
      })
    })
    arrowNext.addEventListener('click', nextSlide)
    arrowPrev.addEventListener('click', prevSlide)
    let interval = setInterval(moveSlide, 3000)
  }
}
</script>
