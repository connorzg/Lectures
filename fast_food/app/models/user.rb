class User < ApplicationRecord
  has_one :profile, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :restaurants, through: :reviews
end
