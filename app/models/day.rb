class Day < ApplicationRecord
  belongs_to :book
  has_many :cols, dependent: :destroy

  validates :day_date, presence: true
end
