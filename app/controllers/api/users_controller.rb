class Api::UsersController < ApplicationController
  def update
    user = User.find(params[:id])
    user.name = params[:name] ? params[:name] : user.name
    user.email = params[:email] ? params[:email] : user.email
    
    file = params[:file] 
<<<<<<< HEAD
=======
    
>>>>>>> f45cbfe3e9e0bc363b384402259a975a2c9a8b68
    if file && file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        user.image = cloud_image['secure_url']
        if user.save 
          render json: user
<<<<<<< HEAD
        else
=======
        else 
>>>>>>> f45cbfe3e9e0bc363b384402259a975a2c9a8b68
          render json: { errors: user.errors.full_messages }, status: 422
        end
      rescue => e 
        render json: { errors: e }, status: 422
      end
    else
      if user.save 
        render json: user
      else 
        render json: { errors: user.errors.full_messages }, status: 422
      end
    end
  end
end
