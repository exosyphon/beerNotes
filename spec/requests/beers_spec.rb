require 'spec_helper'

describe 'beer functionality', :js => true do
  it 'has content on the homepage' do
    visit root_path

    page.should have_content 'Beer Notes'
    click_on 'Beer List'

    by 'creates a new beer' do
      click_on 'Add Beer'

      click_on 'Save'

      page.should have_content 'Error'

      fill_in '#name', with: 'Mega Stout'
      fill_in '#type', with: 'Stout'
      fill_in '#notes', with: 'Some sweet notes'
    end
  end
end