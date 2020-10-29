<template>
  <v-container>
    <v-card class="mx-auto my-3" v-for="post in posts" v-bind:key="post.uid">
      <v-card-title>
        <v-btn v-bind:to="'page/' + post.uid" nuxt text>
        {{post.data.title[0].text}}
        </v-btn>
      </v-card-title>
      <v-card-text>Some text</v-card-text>
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