class Api::TasksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_job, :set_jobs
  before_action :set_task, only: [:update, :destroy]
  
  def index
    if (params[:filter] == 'true') 
      render json: @job.tasks.all.where(completed: true).order(created_at: :desc)
    else 
      render json: @job.tasks.all.where(completed: false).order(created_at: :desc)
    end
  end

  def create
    task = @job.tasks.new(task_params)
    if task.save
      render json: task
    else
      render json: task.errors
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

    def set_jobs
      @jobs = Job.all
    end

    def set_job
      @job = Job.find(params[:job_id])
    end
  
    def set_task
      @task = Task.find(params[:id])
    end
  
    def task_params
      params.require(:task).permit(:due_date, :completed_date, :subject, :completed)
    end
end