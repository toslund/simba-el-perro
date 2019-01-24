<template>
    <div class="container">
        <section class="container">
          <div class="columns features">
            <div class="column is-4" v-for="post in data">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image ">
                    <img v-if="post.jetpack_featured_media_url" v-bind:src="post.jetpack_featured_media_url" alt="Placeholder image" class="modal-button" data-target="modal-image2">
                    <img v-else v-bind:src="foobar" alt="Placeholder image" class="modal-button" data-target="modal-image2">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4><span v-html="post.title.rendered"></span><span style="color: #b8babc;"> / <span v-html="prettify_date(post.date)"></span></span></h4>
                    <p><span v-html="post.excerpt.rendered"></span></p>
                    <h6><span><router-link v-bind:to="'/blog/' + post.slug">Continue Reading</router-link></span></h6>
                  </div>
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
  name: 'Blog',
  data() {
    return {
        fields: [],
        data: [],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        queryurl: "https://public-api.wordpress.com/wp/v2/sites/simbaelperro.wordpress.com/posts",
        static_params: {'f': 'json'}
  }},
  props: [],
  methods: {
    prettify_date(date_str) {
      var date = new Date(date_str);
      var pretty_date = this.months[date.getMonth()] + "&nbsp;" + date.getDay() + ",&nbsp;" + date.getFullYear();
      return pretty_date;
    },
    search: function() {
                      var that = this;
                      var queryURL = that.queryurl
                      console.log(queryURL)
                      axios.get(queryURL)
                      .then(function(response){
                      console.log(response.data);
                      that.data = response.data;
                      console.log(that.data);
                      }
                      )

                  },
  },
  mounted: function(){
    this.search();
  },
}
</script>



