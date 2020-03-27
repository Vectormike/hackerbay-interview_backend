import jsonpatch from "jsonpatch";

class PatchController {
  static async patchDoc(req, res) {
    let thepatch = req.body.patch;
    let mydoc = req.body.document;
    try {
      const patchedDoc = await jsonpatch.apply_patch(mydoc, thepatch);
      res.json({
        success: true,
        data: patchedDoc
      });
    } catch (error) {
      res.json({
        success: false,
        message: error
      });
    }
  }
}

export default PatchController;
