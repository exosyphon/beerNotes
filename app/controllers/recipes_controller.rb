class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :edit, :update, :destroy]
  respond_to :html, :json

  def index
    @beer = Beer.find params[:beer_id]
    respond_with(@recipes = @beer.recipes.all)
  end

  def show
  end

  def new
    @beer = Beer.find params[:beer_id]
    @recipe = @beer.recipes.new
  end

  def edit
  end

  def create
    @beer = Beer.find params[:beer_id]
    @recipe = @beer.recipes.new(recipe_params)

    respond_to do |format|
      if @recipe.save
        format.json { render json: @recipe, status: :created }
      else
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.json { render json: @recipe }
      else
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @recipe.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def all_recipes
    respond_with(@recipes = Recipe.all)
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def recipe_params
    params.require(:recipe).permit(:name, :boilNotes)
  end
end
