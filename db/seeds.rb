status = [
  'Wishlist',
  'Applied', 
  'Offer',
  'Interviewed', 
  'Rejected',
]

interview_type = [
  'Phone',
  'In-Person',
  'Code Challenge',
  'Whiteboard',
]

department = [
  'Software Engineering',
  'Recruiting',
  'Quality Assurance',
  'Software Testing',
  'Dev Ops',
]

task_verbs = [
  'Call',
  'Follow-up with', 
  'Text', 
  'Email',
]

card_colors = [
  "#2d3a66", 
  "#5b6293",
  "#070059", 
  "#3d1a68", 
  "#5e2d5e", 
  "#da5740",
]


1.times do
  User.create(
    email: 'test@test.com',
    password: 'password',
    name: 'Kenny G'
  )
end

20.times do
  j = Job.create(
    job_title: Faker::Job.title,
    salary: Faker::Number.between(from: 30000, to: 120000),
    status: status.sample,
    company_name: Faker::Company.name,
    date_applied: Faker::Date.between(from: 30.days.ago, to: Date.today),
    location: Faker::Address.city,
    color: card_colors.sample,
    user_id: 1, 
  )
  
  2.times do
    i = j.interviews.create(
      date: Faker::Date.between(from: 10.days.ago, to: 15.days.from_now),
      subject: 'Interview',
      description: Faker::Marketing.buzzwords,
      interview_type: interview_type.sample,
    )
  end

  10.times do
    n = j.notes.create(
      body: Faker::Lorem.paragraphs(number: 1),
    )
  end

  5.times do
    t = j.tasks.create(
      due_date: Faker::Date.forward(days: 30),
      subject: task_verbs.sample + ' ' + Faker::Name.first_name + ' ' + 'about' + ' ' + Faker::Hacker.adjective, 
    )
  end

  3.times do
    c = j.contacts.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone: Faker::PhoneNumber.cell_phone,
      email: Faker::Internet.email, 
      position: Faker::Job.position,
      department: department.sample,
      description: Faker::Company.catch_phrase,
    )
  end

end

puts 'Data Seeded'




