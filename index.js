const Sequelize = require('sequelize');
const sequelize = new Sequelize('icdl', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
  skillcard_code:  {
    type: Sequelize.STRING
  },
  documento:   {
      type: Sequelize.STRING
    },
  nombres:   {
      type: Sequelize.STRING
    },
  apellidos:   {
      type: Sequelize.STRING
    },
  fecha_nacimiento:   {
      type: Sequelize.STRING
    },
  edad:  {
      type: Sequelize.STRING
    },
  estrato:   {
      type: Sequelize.STRING
    },
  genero:   {
      type: Sequelize.STRING
    },
  tipo_discapacidad:  {
      type: Sequelize.STRING
    },
  email_1:   {
      type: Sequelize.STRING
    },
  email_2:  {
      type: Sequelize.STRING
    },
  email_3:  {
      type: Sequelize.STRING
    },
  telefono_1:   {
      type: Sequelize.STRING
    },
  telefono_2:  {
      type: Sequelize.STRING
    },
  celular_1:   {
      type: Sequelize.STRING
    },
  celular_2:  {
      type: Sequelize.STRING
    },
  pais:  {
      type: Sequelize.STRING
    },
  departamento:   {
      type: Sequelize.STRING
    },
  ciudad:   {
      type: Sequelize.STRING
    },
  direccion:   {
      type: Sequelize.STRING
    },
  nivel_educativo:   {
      type: Sequelize.STRING
    },
  nivel_ingles:  {
      type: Sequelize.STRING
    },
  profesion:  {
      type: Sequelize.STRING
    },
  titulo_postgrado:  {
      type: Sequelize.STRING
    },
  area_laboral:   {
      type: Sequelize.STRING
    },
  actividad_laboral:   {
      type: Sequelize.STRING
    },
  cargo:  {
      type: Sequelize.STRING
    },
  empresa:   {
      type: Sequelize.STRING
    },
  fecha_registro:   {
      type: Sequelize.STRING
    },
  skype:  {
      type: Sequelize.STRING
    },
  linkedIn:  {
      type: Sequelize.STRING
    },
  curso:  {
      type: Sequelize.STRING
    },
  constancia:  {
      type: Sequelize.STRING
    },
  certificado:  {
      type: Sequelize.STRING
    },
  temas:  {
      type: Sequelize.STRING
    },
  observacion:  {
      type: Sequelize.STRING
    },
  medio:   {
      type: Sequelize.STRING
    },
  autorizacion:  {
      type: Sequelize.STRING
    },
  exam_1:  {
      type: Sequelize.STRING
    },
  grade_1:  {
      type: Sequelize.STRING
    },
  result_1:   {
      type: Sequelize.STRING
    },
  taken_date_1:  {
      type: Sequelize.STRING
    },
  exam_2:  {
      type: Sequelize.STRING
    },
  grade_2:  {
      type: Sequelize.STRING
    },
  result_2:  {
      type: Sequelize.STRING
    },
  taken_date_2:  {
      type: Sequelize.STRING
    },
  exam_3:  {
      type: Sequelize.STRING
    },
  grade_3:  {
      type: Sequelize.STRING
    },
  result_3:  {
      type: Sequelize.STRING
    },
  taken_date_3:  {
      type: Sequelize.STRING
    },
  tipo:  {
    type: Sequelize.STRING
  } 
});

const fs = require('fs'); 
const csv = require('csv-parser');
const Op = Sequelize.Op

fs.createReadStream('peronas-22.csv')
.pipe(csv())
.on('data', function(data){
    try {
      let or = [];
      if(data.Row.documento != ''){
        or.push({'documento': data.Row.documento});
      }
      if(data.Row.email_1 != ''){
        or.push({'email_1': data.Row.email_1});
      }
      if(data.Row.email_2 != ''){
        or.push({'email_2': data.Row.email_2});
      }
      if(data.Row.email_3 != ''){
        or.push({'email_3': data.Row.email_3});
      }
      
      User.findOne({},{where:{ [Op.or]: or }}).then(user => {
        if(user){

        }else{
          const newUser = Task.build(data);
          newUser.save().then(() => {
            
          });
        }
      });

      // console.log(data);
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){
    //some final operation
}); 



