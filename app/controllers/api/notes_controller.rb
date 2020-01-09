class Api::NotesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_job
  before_action :set_note, only: [:update, :destroy]

  def index
    render json: @job.notes
  end

  def create
    note = @job.notes.new(note_params)
    
    if note.save
      render json: note
    else
      render json: note.errors
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors
    end
  end

  def destroy
    @note.destroy
  end

  private
    def set_job
      @job = Job.find(params[:job_id])
    end
    def set_note
      @note = @job.notes.find(params[:id])
    end
    def note_params
      params.require(:note).permit(:body)
    end
end