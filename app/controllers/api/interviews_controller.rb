class Api::InterviewsController < ApplicationController
  before_action :set_job
  before_action :set_interview, only: [:show, :update, :destroy]

  def index
    render json: @job.interviews
  end

  def show
    render json: @interview
  end

  def create
    interview = @job.interviews.new(interview_params)

    if interview.save
      render json: interview
    else
      render json: interview.errors, status: 422
    end

  end

  def update

    if @interview.update(interview_params)
      render json: @interview
    else
      render json: @interview.errors, status: 422
    end

  end

  def destroy
    @interview.destroy
  end

  private

    def set_job
      @job = current_user.jobs.find(params[:job_id])
    end

    def set_interview
      @interview = @job.interviews.find(params[:id])
    end

    def interview_params
      params.require(:interview).permit(:date, :follow_up, :description, :interview_type, :subject)
    end

end
