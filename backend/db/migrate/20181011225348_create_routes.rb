class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :transportation
      t.integer :distance
      t.string :name
      t.belongs_to :user

      t.timestamps
    end
  end
end
