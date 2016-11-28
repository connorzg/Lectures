Profile.destroy_all
User.destroy_all
Food.destroy_all
Restaurant.destroy_all
Category.destroy_all
Review.destroy_all

User.create(email: 'czaneg@gmail.com')

u = User.new
u.email = 'anotheremail@gmail.com'
u.save

u.create_profile(first_name: 'Connor', last_name: 'Garber')

p = Profile.new
p.first_name = 'Connoor'
p.user = User.first
p.save

r = Restaurant.create(name: 'McDonalds')
r.foods.create(name: 'Big Mac')
Food.create(name: 'Royale with Cheese', restaurant_id: r.id)

r.categories.create(name: 'Fast Food')

c = Category.create(name: 'Junk Food')

c.restaurants << r

u.reviews.create(description: 'I mean, it\'s McDonalds',
                 rating: 2,
                 restaurant_id: r.id)
