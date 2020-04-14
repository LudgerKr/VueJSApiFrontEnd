<template>
    <div>
        <TopNavBar></TopNavBar>
        <v-container>
            <CardLogin></CardLogin>
            <CardSignUp></CardSignUp>
            <slot name="content"></slot>
        </v-container>
    </div>
</template>

<script>
    import TopNavBar from './TopNavBar'
export default {
        components: {
            TopNavBar
        }

}
</script>

<style>

</style>