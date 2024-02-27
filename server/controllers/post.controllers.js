export const uploadController = (req, res) => {
  try {
    res.send({
      data: req.files,
    });
  } catch (err) {
    console.log("some error occured");
  }
};
