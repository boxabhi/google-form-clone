<template>
  <div :style="{background: color}">
    <SecondNavBar @my-message="captured" />
    <v-container fluid style="padding-top: 10px;">
      <div class="mx-auto" style=" width: 60%;">
        <v-tabs v-model="tab">
          <v-tab>Question </v-tab>
          <v-tab>Response</v-tab>
          <v-tab>Setting</v-tab>
          <v-tabs-items v-model="tab" color="black">
            <v-tab-item :style="{background: color}">
              <ShowQuestions @my-color="updateColor" :form="this.$route.params.form_code" :color="color" />
            </v-tab-item>
            <v-tab-item>
              <ShowResponses :form="this.$route.params.form_code" />
            </v-tab-item>
            <v-tab-item>
              Setting
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </div>
    </v-container>
  </div>
</template>

<script>
  import SecondNavBar from '../components/SecondNavBar.vue'
  import ShowQuestions from '../components/ShowQuestions.vue'
  import ShowResponses from '../components/ShowResponses'
  export default {
    components: {
      SecondNavBar,
      ShowQuestions,
      ShowResponses
    },
    data() {
      return {
        dialog: false,
        tab: null,
        color: '#000eef',
        items: ['Paragraph', 'Short Answer', 'Multiple Choice']
      }
    },
    methods: {
      updateColor(color) {
        this.color = color
      },
      captured(color_code) {
        this.color = color_code
        console.log(event)
        var payload = {
          'form_id': this.$route.params.form_code,
          'background_color': color_code,
        }
        fetch(`http://127.0.0.1:8000/api/form/`, {
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }).then(result => result.json())
          .then(response => {
            console.log(response)
          })
      }
    },
  }
</script>