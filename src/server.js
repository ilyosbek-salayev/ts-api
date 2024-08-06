"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/app/images', (req, res) => {
    res.json(data_1.images);
});
// Yangi rasim qo'shish
app.post('/api/images', (req, res) => {
    const { id, image } = req.body;
    const newImage = { id, image };
    data_1.images.push(newImage);
    res.status(201).json(newImage);
});
// Rasimni O'chirish 
app.delete('/api/images/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data_1.images.findIndex(image => image.id === id);
    if (index !== -1) {
        data_1.images.splice(index, 1);
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
