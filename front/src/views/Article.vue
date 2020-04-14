<template>
    <MainLayout>
        <template v-slot:content>
            <h1>
                {{article.title}}
            </h1>
            <img :src="article.imageMain">
            <router-link class="lienArticle" :to="{ name: 'editArticle', params: {id: article.id} }">
                <v-btn>
                    Edit
                </v-btn>
            </router-link>
            <router-link class="lienArticle" :to="{ name: 'Home' }">
                <v-btn
                        tile
                        width="100%"
                        color="accent"
                        @click="supress()">
                    <span>Delete</span>
                </v-btn>
            </router-link>
            <v-row class="articleDetails">
                Content : {{article.content}} <br>
                Categorie : {{article.category.name}}
                Description : {{article.content}} <br>
                Stock : {{article.stock}} <br>
                Prix : {{article.price}} € <br>
                Weight : {{ article.weight }} <br>
                Length : {{ article.length }} <br>
                Type : {{ article.articleType.name }} <br>
                Purpose : {{ article.articlePurpose.name }} <br>
                Brand : {{ article.brand.name }} <br>
                Created at : {{ article.createdAt }} <br>
                Updated at : {{ article.updatedAt }} <br>
            </v-row>
        </template>
    </MainLayout>
</template>

<script>

    import MainLayout from '../components/Layout/mainLayout';
    import axios from 'axios';
    export default {
        name: "Article",
        components: {
            MainLayout,
        },
        data () {
            return {
                article: null,
                loading: true,
                errored: false,
            }
        },
        mounted() {
            axios.all([
                axios.get('http://localhost:8000/api/article/' + this.$router.currentRoute.params.id),
            ]).then(axios.spread((article) => {
                this.article = article.data;
            }));
        },
        methods: {
            supress() {
                console.log("toto " + this.$router.currentRoute.params.id);
                axios.delete('http://127.0.0.1:8000/api/article/' + this.$router.currentRoute.params.id);
            }
        }
    }
</script>

<style scoped>
    .articleDetails{
        background-color: white;
    }

    .btnPanier {
        position: relative;
        left: 5%;
        height: 15px;
        width: 15px;
    }

    .iconePanier {
        height: 10px;
        width: 10px;
    }
</style>
