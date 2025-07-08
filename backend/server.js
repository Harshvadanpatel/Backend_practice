const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send("server is ready");
})

app.get('/api/jokes',(req,res)=>{
   const jokes= [
  {
    "id": 1,
    "title": "Why don’t scientists trust atoms?",
    "content": "Because they make up everything!"
  },
  {
    "id": 2,
    "title": "What do you call fake spaghetti?",
    "content": "An *impasta*."
  },
  {
    "id": 3,
    "title": "Why did the scarecrow win an award?",
    "content": "Because he was outstanding in his field!"
  },
  {
    "id": 4,
    "title": "Why can’t your nose be 12 inches long?",
    "content": "Because then it would be a foot."
  },
  {
    "id": 5,
    "title": "What did one ocean say to the other ocean?",
    "content": "Nothing, they just waved."
  }
]
res.send(jokes);

})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server stat at port ${port}`)
})