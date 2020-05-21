<template>
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Add product</h4>
        <p class="card-description">
          Product details
        </p>
        <b-form class="forms-sample">
          <div class="row">
            <div class="col-md-8">
              <b-form-group label="Name"  label-for="name-input">
                <b-form-input type="text" id="name-input" placeholder="Name" v-model="product.name"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Short name"  label-for="alias-input">
                <b-form-input type="text" id="alias-input" placeholder="Short name" v-model="product.alias"></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <b-form-group label="Price"  label-for="price-input">
                <b-form-input type="number" id="price-input" placeholder="Price" v-model="product.price"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Pieces"  label-for="price-input">
                <b-form-input type="number" id="pieces-input" placeholder="Pieces" v-model="product.pieces_left"></b-form-input>
              </b-form-group>
            </div>
          </div>
          <b-form-group label="Categories">
            <b-form-select v-model="product_category" @change="ADD_PRODUCT_CATEGORY(product_category)">
              <b-select-option-group v-for="(category, index) in CATEGORIES" :label="category.name" :key="index">
                <b-form-select-option v-for="(subcategory, index) in category.categories" :key="index" :value="{id: subcategory.id, name: subcategory.name}">{{subcategory.name}}</b-form-select-option>
              </b-select-option-group>
            </b-form-select>
          </b-form-group>
          <div class="row">
            <div v-for="(product_category, index) in PRODUCT_CATEGORIES" :key="index" class="category_item">
              <b-badge variant="primary"><span> {{product_category.name}} </span><font-awesome-icon :icon="['far','times']" class = "icon-red pointer" @click="DELETE_PRODUCT_CATEGORY(product_category.id)"/></b-badge>
            </div>
          </div>
          <b-form-group label="Filters">
            <b-form-select v-model="product_filter" @change="ADD_PRODUCT_FILTER(product_filter)">
              <b-select-option-group v-for="(filter, index) in GET_FILTER_GROUPS" :label="filter.name" :key="index">
                <b-form-select-option v-for="(subfilter, index) in filter.filter_values" :key="index" :value="{id: subfilter.id, value: subfilter.value}">{{subfilter.value}}</b-form-select-option>
              </b-select-option-group>
            </b-form-select>
            <div class="row">
              <div v-for="(product_filter, index) in PRODUCT_FILTERS" :key="index" class="category_item">
                <b-badge variant="primary"><span> {{product_filter.value}}  </span><font-awesome-icon :icon="['far','times']" class = "icon-red pointer" @click="DELETE_PRODUCT_FILTER(product_filter.id)"/></b-badge>
              </div>
            </div>
          </b-form-group>
          <div class="row">
            <div class="col-md-8">
              <b-form-group label="Brands">
                <select name="categories" id="brand_select" class="custom-select custom-select-sm" v-model="product.brand_id">
                  <option selected :value="1">None</option>
                  <option v-for="(brand, index) in BRANDS" :value="brand.id" :key="index">{{brand.name}}</option>
                </select>
              </b-form-group>
            </div>
            <div class="col-md-4">
              <b-form-group label="Status">
                <select name="categories" id="status_select" class="custom-select custom-select-sm" v-model="product.status">
                  <option selected :value="1">Active</option>
                  <option selected :value="0">Nonactive</option>
                </select>
              </b-form-group>
            </div>
          </div>
          <b-form-group label="Description"  label-for="description-input">
            <b-form-textarea id="description-input" placeholder="Description" :rows="3" :max-rows="6" v-model="product.description"></b-form-textarea>
          </b-form-group>
          <div class="row">
            <div class="col-md-4">
              <div class="box box-danger box-solid">
                <div class="box-header">
                  <h3 class="box-title">Базовое изображение</h3>
                </div>
                <div class="box-body" id="image" style="text-align: center; position: relative">
                  <img width="50%" height="50%" id="preview_image">
                </div>
                <p style="text-align: center">
                  <a href="javascript:void(0)" style="text-decoration: none;" data-name="single" @click.prevent="$refs.fileUploadImage.click()">
                    <font-awesome-icon icon="edit" class="blue pointer"/> Загрузить
                  </a>
                  <a href="javascript:void(0)" style="color: red;text-decoration: none;">
                    <font-awesome-icon :icon="['far','trash-alt']" class="bg-red pointer"/> Удалить
                  </a>
                </p>
                <input ref="fileUploadImage" type="file" id="file" style="display: none" @change="handleUploadImage">
                <input type="hidden" id="file_name">
                <p style="text-align: center"><small>Рекомендуемые размеры: 125ш.х200в.</small></p>
              </div>
            </div>
            <div class="col-md-8">
              <div class="box box-primary box-solid file-upload">
                <div class="box-header">
                  <h3 class="box-title">Картинки галереи</h3>
                </div>
                <div class="box-body" id="galleryjs">
                  <div id="multi" class="btn btn-success" data-name="multi" @click.prevent="$refs.fileUploadImages.click()">Загрузить</div>
                    <input multiple ref="fileUploadImages" type="file" id="files" style="display: none" @change="handleUploadImages">
                  <div class="multi">
                    <div v-for="(imageSource, index) in imageSources" :key="index">
                      <img width="50%" height="50%" :src="imageSource"  alt="image">
                      <a href="javascript:void(0)" @click="deleteImage(index)">x</a>
                    </div>
                  </div>
                  <p>
                    <small>Вы можете загружать по очереди любое кол-во.</small><br>
                    <small>Рекомендуемые размеры: 700ш.х1000в.</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <b-button variant="success" class="mr-2" @click="addProduct">Submit</b-button>
          <b-button variant="light">Cancel</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'add-product',
  data () {
    return {
      product_category: {
        id: '',
        name: ''
      },
      product_filter: {
        id: '',
        value: ''
      },
      imageSources: [],
      filter_id: '',
      filter_values_id: '',
      product: {
        name: '',
        alias: '',
        description: '',
        brand_id: '',
        status: '',
        price: '',
        pieces_left: '',
        categories: [],
        filters: [],
        image: {},
        product_images: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES',
      'PRODUCT_CATEGORIES',
      'GET_FILTER_GROUPS',
      'PRODUCT_FILTERS',
      'BRANDS'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_PRODUCT',
      'GET_CATEGORIES',
      'ADD_PRODUCT_CATEGORY',
      'DELETE_PRODUCT_CATEGORY',
      'FILTER_GROUPS_REQUEST',
      'ADD_PRODUCT_FILTER',
      'DELETE_PRODUCT_FILTER',
      'GET_BRANDS'
    ]),
    handleUploadImage (event) {
      let reader = new FileReader()
      reader.onload = function () {
        let output = document.getElementById('preview_image')
        output.src = reader.result
      }
      reader.readAsDataURL(event.target.files[0])
      this.product.image = event.target.files[0]
    },
    handleUploadImages (event, index) {
      index = index || 0
      let reader = new FileReader()
      reader.onload = () => {
        this.imageSources.push(reader.result)
        if (event.target.files[index + 1]) {
          this.handleUploadImages(event, index + 1)
        } else {
          event.target.value = ''
        }
      }
      reader.readAsDataURL(event.target.files[index])
      this.product.product_images.push(event.target.files[index])
    },
    deleteImage (index) {
      this.imageSources.splice(index)
      this.product.product_images.splice(index)
    },
    addProduct () {
      const fd = new FormData()
      this.product.categories = this.PRODUCT_CATEGORIES
      this.product.filters = this.PRODUCT_FILTERS
      fd.append('name', this.product.name)
      fd.append('alias', this.product.alias)
      fd.append('description', this.product.description)
      fd.append('brand_id', this.product.brand_id)
      fd.append('price', this.product.price)
      fd.append('pieces_left', this.product.pieces_left)
      fd.append('status', this.product.status)
      for (let i = 0; i < this.product.categories.length; i++) {
        fd.append('categories[]', this.product.categories[i].id)
      }
      for (let i = 0; i < this.product.filters.length; i++) {
        fd.append('filters[]', this.product.filters[i].id)
      }
      fd.append('image', this.product.image)
      // fd.append('product_images', this.product.product_images)
      for (let i = 0; i < this.product.product_images.length; i++) {
        fd.append('product_images[]', this.product.product_images[i])
      }
      this.ADD_PRODUCT(fd)
    }
  },
  mounted () {
    this.GET_CATEGORIES()
    this.FILTER_GROUPS_REQUEST()
    this.GET_BRANDS()
  }
}
</script>

<style scoped>
  .category_item{
    margin: 2px 2px;
  }
  .box.box-solid.box-danger {
    border: 1px solid #dd4b39;
  }
  .box {
    position: relative;
    border-radius: 3px;
    background: #ffffff;
    border-top: 3px solid #d2d6de;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    min-height: 180px;
  }
  .box-header {
    color: #444;
    display: block;
    padding: 10px;
    position: relative;
  }
  .box.box-solid.box-danger>.box-header {
    color: #fff;
    background: #dd4b39;
    background-color: #dd4b39;
  }
  .box.box-solid.box-primary {
    border: 1px solid #3c8dbc;
  }
  .box.box-solid.box-primary>.box-header {
    color: #fff;
    background: #3c8dbc;
    background-color: #3c8dbc;
  }
  .box-title {
    font-size: 1em;
  }
  .box-body {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 10px;
  }
</style>
