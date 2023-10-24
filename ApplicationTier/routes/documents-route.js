const express = require('express');
const { getAllDocuments, uploadDocuments, handleUpload } = require('../controllers/documents-controller');
const router = express.Router();

router.get('/', getAllDocuments)
router.post('/upload', uploadDocuments, handleUpload)

module.exports = router;

// function insertDocData () {
//     Document.insertMany([
//         {
//             name: "ToDoList",
//             owner: "Nam"
//         }
//     ])
// }

// insertDocData();

// router.get('', async (req, res) => {
//     const locals = {
//         title: "Testing",
//         description: "I don't know what will happen."
//     }
//     try {
//         const data = await Document.find();
//         res.render('index', { locals, data});
//     } catch (error) {
//         console.log(error);
//     }
// });