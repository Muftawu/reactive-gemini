
const rand_text = () => {
      let vocab =
        "abcdKLMNOPQR345679!@#$%^&STUVWXYZ12efghijklmnopqrstuvwxyzABCDEDFGHIJ*()<>?";
      let vocab_size = vocab.length
      return vocab.slice(1, Math.random()*vocab_size)
}

// dummy data to be replaced with mongo_db
export const comms = [
      {
            query: 'what is the capital of Accra',
            response: rand_text(),

      },
      {
            query: 'Which country won the 2024 FIFA world cup',
            response: rand_text(),

      },
      {
            query: 'What is the most used programmming language',
            response: rand_text(),

      },
]

rand_text()