const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('build'));

const data = [
    {   
        id: 1,
        timestamp: Date.now(),
        title: 'Get coffee',
        complete: false,
    },
    {   
        id: 2,
        timestamp: Date.now(),
        title: 'Tidy bedroom',
        complete: false,
    },
    {   
        id: 3,
        timestamp: Date.now(),
        title: 'Write code',
        complete: true,
    }
];

app.get('/api/tasks', (req, res) => {
    res.json(data);
}); 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});