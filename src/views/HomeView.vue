<template>
  <div>
    <NavBar />
    <div class="grey lighten-3 p-5">
      <v-container class="" style="padding: 50px">
        <v-row>
          <v-col cols="4" sm="4">
            Start New Form
            <v-card class="mx-auto" max-width="150">
              <img src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
                style="height: 140px;width: 160px;" />
            </v-card>
          </v-col>

          <v-col cols="4" sm="4">
            Start New Form
            <v-card class="mx-auto" max-width="150">
              <img
                src="https://ssl.gstatic.com/docs/templates/thumbnails/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400.png"
                style="height: 140px;width: 160px;" />
            </v-card>
          </v-col>

          <v-col cols="4" sm="4">
            Start New Form
            <v-card class="mx-auto" max-width="150">
              <img
                src="https://ssl.gstatic.com/docs/templates/thumbnails/1kkUjv3G7-PgOEUPMTiKvKResxGxS7MTsy5Amj4b0Trw_400.png"
                style="height: 140px;width: 160px;" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <v-container class="" style="padding: 50px">
        <p>Recent Forms</p>
        <v-row>
          <v-col cols="4" sm="4"  v-for="i in 4" :key="i">
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Form Name</div>
               
                <div class="text--primary">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nihil. 
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>


    <hello-world />
  </div>

</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import NavBar from '../components/NavBar.vue'



  export default {


    components: {
      HelloWorld,
      NavBar

    },
  }
</script>