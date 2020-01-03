class Interview < ApplicationRecord

  belongs_to :application
  has_many :todos, dependent: :destroy

end
