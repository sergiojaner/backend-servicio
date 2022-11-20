const { response } = require('express');
const Usuario  = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { crearToken } = require('../helpers/jwt');

const login = async(req, res = response) => {

  const {email, password} = req.body;

   try {
    //Verificar email

    // const usuarioDB = await Usuario.findOne({email});
    // if(!usuarioDB){
    //   return res.status(404).json({
    //     ok: false,
    //     msg:'No se encontró usuario con ese correo'
    //   })
    // }

    //Verificar password del body vs del que tienes de ese usuario encontrado

    // const passwordDB = await bcrypt.compareSync( password, usuarioDB.password)
    // if(!passwordDB){
    //   return res.status(404).json({
    //     ok: false,
    //     msg:'la contraseña es incorrecta'
    //   })
    // }

    //Token generado
    const token = await crearToken(usuarioDB.id);

    res.json({
        ok: true,
        msg: 'logeado con exito',
        // usuarioDB,
        token
    })
    
   } catch (error) {
     console.log(error);
     res.status(500).json({
        ok: false,
        msg: 'Favor de hablar con el administrador'
     })
   }
}

const renovarToken = async(req, res = response) =>{
  const uid = req.uid;

  //Generar token
  const token = await crearToken(uid);

  //Obtención del usuario

//   const usuario = await Usuario.findById(uid)

  res.json({
    ok: true,
    token,
    //usuario
  })

}

module.exports = {
    login,
    renovarToken
}