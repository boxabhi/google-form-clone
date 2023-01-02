<template>
  <div>
    <NavBar />
    <div class="grey lighten-3 p-5">
      <v-container class="" style="padding: 50px">
        <v-row>
          <v-col cols="4" sm="4">
            Start New Form
            <v-card class="mx-auto" max-width="150" v-on:click="createNewForm()">
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
          <v-col cols="4" sm="4" v-for="form in formData" :key="form.form">
            <router-link :to="`/forms/d/${form.code}/edit`">
              <v-card class="mx-auto" max-width="344">
                <v-card-text>
                  <div>{{form.title}}</div>

                  <div class="text--primary">
                    {{form.description}}
                  </div>
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>



  </div>

</template>

<script>
  import NavBar from '../components/NavBar.vue'
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        formData: [],
      }
    },
    methods: {
      fetchForm() {
        var token = localStorage.getItem('auth_token')
        fetch(`http://127.0.0.1:8000/api/form/`,{
          'method' : "GET",
          'headers' : {
            'Authorization' : `Token ${token}`
          }
        })
          .then(result => result.json())
          .then(response => {
            console.log(response)
            this.formData = response.data
          })
      },
      createNewForm() {
        var token = localStorage.getItem('auth_token')
        fetch(`http://127.0.0.1:8000/api/form/`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization' : `Token ${token}`
            },
            body: JSON.stringify({})
          }).then(result => result.json())
          .then(response => {
            console.log(response)
            window.location.href = `/forms/d/${response.data.code}/edit`

          })
      }
    },
    created() {
      this.fetchForm()
    }
  }
</script>