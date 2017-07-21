class Project < ActiveRecord::Base
  validates :title, :website_url, :description, :category, :creator_id, :funding_goal, :end_date, presence: true;
  belongs_to :creator, foreign_key: :creator_id, class_name: :User
end