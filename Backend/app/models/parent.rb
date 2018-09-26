class Parent < ApplicationRecord
  validates :name, presence: true;
  validates :petname, presence: true;
  validates :email, presence: true;
  validates :phone, presence: true;
  validates :interest, presence: true
end
