class ChangeDateTimeCard < ActiveRecord::Migration[6.1]
  def change
    change_column :cards, :end_time, :string
  end
end
