class AddForeignKeyToIngredients < ActiveRecord::Migration
  def change
    remove_column :recipes, :ingredients
    add_reference :ingredients, :recipe, index: true
  end
end
