<template>
    <div :style="{background: background_color}">
     
        <v-form ref="entryForm" @submit.prevent="submitHandler">
            <v-container>
                <v-card elevation="1" style="padding:30px;margin-top: 20px;">
                    <v-card-title>{{formData.title}}</v-card-title>
                </v-card>

                

             <v-card  v-for="question , i in questions" :key="question.id" elevation="1" style="padding:30px;margin-top: 20px;">
                <p>{{question.question}}</p>

                <div v-if="question.question_type == 'short answer'">
                    <v-text-field v-model="submitForm[i].answer"  counter="25" hint="This field uses counter prop" label="Regular">
                    </v-text-field>
                </div>

                <div v-if="question.question_type == 'long answer'">
                    <v-text-field v-model="submitForm[i].answer"  counter="25" hint="This field uses counter prop" label="Regular">
                    </v-text-field>
                </div>

                <div v-if="question.question_type == 'checkbox'" >
                    <v-checkbox v-model="submitForm[i].answer" v-for="choice in question.choices" :key="choice.id"  :label="choice.choice" :value="choice.choice"></v-checkbox>
                  
                </div>
                <div v-if="question.question_type == 'multiple choice'">
                <v-radio-group v-model="submitForm[i].answer" >
                            <v-radio  v-for="choice in question.choices" :id="`radio_${choice.choice}`" :key="choice.choice"
                                :label="choice.choice" :value="choice.choice"></v-radio>
                        </v-radio-group>

                        
                    </div>
            </v-card>

                <v-btn type="submit"     depressed dark color="deep-purple" style="margin-top: 20px;" elevation="2">Send</v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: 'SubmitForm',
        props: ['form'],
        data() {
            return {
                tab: null,
                background_color : 'aqua',
                questions : [],
                formData : [],
                submitForm : []
            }
        },
        methods: {
            fetchForm() {
                fetch(`http://127.0.0.1:8000/api/form/?code=${this.$route.params.form_code}`)
                    .then(result => result.json())
                    .then(response => {
                        console.log(response)
                        this.questions = response.data[0].questions
                        this.formData = response.data[0]
                        this.background_color =  response.data[0].background_color
                       
                        this.questions.map((question)=>{
                            this.submitForm.push({'question' : question.id ,'answer' : []})
                        })

                    })
            },
            submitHandler(){
                var payload = {
                        'form_id' : this.formData.form,
                       'responses' : this.submitForm

                    }
                    
                    fetch(`http://127.0.0.1:8000/api/response/store_responses/`,{
                        method : 'POST',
                        headers : {
                            'Accept' : 'application/json',
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify(payload)
                    }).then(result => result.json())
                    .then(response => {
                        console.log(response)
                         window.location.href = '/success'
                        
                    })
            }
               
        },
        created() {
            this.fetchForm()
        }
    }
</script>