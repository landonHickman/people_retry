class PeopleController < ApplicationController
  def index
    @people = Person.all
    render component: "People", props:{people:@people}
  end

  def show
    @person = Person.find(params[:id])
    render component: "Person", props:{person:@person}
  end

  def new

  end

  def edit

  end

  def create

  end

  def destroy

  end

  private

  def person_params
    params.require(:person).permit(:name, :age)
  end

end
