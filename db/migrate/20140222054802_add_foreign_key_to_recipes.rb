class AddForeignKeyToRecipes < ActiveRecord::Migration
  def change
    add_reference :recipes, :beer, index: true
  end
end
