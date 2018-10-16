class RoutesController < ApplicationController
    skip_before_action :authorized
    
    def index
      routes = Route.all
      render json: routes
    end
  
    def show
      route = Route.find(params[:id])
      render json: route
    end
  
    def new
      route = Route.new(route_params)
      render json: route
    end
  
    def create
      route = Route.new(route_params)
      route.user = current_user
      route.save
      render json: {
        route: route
      }
    end
  
    def edit
      route = Route.find(params[:id])
      render json: route
    end
  
    def update
      if route.update(route_params)
        render json: route
      else
        render json: route.errors
      end
    end
  
    def destroy
      route.destroy
    end
  
    private
      def route_params
        params.require(:route).permit(:name, :transportation, :distance, :user_id)
      end
  end