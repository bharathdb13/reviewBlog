module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:5173', 'https://your-frontend-domain.com'], // add frontend URLs
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
      credentials: true,
    },
  },
  'strapi::security',
  // 'strapi::cors',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::logger',
  'strapi::public',
];

