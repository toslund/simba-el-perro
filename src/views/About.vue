<template>
  <section class="container">
          <div class="columns is-centered ">
              <div class="column is-half-desktop">
                <div class="content">
                  <h1><span v-html="pages[0].title.rendered"></span></h1>
                  <p><span v-html="pages[0].content.rendered"></span></p>
                </div>
              </div>
          </div>
        </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Blog',
  data() {
    return {
        pages: [],
        queryurl: "https://public-api.wordpress.com/wp/v2/sites/simbaelperro.wordpress.com/pages",
        static_params: {'f': 'json'}
  }},
  props: [],
  methods: {
    search: function() {
                      var that = this;
                      var queryURL = that.queryurl;
                      axios.get(queryURL)
                      .then(function(response){
                      that.pages = response.data;
                      }
                      )

                  },
  },
  mounted: function(){
    this.search();
  },
}
</script>