class CreateParents < ActiveRecord::Migration[5.2]
  def change
    create_table :parents do |t|
      t.string :name
      t.string :petname
      t.string :email
      t.string :phone
      t.text :interest

      t.timestamps
    end
  end
end
