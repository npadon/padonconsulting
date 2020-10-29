<template>
    <v-container>
    <v-card>
      <v-card-text v-html=" $prismic.asHtml(document.main_text)"></v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "About",
  layout: "default",
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getSingle("about"))
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