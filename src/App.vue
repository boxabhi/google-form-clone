<template>
  <v-app>
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      items: ['Cake 🍰', 'Pizza 🍕', 'Hot Dog 🌭', 'Egg 🥚'],
      value: 1
    }),
    methods: {

      incrementValue() {
        this.value += 1
      },
      valueChange(){
        console.log("Value change")
      }

    }
  };
</script>