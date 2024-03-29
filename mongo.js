const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://FedePeira:${password}@notes-test.w6zwvex.mongodb.net/noteAppPractice?retryWrites=true&w=majority`


mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'HTML is Easy',
    important: true,
})

note.save().then(() => {
    console.log('note saved!')
    mongoose.connection.close()
})
