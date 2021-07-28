class Book < ApplicationRecord
  belongs_to :user
  has_many :days, dependent: :destroy

  validates :title, :descript, :start_date, :end_date, presence: true
end
