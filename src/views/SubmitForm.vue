<template>
    <div style="background-color: aqua;">
        <v-container>
            <v-card elevation="1" style="padding:30px;margin-top: 20px;">
                <v-card-title>This is a Form Name</v-card-title>

            </v-card>

            <v-card elevation="1" style="padding:30px;margin-top: 20px;">

                <p>What is Your age?</p>

                <div>
                    <v-radio-group v-model="radioGroup">
                        <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
                    </v-radio-group>
                </div>
            </v-card>

            <v-card elevation="1" style="padding:30px;margin-top: 20px;">

                <p>What is Your age?</p>

                <div>
                    <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
                    <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
                </div>
            </v-card>


            <v-card elevation="1" style="padding:30px;margin-top: 20px;">

                <p>What is Your age?</p>

                <div>
                    <v-text-field v-model="title" counter="25" hint="This field uses counter prop" label="Regular">
                    </v-text-field>
                </div>
            </v-card>

         


           
            <v-btn depressed dark color="deep-purple" style="margin-top: 20px;" elevation="2">Send</v-btn>

        </v-container>

    </div>

</template>

<script>
    export default {
        name: 'ShowQuestions',
        data() {
            return {
                tab: null,
                items: ['Paragraph', 'Short Answer', 'Multiple Choice']
            }
        },
    }
</script>