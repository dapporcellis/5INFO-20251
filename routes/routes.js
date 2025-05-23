import express from 'express';
const router = express.Router();

import { 
            olaMundo, 
            tabuada,
            calculadora,
            abreCalculadora,
            abreIndex,
            abreTabuada,
            abreaddusuario,
            addusuario,
            listarusuarios,
            filtrarusuarios,
            delusuario,
            abreedtusuario,
            edtusuario,
            abreaddcomentario,
            addcomentario,
            listarcomentarios,
            filtrarcomentarios,
            abreedtcomentario,
            edtcomentario,
            delcomentario
        } from '../controllers/controllers.js';

router.get('/formulario',abreIndex)
router.post('/formulario',olaMundo)
router.get('/calculadora',abreCalculadora)
router.post('/calculadora',calculadora)
router.get('/tabuada',abreTabuada)
router.post('/tabuada',tabuada)

router.get('/addusuario', abreaddusuario)
router.post('/addusuario',addusuario)

router.get('/lstusuarios',listarusuarios)
router.post('/lstusuarios',filtrarusuarios)

router.get("/edtusuario/:id",abreedtusuario)
router.post("/edtusuario/:id",edtusuario)

router.get("/delusuario/:id",delusuario)


router.get('/addcomentario', abreaddcomentario)
router.post('/addcomentario',addcomentario)

router.get('/lstcomentarios',listarcomentarios)
router.post('/lstcomentarios',filtrarcomentarios)

router.get("/edtcomentario/:id",abreedtcomentario)
router.post("/edtcomentario/:id",edtcomentario)

router.get("/delcomentario/:id",delcomentario)

export default router