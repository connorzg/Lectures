require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var restaurantSchema = {
  name: String,
  foods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Food'
    }
  ]
};

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

var foodSchema = {
  name: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  }
};

var Food = mongoose.model('Food', foodSchema);

var restaurant = new Restaurant({name: "McDonald's"});

restaurant.save(function(err) {
  if (err) {
    console.log(err);
    return;
  }

  var food1 = new Food({
    name: "Big Mac",
    restaurant: restaurant._id
  })

  var food2 = new Food({
    name: "McNuggets",
    restaurant: restaurant._id
  })

  food1.save();
  food2.save();

  restaurant.foods.push(food1);
  restaurant.foods.push(food2);
  restaurant.save();
});

Restaurant.find({}).populate('foods').exec(function (err, restaurants) {
  console.log('restaurants', restaurants);
  restaurants[0].foods.forEach(function (food) {
    console.log('food', food);
  })
});

Food.find({})
