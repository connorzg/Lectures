class Person
  attr_reader :age
  attr_accessor :last_name, :first_name

  def initialize(first_name, last_name, age)
    @first_name = first_name
    @last_name = last_name
    @age = age
  end

  def self.foo
    'bar'
  end

  def full_info
    "#{first_name} #{last_name}, age #{age}"
  end

end

class Student < Person
  attr_accessor :expected_salary

  def initialize(first_name:, last_name:, age:, expected_salary:)
    super(first_name, last_name, age)
    self.expected_salary = expected_salary
  end

end

student = Student.new(first_name: 'Connor', last_name: 'Garber', age: 20, expected_salary: 70000)
puts student.full_info
puts student.expected_salary
