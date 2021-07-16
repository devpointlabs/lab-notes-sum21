@color = [
  "linear-gradient(to right, rgba(152, 72, 150, 1), rgba(152, 72, 255, .73))", 
  "linear-gradient(to right, rgba(64, 125, 96, 1), rgba(64, 125, 96, 0.75))", 
  "linear-gradient(to right, rgba(215, 110, 51, 0.9), rgba(215, 110, 51, 0.63))", 
  "linear-gradient(to right, rgba(68, 188, 224, 0.9), rgba(68, 188, 224, 0.55))", 
  "linear-gradient(to right, rgba(66, 72, 127, 1), rgba(66, 72, 127, 0.75))"]



5.times do
  book = Book.create(
    title: Faker::Job.position,
    descript: Faker::Marketing.buzzwords,
    start_date: Faker::Date.between(from: 20.days.ago, to: Date.today),
    end_date: Faker::Date.between(from: 3.days.ago, to: Date.today),
    color: @color.sample,
    user_id: 1
  )
  3.times do
    day = Day.create(
      day_date: Faker::Date.between(from: 2.days.ago, to: Date.today),
      book_id: book.id
    )
    
    col = Col.create(
      title: Faker::FunnyName.two_word_name,
      day_id: day.id
    )
    
    Card.create(
      title: Faker::Job.field,
      notes: Faker::Job.key_skill,
      end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
      col_id: col.id
    )
  end
end

puts "Data seeded"