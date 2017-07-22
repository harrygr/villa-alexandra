import Vue, { ComponentOptions } from 'vue'
import Flickity from 'flickity'

const template = `<div ref="carousel" class="carousel">
    <div class="flex justify-center items-center aspect-ratio--object z-initial">
    <div class="z-1"><slot></slot></div>
    </div>
    <div v-for="(image, index) in images" :key="index" class="carousel-cell w-100 h-100">
    <img :data-flickity-lazyload="image" class="w-100 carousel-cell-image" />
    </div>
  </div>`

export default {
  props: ['images'],
  template,
  mounted() {
    const options: FlickityOptions = {
      contain: true,
      wrapAround: true,
      imagesLoaded: true,
      setGallerySize: false,
      lazyLoad: true,
      cellSelector: '.carousel-cell'
    }
    new Flickity(this.$refs.carousel as Element, options)
  }
} as ComponentOptions<Vue>
