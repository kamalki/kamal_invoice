class Invoice < ActiveRecord::Base

   validates :customer, :presence => true
   validates :phone_number,:presence => true,:numericality => true,:length => { :minimum => 10, :maximum => 15 }
   validates :email_id, email: true

   has_many :productinvoices
   has_many :products, through: :productinvoices
end
