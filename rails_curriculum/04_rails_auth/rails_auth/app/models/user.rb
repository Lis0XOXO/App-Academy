class User < ApplicationRecord

  attr_reader :password 

  validates :username, :session_token, presence: true 
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  before_validation :ensure_session_token 

  def self.find_by_credentials(username, password)
    password_digest = BCrypt::Password.create(password)
    User.find_by(username: username, password_digest: password_digest)
  end

  def self.generate_session_token 
  end

  def reset_session_token! 
  end

  def ensure_session_token
  end

  def password= 
  end
end