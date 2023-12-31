// import multer from 'multer';
// import { GridFsStorage } from 'multer-gridfs-storage';
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: `mongodb://jay:Jay8433$@ac-loyrtaa-shard-00-00.qpnwkwo.mongodb.net:27017,ac-loyrtaa-shard-00-01.qpnwkwo.mongodb.net:27017,ac-loyrtaa-shard-00-02.qpnwkwo.mongodb.net:27017/?ssl=true&replicaSet=atlas-fme8es-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
