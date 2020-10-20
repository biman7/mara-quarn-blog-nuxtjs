const express = require('express');
const models = require("./database/models");

const app = express();

app.get("/posts", async (req, res) => {
    const posts = await models.Post.findAll();
    res.send(posts);
});

app.get("/posts/:pid", async (req, res) => {
    const id = req.params.pid;
    const post = await models.Post.findOne({ where: { id } });
    if (post == null)
        return res.status(404).send({
            message: "Unknown Post"
        });
    res.send(post);
});

module.exports = {
    path: '/api',
    handler: app
}
