class Card < ApplicationRecord
  belongs_to :col

  validates :title, :notes, :end_time, presence: true
end
