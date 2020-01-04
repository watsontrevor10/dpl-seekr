require 'test_helper'

class Api::InterviewsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_interviews_index_url
    assert_response :success
  end

  test "should get show" do
    get api_interviews_show_url
    assert_response :success
  end

  test "should get create" do
    get api_interviews_create_url
    assert_response :success
  end

  test "should get update" do
    get api_interviews_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_interviews_destroy_url
    assert_response :success
  end

end
