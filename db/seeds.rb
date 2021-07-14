# 1.times do
#   User.create(
#     email: "tonypizza@gmail.com",
#     password: "password",
#     name: "user"
#   )
  5.times do
    book = Book.create(
      title: Faker::Job.position,
      descript: Faker::Marketing.buzzwords,
      start_date: Faker::Date.between(from: 20.days.ago, to: Date.today),
      end_date: Faker::Date.between(from: 3.days.ago, to: Date.today),
      color: Faker::Color.hex_color,
      user_id: 1
    )
    3.times do
      day = Day.create(
        day_date: Faker::Date.between(from: 2.days.ago, to: Date.today),
        book_id: book.id
      )
      
      col = Col.create(
        title: Faker::Verb.simple_present,
        day_id: day.id
      )
      
      Card.create(
        title: Faker::Job.field,
        notes: Faker::Job.key_skill,
        end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
        col_id: col.id
      )
    end
  # end
end

puts "Data seeded"