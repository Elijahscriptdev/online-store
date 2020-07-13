class Product < ApplicationRecord
    mount_uploader :image, ImageUploader
    has_many :order_items
    belongs_to :category
end
