class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :name
      t.string :beerType
      t.string :notes

      t.timestamps
    end
  end
end
