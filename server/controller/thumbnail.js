import Jimp from "jimp";

/**
 * Image Thumbnail Generation
 */
class CreateThumbnail {
  static async create(req, res) {
    try {
      const image = await Jimp.read(req.body.image);
      if (error) throw err;
      image.resize(50, 50).write("thumbnail.jpg");
      res.json({
        success: true,
        message: "Image generated"
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Image generation failure"
      });
    }
  }
}

export default CreateThumbnail;
