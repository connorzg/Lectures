require "rails_helper"

RSpec.describe GarsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/gars").to route_to("gars#index")
    end

    it "routes to #new" do
      expect(:get => "/gars/new").to route_to("gars#new")
    end

    it "routes to #show" do
      expect(:get => "/gars/1").to route_to("gars#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/gars/1/edit").to route_to("gars#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/gars").to route_to("gars#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/gars/1").to route_to("gars#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/gars/1").to route_to("gars#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/gars/1").to route_to("gars#destroy", :id => "1")
    end

  end
end
