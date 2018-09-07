class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.text :enjoys
      t.boolean :dogFriendly
      t.boolean :medNeeds
      t.text :image

      t.timestamps
    end
  end
end
