<template>
    <MainLayout>
        <template v-slot:content>
            <v-row justify="center">
                <v-container class="px-5 pt-0">
                    <v-row>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.title"
                                            label="Title"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Content" v-model="article.content" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.weight"
                                            label="Weight"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.width"
                                            label="Width"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.height"
                                            label="Height"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.length"
                                            label="Length"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.stock"
                                            label="Stock"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.price"
                                            label="Price"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.category.id"
                                            label="Category"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.compatibility.id"
                                            label="Compatibility"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.articleType.id"
                                            label="Type"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.articlePurpose.id"
                                            label="Purpose"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.brand.id"
                                            label="Brand"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="article.imageMain"
                                            label="Image"
                                            required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <router-link class="lienArticle" :to="{ name: 'idArticle', params: {id: article.id} }">
                                        <v-btn
                                                tile
                                                width="100%"
                                                color="accent"
                                                @click="edit()">
                                            <span>Modifier</span>
                                        </v-btn>
                                    </router-link>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-row>
                </v-container>
            </v-row>
        </template>
    </MainLayout>
</template>

<script>

    import MainLayout from '../components/Layout/mainLayout';
    import axios from 'axios';
    export default {
        name: "Edit",
        components: {
            MainLayout,
        },
        data () {
            return {
                article: null,
            };
        },
        mounted() {
            axios.all([
                axios.get('http://localhost:8000/api/article/' + this.$router.currentRoute.params.id),
            ]).then(axios.spread((article) => {
                this.article = article.data;
            }));
        },
        methods: {
            edit() {
                console.log("toto " + this.article.id);
                axios.put('http://127.0.0.1:8000/api/article/' + this.article.id, {
                    title: this.article.title,
                    content: this.article.content,
                    weight: this.article.weight,
                    height: this.article.height,
                    width: this.article.width,
                    length: this.article.length,
                    stock: this.article.stock,
                    price: this.article.price,
                    category: this.articleCategory,
                    compatibility: this.article.compatibility.id,
                    articleType: this.article.articleType.id,
                    articlePurpose: this.article.articlePurpose.id,
                    brand: this.article.brand.id,
                    imageMain: this.article.imageMain,
                })
            }
        }
    };
</script>