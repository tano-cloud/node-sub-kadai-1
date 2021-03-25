const express = require('express');
const logic = require('../models/logic');
const viewUsers = './users/'

module.exports = {
    displayHome: (req, res, next) => {
        logic.displayHome().then((data) => {
            res.render(viewUsers + 'home', data);
        });
    },
}
