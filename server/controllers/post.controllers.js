export const uploadController = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: req.files,
    });
  } catch (err) {
    console.log("some error occured");
  }
};
