class Restaurant < ApplicationRecord
  has_many :foods, dependent: :destroy
  has_and_belongs_to_many :categories
  has_many :users, through: :review
  has_many :reviews, dependent: :destroy
end
