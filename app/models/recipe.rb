class Recipe < ActiveRecord::Base
  belongs_to :beer
  has_many :ingredients
end
