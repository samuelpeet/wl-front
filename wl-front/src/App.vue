<template>
  <v-app>
    <v-container fill-height fluid align="center" justify="center" class="hero">
      <v-row>
        <v-col align="center">
          <v-card style="width: 600px;">
            <v-row>
              <v-col align="left">
                <v-file-input
                  truncate-length="50"
                  accept=".zip"
                  style="width: 300px; margin-left: 20px; margin-top: 8px"
                  @change="fileChange"
                >
                </v-file-input>
              </v-col>
              <v-col align="right">
                <v-card-actions>
                  <v-btn
                    color="info"
                    :loading="loading_results"
                    :disabled="disabled_results"
                    @click="getResults"
                    style="margin-top: 10px"
                    >
                      Results
                  </v-btn>
                  <v-btn color="info"
                    :loading="loading_pdf"
                    :disabled="disabled_pdf"
                    @click="getPDF"
                    style="margin-top: 10px"
                    >
                      PDF Report
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
            <v-row v-if="visible_results">
              <v-col>
                <pre style="text-align:left; margin-left: 30px; margin-bottom: 20px">{{text | pretty}}</pre>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      loading_results: false,
      loading_pdf: false,
      disabled_results: true,
      disabled_pdf: true,
      file: '',
      visible_results: false,
      text: "",
    }
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(JSON.parse(value), null, 2);
    }
  },
  methods: {
    fileChange(event){
      this.file = event;
      if (this.file != null) {
        this.disabled_results = false;
        this.disabled_pdf = false;
      } else {
        this.disabled_results = true;
        this.disabled_pdf = true;
        this.visible_results = false
      }
    },

    getResults: function () {
      this.loading_results = true
      this.disabled_pdf = true
      let formData = new FormData();
      formData.append('file', this.file);
      axios
      .post('http://winstonlutz.herokuapp.com/results/',
        formData,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data'
          }
        })
      .then(response => {
        console.log(JSON.stringify(response.data))
        this.text = JSON.stringify(response.data, null, 2);
        this.loading_results = false
        this.disabled_pdf = false
        this.visible_results = true
      })
      .catch(error => {
        console.log(error)
        this.loading_results = false
        this.disabled_pdf = false
      })

    },

    getPDF: function () {
      this.loading_pdf = true
      this.disabled_results = true
      let formData = new FormData();
      formData.append('file', this.file);
      axios
      .post('http://winstonlutz.herokuapp.com/pdf/',
        formData,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data'
          }
        })
      .then(response => {
        this.loading_pdf = false
        this.disabled_results = false
        const url = window.URL.createObjectURL(new Blob([response.data], {type: "application/pdf"}))
        const link = document.createElement('a')
        link.href = url
        document.body.appendChild(link)
        link.click()
      })
      .catch(error => {
        console.log(error)
        this.loading_pdf = false
        this.disabled_results = false
      })
    },
    // testAPI: function () {
    //   axios
    //   .get('http://winstonlutz.herokuapp.com/testapi/')
    //   .then(response => (console.log(response)))
    //   .catch(error => {
    //     console.log(error)
    //   })
    // },
  }
}
</script>

<style scoped>
.hero {
  background: url('./assets/bg_crush.jpg');
  background-size: cover;
  height: 100vh;
}
</style>