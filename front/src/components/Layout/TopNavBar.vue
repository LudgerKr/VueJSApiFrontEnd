<template>
    <v-toolbar :class="$style.mainBG" dark height="100px">
        <v-btn flat router to="/">
            <v-icon class="mr-2">mdi-home</v-icon>
            <span>Accueil</span>
        </v-btn>
        <v-btn flat router to="/create">
            <span>Créer un article</span>
        </v-btn>
    </v-toolbar>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'TopNavBar',
        computed: {
            ...mapActions([
                    'openDialogueSignUp'
                ]
            ),
        },
        methods: {
            openSignUp() {
                this.openDialogueSignUp
                console.log('coucou')
            }
        },
    };
</script>

<style lang="scss" module>
    .mainBG {
        background: rgb(36,47,62);
        background: linear-gradient(90deg, rgba(36,47,62,1) 0%, rgba(108,116,126,1) 100%);
    }
</style>
