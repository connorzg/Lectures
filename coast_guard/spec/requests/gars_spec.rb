require 'rails_helper'

RSpec.describe "Gars", type: :request do
  describe "GET /gars" do
    it "works! (now write some real specs)" do
      get gars_path
      expect(response).to have_http_status(200)
    end
  end
end
