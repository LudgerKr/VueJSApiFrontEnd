<template xmlns:lot="http://www.w3.org/1999/XSL/Transform">
  <MainLayout>
    <template v-slot:content>
      <h1>Catalogue générale</h1>
      <v-row>
        <v-col v-for="(article, index) in articles" :key="index" cols="4">
          <router-link class="lienArticle" :to="{ name: 'idArticle', params: {id: article.id} }"><h2>{{ article.title }}</h2></router-link>
          <img :src="article.imageMain">
          <v-btn @click="test(article.id)">Toto</v-btn>
          <CardCatalogue :articleId         ="article.id"
                         :articleContent    ="article.content"
                         :articleWeight     ="article.weight"
                         :articleWidth      ="article.width"
                         :articleLength     ="article.length"
                         :articleStock      ="article.stock"
                         :articlePrice      ="article.price"
                         :articleCreatedAt  ="article.createdAt"
                         :articleUpdatedAt  ="article.updatedAt"
                         :articleCategory   ="article.category.name"
                         :articleType       ="article.articleType.name"
                         :articlePurpose    ="article.articlePurpose.name"
                         :articleBrand      ="article.brand.name">
          </CardCatalogue>
        </v-col>
      </v-row>
    </template>
  </MainLayout>
</template>

<script>
  // @ is an alias to /src
  import MainLayout from '../components/Layout/mainLayout';
  import CardCatalogue from '../components/card-catalogue-item';
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      MainLayout,
      CardCatalogue,
    },
    data () {
      return {
        articles: null,
        loading: true,
        errored: false
      }
    },
    mounted () {
      axios.all([
        axios.get('http://localhost:8000/api/articles'),
      ]).then(axios.spread((articles) => {
        this.articles = articles.data
      }));
    },

    methods: {
      test(index) {
        console.log("TOTO " + index);
        sessionStorage.setItem('articleId', index);
      }
    }
  }
</script>
