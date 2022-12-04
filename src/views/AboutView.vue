<template>
  <div>
    <SecondNavBar />
    <div style="background-color: aliceblue;">


      <v-container fluid style="padding-top: 10px;">
        <div class="mx-auto" style=" width: 60%;">
          <v-tabs v-model="tab">
            <v-tab>Question</v-tab>
            <v-tab>Response</v-tab>
            <v-tab>Setting</v-tab>

            <v-tabs-items v-model="tab" color="black">
              <v-tab-item>
                  <ShowQuestions/>
              </v-tab-item>
              <v-tab-item>
               <ShowResponses/>
              </v-tab-item>
              <v-tab-item>
                Setting
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </div>

      </v-container>



    </div>

    <hello-world />
  </div>

</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import SecondNavBar from '../components/SecondNavBar.vue'
  import ShowQuestions from '../components/ShowQuestions.vue'
  import ShowResponses from '../components/ShowResponses'
  export default {

    components: {
      HelloWorld,
      SecondNavBar,
      ShowQuestions,
      ShowResponses

    },
    data() {
      return {
        tab: null,
        items: ['Paragraph', 'Short Answer', 'Multiple Choice']
      }
    },
  }
</script>