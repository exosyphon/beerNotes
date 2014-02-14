require 'spec_helper'

describe BeersController do
  describe 'GET #index' do
    it 'returns succesfully' do
      get :index

      expect(response.status) == 200
    end
  end
end
