const express = require('express');
const app = express();

app.use(express.json()); // รองรับ JSON Body

// Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
});

// ตัวอย่าง Method ต่าง ๆ
app.get('/api/ip', (req, res) => {
    res.send('GET IP');
});

app.post('/api/ip', (req, res) => {
    res.send('POST IP');
});

app.put('/api/ip', (req, res) => {
    res.send('PUT IP');
});

app.patch('/api/ip', (req, res) => {
    res.send('PATCH IP');
});

app.delete('/api/ip', (req, res) => {
    res.send('DELETE IP');
});

app.listen(3000, () => {
    console.log("Hello World");
});
