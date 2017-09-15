const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
});

api.get("repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {
  let users = ret.data.filter(e => e.user.login != "sombriks" && new Date(e.created_at) < new Date("2017-09-15"))
  console.log(users.length)
  for(let i = 0; i < users.length; i++)
  {
    console.log('Usuário: ' + users[i].user.login + '   Comentario: ' + users[i].body + '   Data: ' + users[i].created_at)
  }
})
