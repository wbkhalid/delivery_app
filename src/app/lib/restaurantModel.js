const { default: mongoose } = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
});

export const restaurantModel =
  mongoose.models.restaurants || mongoose.model('restaurants', restaurantSchema);
