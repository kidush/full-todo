require "test_helper"

class TaskTest < ActiveSupport::TestCase
  context "validations" do
    should validate_presence_of(:name)
    should validate_presence_of(:status)

    should define_enum_for(:status).with_values(%w[pending complete])
  end
end
