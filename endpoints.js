module.exports.start = async function start(app, Data){
    app.post('/data', async (req, res) => {
        try {
            const data = new Data(req.body);
            await data.save();
            return res.send();
        } catch (err) {
            console.log('failed to store data: ', err);
            res.status(500).send();
        }
    });

    app.get('/data', async (req, res) => {
        Data.find({}, {
            _id: false,
            windSpeed: true,
            rotations: true,
            windDirection: true,
            shaking: true,
            powerOutput: true,
            createdAt: true,
        })
        .sort({createdAt: 'desc'})
        .limit(5)
        .then((data) => res.send(data))
        .catch((err) => {
            console.log('failed to retrieve data: ', err);
            res.status(500).send();
        });
    });
}
