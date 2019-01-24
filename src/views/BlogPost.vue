<template>
    <div class="container">
        <section class="container">
          <div class="columns features is-centered">
            <div class="column" v-for="post in data">
                <div class="card-content">
                  <div class="content">
                    <h1 class="family-secondary"><span v-html="post.title.rendered"></span></h1>
                    <p><span v-html="post.content.rendered"></span></p>
                  </div>
                </div>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BlogPost',
  data() {
    return {
        data: [],
        queryurl: "https://public-api.wordpress.com/wp/v2/sites/simbaelperro.wordpress.com/posts?",
        static_params: {'f': 'json'}
  }},
  props: [],
  methods: {
    search: function() {
                      var that = this;
                      var search_params = new URLSearchParams({'slug': that.$route.params.slug});
                      that.params = search_params.toString();
                      var queryURL = that.queryurl + search_params
                      axios.get(queryURL)
                      .then(function(response){
                      that.data = response.data;
                      }
                      )
                  },
  },
  mounted: function(){
    this.search();
  },
}
</script>