class Book < ApplicationRecord
  belongs_to :user
  has_many :days, dependent: :destroy

  validates :title, :descript, :color, :start_date, :end_date, presence: true
  validates :title, :descript, uniqueness: true
  validates :title, length: { in: 2..20 }
  validates :descript, length: { in: 2..50 }
end
