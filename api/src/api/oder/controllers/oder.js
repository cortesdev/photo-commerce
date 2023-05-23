const stripe = require("stripe")(process.env.STRIPE_KEY)


'use strict';

/**
 *  oder controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::oder.oder');
