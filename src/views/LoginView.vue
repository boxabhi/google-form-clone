<template>
  <div>

    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">

              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-alert :type="type" v-if="alert_show">
              {{ message }}
              </v-alert>

              <v-form>
                
                <v-text-field v-model="email" name="login" label="Login" type="text"></v-text-field>
                <v-text-field v-model="password" id="password" name="password" label="Password" type="password">
                </v-text-field>
              </v-form>
            </v-card-text>
            <p style="padding-left: 20px;">Dont't Have account?  <router-link to="/register">Register </router-link></p>
            <v-card-actions>
              <v-spacer></v-spacer>
              
              <v-btn color="primary" v-on:click="callLogin()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>



<script>
  export default {
    name: 'LoginView',

    data: () => ({
      email: '',
      password: '',
      alert_show : false,
      message : '',
      type : 'success'
    }),

    methods: {

      callLogin() {
        var payload = {
          'email': this.email,
          'password': this.password,
        }
        fetch(`http://127.0.0.1:8000/api/login/`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }).then(result => result.json())
          .then(response => {
            console.log(response.data)

            if(response.status == false){
              this.message = response.message
              this.alert_show = true
              this.type = 'error'
              setTimeout(()=>{
                this.alert_show = false
              }, 2000)
            } else{
              this.message = 'login successfull'
              this.alert_show = true
              this.type = 'success'

              localStorage.setItem('auth_token', response.data.token )
              setTimeout(()=>{
                window.location.href = '/'
              }, 2000)
             
            }

          })
      }
    }

  }
</script>