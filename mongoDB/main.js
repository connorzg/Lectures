// insert multiple documents in restaurants collection
db.restaurants.insert([
  {
    "name": "Hopdoddy",
    "address": {
      "street": "111 main st",
      "zip": "78749"
    },
    "rating": 5
  },
  {
    "name": "Burger Bar",
    "address": {
      "street": "500 Congress Ave",
      "zip": "78704"
    },
    "rating": 3
  }
])

db.remove({rating: {$lt: 4}})
db.cars.insert({
 "name": "GTR",
 "make": "Nissan",
 "year": 2015
});
