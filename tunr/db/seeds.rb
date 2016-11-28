# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Song.destroy_all
Artist.destroy_all

adele = Artist.create(name: 'Adele',
                      photo_url: 'adele.jpg',
                      nationality: 'British')

bob_marley = Artist.create(name: 'Bob Marley',
                           photo_url: 'bob_marley.jpg',
                           nationality: 'Jamaican')

willienelson = Artist.create(name: 'Willie Nelson',
                             photo_url: 'nelson.jpg',
                             nationality: 'American')

adele.songs.create(title: 'Hello',
                   album: '25',
                   preview_url: 'spotify.com',
                   genre: 'pop')

bob_marley.songs.create(title: 'Hungry but them belly full',
                        album: 'No clue',
                        preview_url: 'spotify.com',
                        genre: 'Reggae')

willienelson.songs.create(title: 'Whiskey River',
                          album: 'Idk',
                          preview_url: 'spotify.com',
                          genre: 'Country')
