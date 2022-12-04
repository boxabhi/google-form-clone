<template>
    <div>
        
            <v-card elevation="1" style="padding:30px;margin-top: 20px;">
              
                {{form}}
                
                <v-row align="center">
                    <v-col class="d-flex" cols="6" sm="6">
                        <v-text-field label="Untiled Question"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="6" sm="6">

                        <v-select value="Question Type" :items="items" label="Question Type">
                        </v-select>
                    </v-col>

                    <v-col class="d-flex" cols="12" sm="12">
                        <v-text-field label="Another input"></v-text-field>
                    </v-col>
                </v-row>
            </v-card>

            <v-card elevation="1" style="padding:30px;margin-top: 20px;">

                <v-row align="center">
                    <v-col class="d-flex" cols="6" sm="6">
                        <v-text-field label="Untiled Question"></v-text-field>

                    </v-col>
                    <v-col class="d-flex" cols="6" sm="6">

                        <v-select value="Question Type" label="Question Type" :items="items">
                        </v-select>
                    </v-col>

                </v-row>
                <div>
                    <v-row align="center" v-for="j in 1" :key="j">
                        <v-col class="d-flex" cols="6" sm="6">
                            <v-radio></v-radio>

                            <v-text-field value="Option"></v-text-field>
                            <v-icon>mdi-close</v-icon>
                        </v-col>

                    </v-row>
                    <v-text-field placeholder="Add option"></v-text-field>
                </div>
            </v-card>


            <v-card elevation="1" style="padding:30px;margin-top: 0px;">

                <v-row align="center">
                    <v-col class="d-flex" cols="6" sm="6">
                        <v-text-field label="Untiled Question"></v-text-field>

                    </v-col>
                    <v-col class="d-flex" cols="6" sm="6">

                        <v-select value="Question Type" label="Question Type" :items="items">
                        </v-select>
                    </v-col>

                </v-row>
                <div>
                    <v-row align="center" v-for="j in 1" :key="j">
                        <v-col class="d-flex" cols="6" sm="6">
                            <v-checkbox></v-checkbox>

                            <v-text-field value="Option"></v-text-field>
                            <v-icon>mdi-close</v-icon>
                        </v-col>

                    </v-row>
                    <v-text-field placeholder="Add option"></v-text-field>
                </div>








            </v-card>




      





    </div>

</template>

<script>
    export default {
        name: 'ShowQuestions',
        props : ['form'],
        data() {
            return {
               
                tab: null,
                items: ['Paragraph', 'Short Answer', 'Multiple Choice']
            }
        },
    }
</script>