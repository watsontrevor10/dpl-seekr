class Api::ApplicationsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.applications
  end

  def show
    render json: @application
  end

  def create
    application = current_user.application.new(application_params)

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

  def set_application
    @application = current_user.application.find(params[:id])
  end

  def application_params 
    params.require(:application).permit(:date, :follow_up_date, :notes, :status)
  end
end
