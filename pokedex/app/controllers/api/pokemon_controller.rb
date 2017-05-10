class Api::PokemonController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(
      :name,
      :attack,
      :defense,
      :poke_type,
      :poke_type,
      :moves,
      :image_url
    )
  end
end
