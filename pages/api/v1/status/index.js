function status(request, response) {
  response.status(200).json({ chave: "top" });
}

export default status;
