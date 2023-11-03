#!/usr/bin/env node

const http = require('http')
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from Docker Compose Watch'))

http.createServer(app).listen(3999)

