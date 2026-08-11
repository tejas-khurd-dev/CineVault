import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

const ALLOWED_MIME_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
];

const ALLOWED_EXTENSIONS = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
];

const upload = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB max
    },
    fileFilter: (req, file, cb) => {
        const isAllowedMime = ALLOWED_MIME_TYPES.includes(file.mimetype);

        const isAllowedExt = ALLOWED_EXTENSIONS.includes(
            path.extname(file.originalname).toLowerCase()
        );

        if (isAllowedMime || isAllowedExt) {
            return cb(null, true);
        }

        cb(
            new Error(
                `Only JPG, JPEG, PNG, and WebP files are allowed. Received: ${file.mimetype}`
            )
        );
    },
});

const storePFP = upload.single("pfp");

export default storePFP;