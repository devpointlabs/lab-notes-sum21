class Card < ApplicationRecord
  belongs_to :col

  validates :title, :notes, :end_time, presence: true
  validates :title, :notes, :end_time, uniqueness: true
  validates :title, length: { in: 2..30 }
end
