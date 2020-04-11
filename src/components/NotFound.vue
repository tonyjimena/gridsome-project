<template>
    <h1>Not FOund</h1>
</template>

<script>
export default {
    name: 'NotFound',
    data () {
        return {

        }
    },
     beforeRouteEnter (to, from, next) {
     console.log('beforeRouteEnter NoFOUND')
     next()
   },
   beforeRouterUpdate (to, from, next) {
     console.log('beforeRouterUpdate NoFOUND')
     next()
   },
   beforeRouteLeave (to, from, next) {
     console.log('beforeRouteLeave NoFOUND')
     next()
   }
}
</script>