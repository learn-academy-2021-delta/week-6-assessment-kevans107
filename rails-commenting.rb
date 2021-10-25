# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ---2) The controller method index is returning all instances of BlogPosts within the database
    @posts = BlogPost.all
  end

  def show
    # ---3) The controller method show is using the .find method to return a specific id within the URL. The line is enumerating through the database to find a specific id within the model.
    @post = BlogPost.find(params[:id])
  end

  # ---4) The controller method new is use to create a form for the user to input new information to the database 
  def new
    @post = Post.new
  end

  def create
    # ---5) The controller method create is the second piece after the form is created with the 'new' controller method. The create method is generating the new user input into the database with specific parameters to control what is input by users. The method 'blog_post_params' are passed through the .create() built-in method to tell the application what information is required and what is permitted. A conditional statement tells the program to redirect the user to the new inputted blog post after it is submitted, or if the new post is not valid it will keep the user on the same page with the redirect to new_blog_post_path. The 'blog_post' and 'new_blog_post' on line 30 and 32 reference a specific route, and _path is how the program understands that is the location the user needs to be redirected to. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) The controller method edit is using the .find built-in method to identify a specific blog post instance to be edited within the database. An input from the user selecting a specific instance will allow the database instance to be edited by the user. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The controller update method is taking in the user inputted information and comparing it against the blog_post_params which require a :blog_post entry and permits the user to include a :title and :content. A conditional statement indicates that if the post meets the params then the user will be redirected to the blog_post_path they have just created. Otherwise, users will remain on the edit_blog_post page.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The redirect_to blog_post_path(@post) will take the user to the blog_post page they were attempting to delete if the application was unable to destry the database instance. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private means that everything below this line in the controller file is inexcessible to the user. This is a security measure so that hackers and others are unable to alter the params within the application. This helps to keep the application and database organized and secure. 
  private
  def blog_post_params
    # ---10) Below are the required and permitted params for the controller method blog_post_params. The code indicates which user inpuuted information is required (:blog_post) and which are permitted for the user (:title, :content)
    params.require(:blog_post).permit(:title, :content)
  end
end
