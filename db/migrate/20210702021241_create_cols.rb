class CreateCols < ActiveRecord::Migration[6.1]
  def change
    create_table :cols do |t|
      t.string :title
      t.belongs_to :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
