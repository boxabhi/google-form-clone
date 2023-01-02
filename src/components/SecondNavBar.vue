<template>
    <div>
        <v-app-bar color="white accent-4" dense white>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968528.png" style="height: 25px;" />
            <router-link to="/">

                <v-toolbar-title>Google Form Clone</v-toolbar-title>
            </router-link>

            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-palette</v-icon>
                    </v-btn>

                </template>
                <v-card>

                    <v-color-picker v-model="picker" @input="setColor()" dot-size="25" swatches-max-height="200">
                    </v-color-picker>
                    <v-btn color="green darken-1" text @click="changeDialog()">
                        Done
                    </v-btn>
                </v-card>
            </v-dialog>



            <v-btn icon>
                <v-icon>mdi-eye</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn depressed dark color="deep-purple" elevation="2">Send</v-btn>


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
        name: 'SecondNavBar',

        data: () => ({
            dialog: false,
            picker: null,

        }),
        methods: {
            changeDialog() {
                this.dialog = false
            },
            setColor() {
                console.log(this.picker.hex)
                // localStorage.setItem('color' ,this.picker.hex)
                this.$emit('my-message', this.picker.hex)

            }
        }
    }
</script>