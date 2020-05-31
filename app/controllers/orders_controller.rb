class OrdersController < ApplicationController
  def index
    @orders = Order.all
    # @order_item = current_order.order_items.new
  end

  def show
    @order = Order.find(params[:id])
  end
  private

  def product_params
    params.require(:order).permit(:title, :description, :price)
  end
end
