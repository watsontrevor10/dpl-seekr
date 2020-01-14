class Api::JobsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_job, only: [:show, :update, :destroy]

  def index
    render json: current_user.jobs.all
  end

  def tasks_due
    user = current_user.id
    # binding.pry
    render json: current_user.jobs.tasks_due(user, params[:filter_date])
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

end
