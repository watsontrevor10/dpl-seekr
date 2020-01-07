class Api::ContactsController < ApplicationController

  before_action :set_job
  before_action :set_contact, only: [:show, :update, :destroy]

  def index
    render json: @job.contacts.all 
  end

  def show
    render json: @contact
  end

  def create
   contact = @job.contacts.new(contact_params)
   
      if contact.save 
        render json: @contact
      else 
        render json: @contact.errors 
      end 
  end

  def update
    if @contact.update(contact_params)
      render json: @contact 
    else 
      render json: @contact.errors
    end 
  end 

  def destroy
    @contact.destroy 
  end

  private

  def contact_params 
    params.require(:contact).permit(:first_name, :last_name, :phone, :email, :position, :department, :description)
  end 

  def set_job
    @job = Job.find(params[:job_id])
  end

  def set_contact 
    @contact = Contact.find(params[:id])
  end
end
