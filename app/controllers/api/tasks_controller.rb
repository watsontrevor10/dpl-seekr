class Api::tasksController < ApplicationController
  before_action :set_interview
  before_action :set_task, :only[:update, :destroy]
  def index
    render json: @interview.tasks.all
  end
  def create
    @task = @interview.tasks.new(task_params)
    if @task.save
      render json: @task
    else
      render json: @task.errors
    end
  end
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors
    end
  end
  def destroy
    @task.destroy
  end
  private
    def set_interview
      @job = Interview.find(params[:job_id])
    end
    def set_task
      @task = task.find(params[:id])
    end
    def task_params
      params.require(:task).permit(:due_date, :complete_date, :subject, :notes)
    end
end