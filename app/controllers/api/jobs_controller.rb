class Api::JobsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_job, only: [:show, :update, :destroy]
  before_action :set_user_id, only: [:tasks_due, :upcoming_interviews, :index, :job_graph, :apps_over_time]
  
  
  def index
    Job.archive(@user_id)
    render json: current_user.jobs.all
  end
  
  def tasks_due
    render json: current_user.jobs.tasks_due(@user_id, params[:filter_date])
  end
  
  def job_graph
    render json: current_user.jobs.total_jobs(@user_id)
  end
  
  def apps_over_time
    render json: current_user.jobs.apps_over_time(@user_id)
  end

  def upcoming_interviews
    render json: current_user.jobs.upcoming_interviews(@user_id, params[:filter_date])
  end

  def show
    render json: @job
  end

  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors, status: 422
    end
  end

  def create
    job = current_user.jobs.new(job_params)
    if job.save
      render json: job
    else
      render json: job.errors, status: 422
    end
  end

  def destroy
    @job.destroy
  end

  private
    def job_params
      params.require(:job).permit(:date_applied, :company_name, :job_title, :job_url, :salary, :location, :description, :status, :color)
    end

    def set_job
      @job = Job.find(params[:id])
    end

    def set_user_id
      @user_id = current_user.id
    end
end
