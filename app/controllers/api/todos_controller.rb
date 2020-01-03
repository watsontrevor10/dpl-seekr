class Api::TodosController < ApplicationController
  before_action :set_interview
  before_action :set_todo, :only[:update, :destroy]
  def index
    render json: @interview.todos.all
  end
  def create
    @todo = @interview.todos.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors
    end
  end
  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors
    end
  end
  def destroy
    @todo.destroy
  end
  private
    def set_interview
      @interview = Interview.find(params[:interview_id])
    end
    def set_todo
      @todo = Todo.find(params[:id])
    end
    def todo_params
      params.require(:todo).permit(:due_date, :complete_date, :subject, :notes)
    end
end