class Col < ApplicationRecord
  belongs_to :day
  has_many :cards, dependent: :destroy

  validates :title, presence: true
end
