<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-row align="center"  justify="center">
          <v-col>
          <div class="text-h4" light>{{ $prismic.asText(document.title) }}</div>
          <div class="text-subtitle-1" light>{{ $prismic.asText(document.subtitle) }}</div>
          </v-col>
          <v-col class="col-2">
          <v-img max-width="100%" :src="document.header_image.url" ></v-img>
          </v-col>
        </v-row>
        </v-card-title>
        <v-divider />
      <v-card-text v-html="$prismic.asHtml(document.body)"></v-card-text>
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