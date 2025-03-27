import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    // Ensure Strapi fetches based on `id` and not `documentId`
    const post = await strapi.entityService.findOne("api::post.post", id, {
      populate: "*",
    });

    if (!post) {
      return ctx.notFound("Post not found");
    }

    return post;
  },
}));