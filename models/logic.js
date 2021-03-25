
const { resolveInclude } = require('ejs');
const express = require('express');
const port = 30000
const mysql = require('mysql');

module.exports = {
    displayHome: () => {
        return new Promise((resolve, reject)=>{
            const con = mysql.createConnection({
                host: 'db_container_test',
                user: 'docker',
                password: 'docker'
            })
            const data = {
                title: 'docker_test',
                content: 'Connected'
            }
            con.connect(function (err) {
                if (err) throw err;
                resolve(data)
            })
        })
    }
}