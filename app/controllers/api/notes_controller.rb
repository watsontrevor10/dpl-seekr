class Api::NotesController < ApplicationController
  before_action :set_job
  before_action :set_note, :only[:update, :destroy]

  def index
    render json: @job.notes.all
  end

  def create
    @note = @job.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: @note.errors
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
      @job = current_user.jobs.find(params[:job_id])
    end
    def set_note
      @note = @job.note.find(params[:id])
    end
    def note_params
      params.require(:note).permit(:body)
    end
end