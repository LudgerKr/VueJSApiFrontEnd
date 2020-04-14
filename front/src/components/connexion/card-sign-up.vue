<template>
    <v-row justify="center">
        <v-dialog v-model="afficheDialogueSignUp" persistent max-width="487px">
            <v-card :class="$style.cardLogin" dark outlined>
                <v-container class="pb-0">
                    <v-row class="d-flex justify-end">
                        <v-btn
                                :class="$style.closeBtn"
                                class="mt-3 mr-2"
                                fab
                                dark
                                color="tertiary"
                                @click="closeSignUp()"
                        >
                            <v-icon dark small>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                </v-container>
                <v-container class="px-5 pt-0">
                    <v-row>
                        <v-card-title class="pt-0">
                            <span :class="$style.headline">Sign up</span>
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Email" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
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
                                            router
                                            to="/"
                                            :class="$style.routerLink"
                                    > <!--TODO : Change link -->
                                        <span>Sign up</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row class="d-flex justify-center" :class="$style.smallLink">
                                <small>
                                    By signing up, you accept our
                                    <router-link to="/"> <!--TODO : Change link -->
                                        Teams and Conditions
                                    </router-link>
                                    and
                                    <router-link to="/"> <!--TODO : Change link -->
                                        Privacy Policy
                                    </router-link>
                                </small>
                            </v-row>
                            <v-row class="d-flex justify-center" :class="$style.smallLink">
                                <small>Already have an account,
                                    <a @click="openLogin()">
                                        Login
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
        data () {
            return {
                email: 'joe@example.com',
                pass: '',
                error: false
            }
        },
        computed: {
            afficheDialogueSignUp () {
                return this.$store.state.dialogueSignUp
            },
            ...mapActions([
                    'closeDialogueSignUp',
                    'openDialogueLogin'
                ]
            )
        },
        methods: {
            closeSignUp() {
                this.closeDialogueSignUp
            },
            openLogin() {
                this.closeSignUp()
                this.openDialogueLogin
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
</style>
