module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c7ea1d838ee77f917b5b5486abc806f8'),
  },
});
