class Api::CardsController < ApplicationController
    before_action :set_col
    before_action :set_card, only: [:show, :update, :destroy]

    def index
      render json: @col.cards
    end

    def show
      render json: @card
    end

    def create 
      @card = @col.card.new(card_params)
      if @card.save 
        render json: @card
      else
        render json: { errors: @card.errors }, status: :unprocessable_entity
      end
    end

    def update
      if @card.update(card_params)
        render json: @card
      else
        render json: { errors: @card.errors }, status: :unprocessable_entity
      end
    end

    def destroy
      @card.destroy
      render json: { message: "Card deleted" }
    end

    private 
    def set_col
        @col = Col.find(params[:col_id])
      end
      def set_card
        @card = @col.cards.find(params[:id])
      end
      
      def card_params
        params.require(:card).permit(:title, :end_time, :notes)
      end
  end   
end
