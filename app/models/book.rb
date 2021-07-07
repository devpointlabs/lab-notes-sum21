class Book < ApplicationRecord
  belongs_to :user
  has_many :days, dependent: :destroy

  validates :title, :descript, :color, :start_date, :end_date, presence: true
  validates :title, :descript, uniqueness: true
end
