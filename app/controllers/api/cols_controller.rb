class Api::ColsController < ApplicationController
    before_action :set_day
    before_action :set_col, except: [:index, :create]

    def index
        render json: @day.cols
    end
    # I included this show just in case, but I don't think we'll have a columns show page
    def show
        render json: @col
    end

    def create
        @col = @day.cols.new(col_params)
        if @col.save
            render json: @col
        else
            render json: { errors: @col.errors }, status: :unprocessable_entity
        end
    end

    def update
        if @col.update(col_params)
            render json: @col
        else
            render json: { errors: @col.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @col.destroy
        render json: { message: 'Col Deleted' }
    end



    private
    def set_day
        @day = Day.find(params[:day_id])
    end

    def set_col
        @col = @day.cols.find(params[:id])
    end

    def col_params
        params.require(:col).permit(:title)
    end

end

