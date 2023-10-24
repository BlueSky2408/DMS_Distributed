const Documents = require('../model/documents');
const multer = require('multer');
const maxSize = 10 * 1024 * 1024;

//get documents information from database
const getAllDocuments = async (req, res) => {
    try {
        const docs = await Documents.find();
        if (!docs || docs.length === 0) {
            return res.status(404).json({ message: "No documents found" });
        }
        res.status(200).json({ docs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//Upload files from local to database
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads/'); // Set the destination folder for uploads
//     },
//     filename: (req, file, cb) => {
//         console.log(file.originalname);
//         cb(null, file.originalname);
//     },
// });
const storage = multer.memoryStorage();

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
});

const uploadDocuments = upload.single('file');

const handleUpload = async (req, res) => {
    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const name = req.file.originalname;
    const { owner, type } = req.body;
    const content = req.file.buffer;
    const modified = new Date();
    const dateCreated = new Date();

    const size = req.file.size;

    // Create a new document entry in the database
    const newDocument = new Documents({
        name,
        owner,
        type,
        size,
        content,
        dateCreated,
        dateModified: modified,
    });

    try {
        const savedDocument = await newDocument.save();
        // return res.status(201).json({ message: 'Document uploaded and saved successfully', document: savedDocument });
        return res.status(201).json({ message: 'Document uploaded and saved successfully ' + name });
    } catch (error) {
        console.error(error);
        if (error.code == "LIMIT_FILE_SIZE") {
            return res.status(500).json({
                message: "File size cannot be larger than 10MB!",
            });
        }
        return res.status(500).json({ message: 'Failed to save the document' });
    }
};


module.exports = { getAllDocuments, uploadDocuments, handleUpload };