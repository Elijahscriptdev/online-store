class AddImageFromProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :image, :string
  end
end
