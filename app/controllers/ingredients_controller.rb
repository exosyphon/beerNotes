class IngredientsController < ApplicationController
  before_action :set_ingredient, only: [:show, :edit, :update, :destroy]
  respond_to :html, :json

  def index
    @recipe = Recipe.find params[:recipe_id]
    respond_with(@ingredients = @recipe.ingredients.all)
  end

  def show
  end

  def new
    @recipe = Recipe.find params[:recipe_id]
    @ingredient = @recipe.ingredients.new
  end

  def edit
  end

  def create
    @recipe = Recipe.find params[:recipe_id]
    @ingredient = @recipe.ingredients.new(ingredient_params)

    respond_to do |format|
      if @ingredient.save
        format.json { render json: @ingredient, status: :created}
      else
        format.json { render json: @ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @ingredient.update(ingredient_params)
        format.json { render json: @ingredient }
      else
        format.json { render json: @ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @ingredient.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def all_ingredients
    respond_with(@ingredients = Ingredient.all)
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_ingredient
    @ingredient = Ingredient.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def ingredient_params
    params.require(:ingredient).permit(:name, :amount, :unit, :addTime)
  end
end