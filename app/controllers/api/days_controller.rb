class Api::DaysController < ApplicationController
  before_action :set_book
  before_action :set_day, only: [:show, :update, :destroy]

  def index
    render json: @book.days
  end

  def show
    render json: @day
  end

  def create
    @day = @book.days.new(day_params)
    if @day.save
      @day.cols.create( title: "Goals", day_id: @day.id)
      @day.cols.create( title: "In Progress", day_id: @day.id)
      @day.cols.create( title: "Done", day_id: @day.id)
      render json: @day
    else
      render json: {errors: @day.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @day.update(day_params)
      render json: @day
    else
      render json: {errors: @day.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @day.destroy
    render json: {message: "Day deleted"}
  end

  private
    def set_book
      @book = Book.find(params[:book_id])
    end

    def set_day
      @day = @book.days.find(params[:id])
    end

    def day_params
      params.require(:day).permit(:day_date)
    end
end
