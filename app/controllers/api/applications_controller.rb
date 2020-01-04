class Api::ApplicationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_app, only: [:show, :update, :destroy]

  def index
    render json: current_user.applications
  end

  def show
    render json: @application
  end

  def create
    application = Application.new(app_params)

    if application.save
      render json: application 
    else
      render json: application.errors, status: 422
    end
  end

  def update
    if @application.update(application_params)
      render json: @application
    else 
      render json: application.errors, status: 422
    end
  end

  def destroy
    @application.destroy
  end

  
  private

  def set_app
    @application = current_user.application.find(params[:id])
  end

  def app_params 
    params.require(:application).permit(:date, :follow_up_date, :notes, :status, :job_title, :company_name)
  end
end
