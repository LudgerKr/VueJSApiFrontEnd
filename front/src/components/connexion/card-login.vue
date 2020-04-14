<template>
    <v-row justify="center">
        <v-dialog v-model="afficheDialogue" persistent max-width="487px">
            <v-card :class="$style.cardLogin" dark outlined>
                <v-container class="pb-0">
                    <v-row class="d-flex justify-end">
                        <v-btn
                                :class="$style.closeBtn"
                                class="mt-3 mr-2"
                                fab
                                dark
                                color="tertiary"
                                @click="CloseDialogue()"
                        >
                            <v-icon dark small>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                </v-container>
                <v-container class="px-5 pt-0">
                    <v-row>
                        <v-card-title class="pt-0">
                            <span :class="$style.headline">Welcome back!</span>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Email" v-model="email" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                            v-model="pass"
                                            label="Password"
                                            type="password"
                                            required
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-checkbox
                                            v-model="checkbox"
                                            label="Remember me"
                                            required
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn
                                            tile
                                            width="100%"
                                            color="accent"
                                            @click="login()"
                                            :class="$style.routerLink"
                                    >
                                        <span>Login</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row class="d-flex justify-center" :class="$style.smallLink">
                                <small>
                                    <!--TODO : Change link -->
                                    <router-link to="/">
                                        Forgotten your password ?
                                    </router-link>
                                </small>
                            </v-row>
                            <v-row class="d-flex justify-center" :class="$style.smallLink">
                                <small
                                >Don't have an account yet,

                                    <a @click="openSignUp">
                                        Sign up
                                    </a>
                                </small>
                            </v-row>
                        </v-card-text>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'login',
    data () {
        return {
            email: 'joe@example.com',
            pass: '',
            error: false
        }
    },
    computed: {
        afficheDialogue () {
            return this.$store.state.dialogueLogin
        },
        ...mapActions([
            'closeDialogueLogin',
            'openDialogueSignUp'
            ]
        )
    },
    methods: {
        CloseDialogue() {
            this.closeDialogueLogin
        },
        openSignUp() {
            this.CloseDialogue()
            this.openDialogueSignUp
        }
    }
};
</script>

<style lang="scss" module>
    @import "../../design";
    .cardLogin {
        background-color: $color-body-bg !important;
        border-radius: 10px !important;
    }
    .closeBtn {
        border: 1px solid #3c4552 !important;
        background-color: $color-body-bg !important;
        color: $color-text !important;
    }

    .headline {
        font-family: $default-font-family !important;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 64px;
        word-break: normal;
    }

    .routerLink {
        text-decoration: none !important;
    }

    .smallLink a {
        color: $color-link-text-active !important;
    }
    .error {
        color: red;
    }
</style>
