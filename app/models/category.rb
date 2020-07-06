class Category < ApplicationRecord
    mount_uploader :image, ImageUploader
end
