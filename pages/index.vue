<template>
  <v-container>
    <v-card class="mx-auto my-3" v-for="post in posts" v-bind:key="post.uid">
      <v-row>
        <v-col class="col-2"  align="center">
          <v-img max-width="100" :src="post.data.header_image.url"></v-img>
        </v-col>
        <v-col align="left">
          <v-card-title>
            <v-btn v-bind:to="'page/' + post.uid" nuxt text>
              {{ $prismic.asText(post.data.title) }}
            </v-btn>
          </v-card-title>
          <v-card-text text>{{
            $prismic.asText(post.data.subtitle)
          }}</v-card-text
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  layout: "default",
  data() {
    return {
      posts: [],
      linkResolver: this.$prismic.linkResolver,
    };
  },
  async asyncData({ $prismic, params, error }) {
    console.log("About to fire the API...");
    const documents = await $prismic.api.query(
      $prismic.predicates.at("document.type", "blog_post")
    );

    if (documents.results) {
      return { posts: documents.results };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>