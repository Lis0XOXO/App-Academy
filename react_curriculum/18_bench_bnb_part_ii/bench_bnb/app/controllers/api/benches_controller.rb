class Api::BenchesController < ApplicationController 
  def index
    @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all
    
    if params[:max_seating] && params[:min_seating] 
      @benches = Bench.seating_range(params[:min_seating], params[:max_seating])
    end
    render 'api/benches/index'
  end 

  def create 
    @bench = Bench.new(bench_params) 

    if @bench.save 
      render 'api/benches/show'
    else 
      render json: @bench.errors.full_messages, status: 422
    end
  end 

  private 

  def bench_params 
    params.require(:bench).permit(:description, :lng, :lat, :seating, :max_seating, :min_seating)
  end
end