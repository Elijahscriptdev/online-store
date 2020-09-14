class WelcomeController < ApplicationController
  def home
    @categories = Category.all
    @products = Product.all
  end

  def about_us
  end

  def contact_us
  end
end
