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
    render component: "PersonNew"
  end

  def edit
    @person = Person.find(params[:id])
    render component: "PersonEdit", props:{person:@person}
  end

  def update
    @person = Person.find(params[:id])
    if( @person.update(person_params))
      redirect_to people_path
    else
    end
  end

  def create
    person = Person.new(person_params)
    if person.save
      redirect_to people_path
    else
    end
  end

  def destroy
    @person = Person.find(params[:id])
    @person.destroy
    redirect_to people_path
  end

  private

  def person_params
    params.require(:person).permit(:name, :age)
  end

end
