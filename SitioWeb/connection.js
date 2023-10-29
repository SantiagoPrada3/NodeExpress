var express = require("express")

var mysql = require("mysql")

var app = express()

var cors = require("cors")

//llamamos a la app para que use el express.json
app.use(express.json())
//llamamos a la app para que utilice la dependecia cors
app.use(cors())

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "dbcolegiojbs"
})

conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Conexión exitosa");
    }
});

const puerto = process.env.PUERTO || 3001;

app.listen(puerto, function () {
    console.log("Servidor funcionando en puerto: " + puerto);
});


app.post(
    "/api/formulario", (req, res) => {
        let data = {
            nombres: req.body.nombresform,
            apellidos: req.body.apellidosform,
            tipo_documento: req.body.tipo_documentoform,
            numero_documento: req.body.numero_documentoform,
            email: req.body.emailform,
            celular: req.body.celularform,
            asunto: req.body.asuntoform,
            mensaje: req.body.mensajeform,
        };
        let sql = "INSERT INTO formulario SET ?";
        conexion.query(
            sql, data, function (error, results) {
                if (error) {
                    throw error;
                } else {
                    console.log(data);
                    res.send(data);
                }
            }
        );
    }
);

app.get("/api/formulario", (req, res) => {
    let sql = "SELECT * FROM formulario";
    conexion.query(
        sql, (error, results) => {
            if (error) {
                throw error;
            } else {
                console.log(results);
                res.send(results);
            }
        }
    );
}
);