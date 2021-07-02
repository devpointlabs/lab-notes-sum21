class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :title
      t.datetime :end_time
      t.text :notes
      t.belongs_to :col, null: false, foreign_key: true

      t.timestamps
    end
  end
end
