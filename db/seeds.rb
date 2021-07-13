5.times do
  book = Book.create(
    title: Faker::Job.position,
    descript: Faker::Marketing.buzzwords,

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
      end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
      notes: Faker::Job.key_skill,
      col_id: col.id
    )
  end
end

puts "Data seeded"