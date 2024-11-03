exports.uploadFile = (req, res) => {
  const { hostname } = req.params;
  console.log(hostname);
};

exports.downloadFile = (req, res) => {
  const { userId } = req.body;

  console.log(userId);
};
