class Api::BooksController < ApplicationController
  
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    render json: current_user.books
  end

  def show
    render json: @book
  end

  def create
    @book = current_user.books.new(book_params)
    if @book.save
      render json: @book
    else
      render json: { errors: @book.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: { errors: @book.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
    render json: { message: "Book Deleted"}
  end

  private
    def set_book
      @book = current_user.books.find(params[:id])
    end

    def book_params
      params.require(:book).permit(:title, :descript, :start_date, :end_date, :color)
    end

end
