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
                                            v-model="articleTitle"
                                            label="Title"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Content" v-model="articleContent" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleWeight"
                                            label="Weight"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleWidth"
                                            label="Width"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleHeight"
                                            label="Height"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleLength"
                                            label="Length"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleStock"
                                            label="Stock"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articlePrice"
                                            label="Price"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleCategory"
                                            label="Category"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleCompatibility"
                                            label="Compatibility"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleType"
                                            label="Type"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articlePurpose"
                                            label="Purpose"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleBrand"
                                            label="Brand"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="articleImageMain"
                                            label="Image"
                                            required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <router-link class="lienArticle" :to="{ name: 'Home' }">
                                        <v-btn
                                                tile
                                                width="100%"
                                                color="accent"
                                                @click="create()">
                                            <span>Créer</span>
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
    import MainLayout from "../components/Layout/mainLayout";
    import axios from 'axios';
    export default {
        name: 'Create',
        components: {MainLayout},
        data () {
            return {
                articleTitle : null,
                articleContent: null,
                articleWeight: null,
                articleHeight: null,
                articleWidth: null,
                articleLength: null,
                articleStock: null,
                articlePrice: null,
                articleCategory: null,
                articleCompatibility : null,
                articleType: null,
                articlePurpose: null,
                articleBrand: null,
                articleImageMain: null,
            }
        },
        methods: {
            create() {
                axios.post('http://127.0.0.1:8000/api/article', {
                    title: this.articleTitle,
                    content: this.articleContent,
                    weight: this.articleWeight,
                    height: this.articleHeight,
                    width: this.articleWidth,
                    length: this.articleLength,
                    stock: this.articleStock,
                    price: this.articlePrice,
                    category: this.articleCategory,
                    compatibility : this.compatibility,
                    articleType: this.articleType,
                    articlePurpose: this.articlePurpose,
                    brand: this.articleBrand,
                    imageMain: this.articleImageMain,
                })
            }
        }
    };
</script>