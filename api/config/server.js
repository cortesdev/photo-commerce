module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: "9dd940505ec40210dfd3070d99069239b532cb471e7b8c6ee7135a0b687b1a2f4bc26c7816581d02d61a3d90ace834f62954b32be8eadb80da5db48202f41ef7d4b3d81093818d3af8e63ecf825fcfa43444ea1a5e1b713dae90418bc24f50be64ac68fa8618d879a66d9b425bf3aaff6c76ba829340d54a77c2b957aedefdd3",
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
