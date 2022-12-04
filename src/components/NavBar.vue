<template>
    <div>
        <v-app-bar color="white accent-4" dense white>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968528.png" style="height: 25px;" />
            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>



<script>
  export default {
    name: 'NavBar',

    data: () => ({
      
  
    }),
  }
</script>
