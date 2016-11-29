class GarsController < ApplicationController
  before_action :set_gar, only: [:show, :update, :destroy]

  # GET /gars
  def index
    @gars = Gar.all

    render json: @gars
  end

  # GET /gars/1
  def show
    render json: @gar
  end

  # POST /gars
  def create
    @gar = Gar.new(gar_params)

    if @gar.save
      render json: @gar, status: :created, location: @gar
    else
      render json: @gar.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gars/1
  def update
    if @gar.update(gar_params)
      render json: @gar
    else
      render json: @gar.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gars/1
  def destroy
    @gar.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gar
      @gar = Gar.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def gar_params
      params.require(:gar).permit(:supervision, :planning, :team_selection, :team_fitness, :environment, :complexity)
    end
end
