class TasksController < ApplicationController
  before_action :set_task, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /tasks
  def index
    @tasks = Task.all
    render inertia: 'Task/Index', props: {
      tasks: @tasks.map do |task|
        serialize_task(task)
      end
    }
  end

  # GET /tasks/1
  def show
    render inertia: 'Task/Show', props: {
      task: serialize_task(@task)
    }
  end

  # GET /tasks/new
  def new
    @task = Task.new
    render inertia: 'Task/New', props: {
      task: serialize_task(@task)
    }
  end

  # GET /tasks/1/edit
  def edit
    render inertia: 'Task/Edit', props: {
      task: serialize_task(@task)
    }
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      redirect_to @task, notice: "Task was successfully created."
    else
      redirect_to new_task_url, inertia: { errors: @task.errors }
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      redirect_to @task, notice: "Task was successfully updated."
    else
      redirect_to edit_task_url(@task), inertia: { errors: @task.errors }
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy!
    redirect_to tasks_url, notice: "Task was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:name, :description, :status)
    end

    def serialize_task(task)
      task.as_json(only: [
        :id, :name, :description, :status
      ])
    end
end
