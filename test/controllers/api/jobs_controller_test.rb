require 'test_helper'

class Api::JobsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_jobs_index_url
    assert_response :success
  end

  test "should get update" do
    get api_jobs_update_url
    assert_response :success
  end

end
