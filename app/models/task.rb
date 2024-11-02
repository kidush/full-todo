class Task < ApplicationRecord
  enum :status, pending: 0, complete: 1

  validates :name, presence: true
  validates :status, presence: true

  scope :by_status, ->(status) { where(status: status) }
end
