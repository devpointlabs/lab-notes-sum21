class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :descript
      t.date :start_date
      t.date :end_date
      t.string :color
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
