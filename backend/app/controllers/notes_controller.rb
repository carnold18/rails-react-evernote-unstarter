class NotesController < ApplicationController
  
  def index
    notes = Note.all
    render json: notes
  end

  def show
    note = Note.find(params[:id])
    render json: note
  end

  def new
    note = Note.new(note_params)
    render json: note
  end

  def create
    note = Note.new(note_params)

    if note.save
      render json: note
    else
      render json: note.errors
    end
  end

  def edit
    note = Note.find(params[:id])
    render json: note
  end

  def update
    if note.update(note_params)
      render json: note
    else
      render json: note.errors
    end
  end

  def destroy
    note.destroy
  end

  private
    def note_params
      params.require(:note).permit(:title, :body, :user_id)
    end
end
