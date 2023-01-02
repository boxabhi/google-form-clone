<template>
    <div style="{background: color;}">
        <v-card v-for="question in questions" :key="question.id" elevation="1"
            style="padding:30px;margin: 20px 0px 20px 0px;">
            <v-row align="center">
                <v-col class="d-flex" cols="6" sm="6">
                    <v-text-field @change="questionChanged(question.id)" v-model="question.question"
                        :value="question.question" :label="question.question">
                    </v-text-field>
                </v-col>
                <v-col class="d-flex" cols="6" sm="6">

                    <v-select :items="items" @change="updateQuestionType(question.id)" :value="question.question_type"
                        v-model="question.question_type" label="Question Type">
                    </v-select>
                </v-col>


                <v-col v-if="question.question_type == 'short answer'" class="d-flex" cols="12" sm="12">
                    <v-text-field :label="question.question_type"></v-text-field>
                </v-col>

                <v-col v-if="question.question_type == 'long answer'" class="d-flex" cols="12" sm="12">
                    <v-text-field :label="question.question_type"></v-text-field>
                </v-col>

                <v-row v-if="question.question_type == 'multiple choice'">
                    <v-col style="padding-top:0px ;margin: 0px;" class="d-flex" cols="1" sm="12"
                        v-for="choice in question.choices" :key="choice.id">
                        <v-radio></v-radio>

                        <v-text-field @change="updateOption($event,choice.id)" :value="choice.choice"></v-text-field>
                        <v-icon v-on:click="removeOption(choice.id)">mdi-close</v-icon>
                    </v-col>
                    <v-container style="margin-top: -30px;">
                        <v-text-field placeholder="Add option" v-on:click="addOption(question.id)"></v-text-field>
                    </v-container>

                </v-row>

                <v-row v-if="question.question_type == 'checkbox'">
                    <v-col style="padding-top:0px ;margin: 0px;" class="d-flex" cols="12" sm="12"
                        v-for="choice in question.choices" :key="choice.id">
                        <v-checkbox></v-checkbox>

                        <v-text-field :value="choice.choice"></v-text-field>
                        <v-icon v-on:click="removeOption(choice.id)">mdi-close</v-icon>
                    </v-col>
                    <v-container style="margin-top: -30px;">
                        <v-text-field placeholder="Add option" v-on:click="addOption(question.id)"></v-text-field>
                    </v-container>
                </v-row>
                <br />
                <v-btn icon>
                    <v-icon v-on:click="deleteQuestion(question.id)">mdi-delete</v-icon>
                </v-btn>
            </v-row>
        </v-card>

        <v-btn depressed v-on:click="addQuestion()">
            Click to add Question
        </v-btn>

    </div>
</template>

<script>
    export default {
        name: 'ShowQuestions',
        props: ['form', 'color'],
        data() {
            return {
                tab: null,
                text: '',
                items: ['long answer', 'short answer', 'multiple choice', 'checkbox'],
                formData: {},
                questions: []
            }
        },
        methods: {
            updateOption(event, id) {
                console.log(event)
                var payload = {
                    'form_id': this.formData.form,
                    'choice_id': id,
                    'choice': event
                }

                fetch(`http://127.0.0.1:8000/api/choices/`, {
                        method: 'PATCH',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(result => result.json())
                    .then(response => {
                        console.log(response)
                        this.questions = response.data.questions
                        this.formData = response.data
                    })
            },
            questionChanged(id) {
                let _question = null
                this.questions.map((question) => {
                    if (question.id == id) {
                        console.log(question.question)
                        _question = question.question
                    }
                })

                var payload = {
                    'form_id': this.formData.form,
                    'question_id': id,
                    'question': _question
                }

                console.log(payload)


                fetch(`http://127.0.0.1:8000/api/question/`, {
                        method: 'PATCH',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(result => result.json())
                    .then(response => {

                        console.log(response)
                        // this.questions = response.data.questions
                        // this.formData = response.data
                    })


            },
            updateQuestionType(id) {
                let question_type = null

                this.questions.map((question) => {
                    if (question.id == id) {
                        question_type = question.question_type
                    }
                })

                var payload = {
                    'form_id': this.formData.form,
                    'question_id': id,
                    'question_type': question_type
                }

                fetch(`http://127.0.0.1:8000/api/question/`, {
                        method: 'PATCH',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(result => result.json())
                    .then(response => {
                        console.log(response)
                        this.questions = response.data.questions
                        this.formData = response.data
                    })


                console.log('Question changed')
            },
            fetchForm() {
                var token = localStorage.getItem('auth_token', )
                fetch(`http://127.0.0.1:8000/api/form/?code=${this.form}`, {
                        'method': "GET",
                        'headers': {
                            'Authorization': `Token ${token}`
                        }
                    })
                    .then(result => result.json())
                    .then(response => {
                        console.log(response)
                        this.questions = response.data[0].questions
                        this.formData = response.data[0]
                        this.$emit('my-color', response.data[0].background_color)
                    })
            },
            removeOption(id) {

                var payload = {
                    'form_id': this.formData.form,
                    'choice_id': id
                }
                fetch(`http://127.0.0.1:8000/api/choices/`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(result => result.json())
                    .then(response => {
                        console.log(response)
                        this.questions = response.data.questions
                        this.formData = response.data
                    })
            },
            addOption(id) {
                var payload = {
                    'form_id': this.formData.form,
                    'question_id': id

                }
                var token = localStorage.getItem('auth_token')
                fetch(`http://127.0.0.1:8000/api/choices/`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization' : `Token ${token}`

                        },
                        body: JSON.stringify(payload)
                    }).then(result => result.json())
                    .then(response => {
                        console.log(response)
                        this.questions = response.data.questions
                        this.formData = response.data
                    })
            },
            addQuestion() {
                var payload = {
                    'form_id': this.formData.form
                }
                var token = localStorage.getItem('auth_token')
                fetch(`http://127.0.0.1:8000/api/question/`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization' : `Token ${token}`

                        },
                        body: JSON.stringify(payload)
                    }).then(result => result.json())
                    .then(response => {
                        console.log(response)
                        this.questions = response.data.questions
                        this.formData = response.data
                    })
            },
            deleteQuestion(id) {
                var payload = {
                    'form_id': this.formData.form,
                    'question_id': id
                }
                fetch(`http://127.0.0.1:8000/api/question/`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(result => result.json())
                    .then(response => {
                        console.log(response)
                        this.questions = response.data.questions
                        this.formData = response.data
                    })
            }
        },

        created() {
            this.fetchForm()
        }
    }
</script>