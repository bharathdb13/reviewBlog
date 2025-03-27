const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
  async find(ctx) {
    // Ensure population of related fields
    ctx.query.populate = ctx.query.populate || {
      posts: {
        populate: ['coverImage'], // Explicitly populate cover images in posts
      },
    };

    // Fetch categories
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params; // Get the ID from the request params

      // Fetch category with posts and cover images
      const category = await strapi.entityService.findOne('api::category.category', id, {
        populate: {
          posts: {
            populate: ['coverImage'], // Ensure posts contain images
          },
        },
      });

      if (!category) {
        return ctx.notFound('Category not found');
      }

      return { data: category };
    } catch (error) {
      ctx.throw(500, 'Internal Server Error', { error });
    }
  },
}));
