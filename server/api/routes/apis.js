const serverForms = require('./forms.js');
const express = require('express')
const { readData, writeData } = require('../../readwrite')
const inside = require('point-in-polygon');
const router = express.Router();


router.get('/forms', (req, res, next) => {
    res.status(200).json({
        forms: serverForms
    })
})


router.get('/forms/:id', (req, res, next) => {
    let id = req.params.id;
    let form = null;
    serverForms.map((item, i) => {
        if (item.id === id) {
            form = item
        }
    })
    res.status(200).json({
        form: form,
    })
})


router.put('/forms/send', (req, res, next) => {
    const values = req.body.values

    //writeData(values)
    res.status(200).json({
        message: 'values added successfully.',
        values,
    })
})


module.exports = router