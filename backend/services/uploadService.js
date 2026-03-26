const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const path = require('path');

// Configure AWS S3 Client
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// Configure Multer Storage for S3
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically set content type
        contentDisposition: 'inline', // Ensure PDF opens in browser instead of downloading
        cacheControl: 'max-age=31536000', // Cache for faster loading on subsequent views
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const extension = path.extname(file.originalname);
            // Store inside 'resumes' folder for HR platform
            cb(null, `resumes/${file.fieldname}-${uniqueSuffix}${extension}`);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|webp|pdf|doc|docx/;
        const mimetypes = /image\/jpeg|image\/png|image\/webp|application\/pdf|application\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document/;

        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = mimetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Error: Only images and documents (PDF/DOC) are allowed!'));
        }
    }
});

module.exports = upload;
