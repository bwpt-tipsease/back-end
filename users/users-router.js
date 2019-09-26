const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const fileupload = require('express-fileupload');
const restricted = require('../auth/authenticate-middleware');
const db = require('../database/dbConfig');

router.use(fileupload({
    useTempFiles: true,
}));

router.post('/upload', async (req, res) => {
    try {
        const { decodedToken } = req;
        const id = decodedToken.sub;
        const { img } = req.files;
        const user = await db('users').where({ id }).first();
        if (!user) throw new Error(404);
        cloudinary.uploader.upload(img.tempFilePath, 
            {
                timeout: 60000,
                eager: [ 
                    { width: 200, height: 200, gravity: 'face', crop: 'crop', } 
                ],
            },
            (err, result) => {
            if (err) throw new Error();
            const user = await db('users').where({ id }).first();
            const updated = await db('serviceWorkers').where({ 'id': user.service_worker_id }).returning('*').update({ photo: result.eager[0].url });
            res.status(201).json({ updated });
        });
    } catch(err) {
        switch(err.message){
            case '404':
                return res.status(404).json({ error: 'No user found with that ID.' });
            default:
                return res.status(500).json({ error: 'There was a problem while trying to upload image.' });
        }
    }
});

module.exports = router;