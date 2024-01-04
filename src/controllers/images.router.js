const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.memoryStorage();
const upload = multer({ storage }).single("file");

const multerUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload(req, res, (err) => {
      if (err) {
        console.error(err);
        reject("Error al subir la imagen");
      }
      resolve(req.file);
    });
  });
};

const uploadImage = async (req, res) => {
  try {
    const file = await multerUpload(req, res);
    const uniqueFilename = uuidv4() + "-" + file.originalname;
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        public_id: uniqueFilename,
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          console.error(error);
          res.status(500).json({
            success: false,
            error: "Error interno del servidor",
          });
        } else {
          res.status(200).json({ success: true, imageUrl: result.secure_url });
        }
      }
    );
    require("stream").PassThrough().end(file.buffer).pipe(uploadStream);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Error interno del servidor",
    });
  }
};

module.exports = { uploadImage };
