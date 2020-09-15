class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  # GET /products
  # GET /products.json
  def index
    @categories = Category.all
    
    cate = params[:cate]
    if !cate.nil?
      @products = Product.where(:category_id => cate)
    else
      @products = Product.all
    end
  end

  # GET /products/1
  # GET /products/1.json
  def show
    @categories = Category.all
  end

  # GET /products/new
  def new
    @categories = Category.all
    @product = Product.new
    # @categories = Category.all.map{|c| [ c.name, c.id ] }
  end

  # GET /products/1/edit
  def edit
    @categories = Category.all
    # @categories = Category.all.map{|c| [ c.name, c.id ] }
  end

  # POST /products
  # POST /products.json
  def create
    @categories = Category.all
    @product = Product.new(product_params)
    # @product.category_id = params[:category_id] 

    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    @categories = Category.all
    # @product.category_id = params[:category_id]
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: 'Product was successfully updated.' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:title, :description, :price, :category_id, :image)
    end
end
