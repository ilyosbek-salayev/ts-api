import express, { Request, Response } from "express";
import { Image, images } from "./data";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/app/images', (req: Request, res: Response) => {
  res.json(images);
})

// Yangi rasim qo'shish

app.post('/api/images', (req: Request, res: Response) => {
  const {id, image} = req.body;
  const newImage: Image = {id, image};
  images.push(newImage);
  res.status(201).json(newImage);
});

// Rasimni O'chirish 
app.delete('/api/images/:id', (req: Request, res:Response) => {
  const id = parseInt(req.params.id);
  const index = images.findIndex(image => image.id === id);
  if (index !== -1) {
    images.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
})