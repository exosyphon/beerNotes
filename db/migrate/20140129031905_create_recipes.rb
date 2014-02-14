class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :ingredients
      t.string :boilNotes

      t.timestamps
    end
  end
end
