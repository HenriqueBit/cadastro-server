const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "cadastropintor.mysql.dbaas.com.br",
    user: "cadastropintor",
    password: "RESICOLOR2022",
    database: "cadastropintor",
});

app.post("/pintores", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const estado = req.body.estado;
    const cidade = req.body.cidade;
    const revenda = req.body.revenda;
  
    db.query(
      "INSERT INTO PINTORES (nome, email, telefone, estado, cidade, revenda) VALUES (?,?,?,?,?,?)",
      [nome, email, telefone, estado, cidade, revenda],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.listen(3000, function () {
    console.log("Rodando na porta 3000")
  })
