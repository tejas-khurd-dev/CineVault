import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png"];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png"];

const fileFilter = (req, file, cb) => {
    const isAllowedMime = ALLOWED_MIME_TYPES.includes(file.mimetype);

    const isAllowedExt = ALLOWED_EXTENSIONS.includes(
        path.extname(file.originalname).toLowerCase()
    );

    if (isAllowedMime || isAllowedExt) {
        return cb(null, true);
    }

    cb(
        new Error(
            `Only JPG, JPEG, and PNG files are allowed. Received: ${file.mimetype}`
        )
    );
};

const upload = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter,
});

const storeMovieImgs = upload.fields([
    { name: "poster", maxCount: 1 },
    { name: "backdrop", maxCount: 1 },
]);

export default storeMovieImgs;