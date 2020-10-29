<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-row align="center"  justify="center">
          <v-col>
          <h1>{{document.title[0].text}}</h1>
          </v-col>
          <v-col>
          <v-img max-width="200"  :src="document.header_image.url" ></v-img>
          </v-col>
        </v-row>
        </v-card-title>
      <v-card-text v-html=" $prismic.asHtml(document.body)"></v-card-text>
    </v-card>

  </v-container>

</template>

<script>
export default {
  layout: "default",
  name: "Blog",
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID("blog_post", params.uid))
        .data;
      return {
        document,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>