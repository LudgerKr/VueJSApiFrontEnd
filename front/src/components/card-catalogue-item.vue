<template>
    <v-card>
        <v-card-title>
            Id : {{ articleId }}
            <br><br>
        </v-card-title>
        <v-card-title>
            Title : {{ articleTitle }}
            <br><br>
        </v-card-title>
        <v-card-content>
            Content :{{ articleContent }}
            <br><br>
        </v-card-content>
        <v-card-weight>
            Weight : {{ articleWeight }}
            <br><br>
        </v-card-weight>
        <v-card-height>
            Height : {{ articleHeight }}
            <br><br>
        </v-card-height>
        <v-card-width>
            Width : {{ articleWidth }}
            <br><br>
        </v-card-width>
        <v-card-length>
            Length : {{ articleLength }}
            <br><br>
        </v-card-length>
        <v-card-stock>
            Stock : {{ articleStock }}
            <br><br>
        </v-card-stock>
        <v-card-price>
            Price : {{ articlePrice }}
            <br><br>
        </v-card-price>
        <v-card-price>
            Compatibility : {{ articleCompatibility }}
            <br><br>
        </v-card-price>
        <v-card-createdAt>
            CreatedAt : {{ articleCreatedAt }}
            <br><br>
        </v-card-createdAt>
        <v-card-updatedAt>
            UpdatedAt : {{ articleUpdatedAt}}
            <br><br>
        </v-card-updatedAt>
        <v-card-category>
            Category : {{ articleCategory }}
            <br><br>
        </v-card-category>
        <v-card-type>
            Type : {{ articleType }}
            <br><br>
        </v-card-type>
        <v-card-purpose>
            Purpose : {{ articlePurpose }}
            <br><br>
        </v-card-purpose>
        <v-card-brand>
            Brand : {{ articleBrand }}
            <br><br>
        </v-card-brand>
        <slot name="articleItem"></slot>
    </v-card>
</template>

<script>
    export default {
        props: {
            articleId: String,
            articleTitle: String,
            articleImageMain: String,
            articleContent: String,
            articleWeight: String,
            articleHeight: String,
            articleWidth: String,
            articleLength: String,
            articleStock: String,
            articlePrice: String,
            articleCompatibility: String,
            articleCreatedAt: String,
            articleUpdatedAt: String,
            articleCategory: String,
            articleType: String,
            articlePurpose: String,
            articleBrand: String,
        }

    }
</script>

<style lang="scss" module>

</style>