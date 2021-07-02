class Col < ApplicationRecord
  belongs_to :day
  has_many :cards, dependent: :destroy

  validates :title, presence: true
  validates :title, uniqueness: true
  validates :title, length: { in: 2..20 }
end
