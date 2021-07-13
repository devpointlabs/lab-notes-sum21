class Day < ApplicationRecord
  belongs_to :book
  has_many :col, dependent: :destroy

  validates :day_date, presence: true
  validates :day_date, uniqueness: true
end
