const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
});

api.get("repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {
  let users = ret.data.filter(e => e.user.login != "sombriks" && new Date(e.created_at) < new Date("2017-09-15"))
  for(let i = 0; i < users.length; i++)
  {
    //console.log(users.length)
    console.log(users[i].user.login)
  }
})