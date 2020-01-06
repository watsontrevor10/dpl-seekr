class Api::InterviewsController < ApplicationController
  before_action :set_application
  before_action :set_interview, only: [:show, :update, :destroy]

  def index
    render json: @application.interviews
  end

  def show
    render json: @interview
  end

  def create
    interview = @application.interviews.new(interview_params)

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

    def set_application
      @application = current_user.applications.find(params[:application_id])
    end

    def set_interview
      @interview = @application.interviews.find(params[:id])
    end

    def interview_params
      params.require(:interview).permit(:date, :time, :thank_you, :follow_up, :notes, :type)
    end

end
