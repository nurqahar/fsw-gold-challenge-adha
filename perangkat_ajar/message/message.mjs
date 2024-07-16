class Message {
  listen(port) {
    return `listen on: localhost:${port}`;
  }
  listenApi(port) {
    return `API run at: http://localhost:${port}/api/`;
  }

  notFound() {
    return Error("404! NOT FOUND");
  }

  errLoadView() {
    return Error("500! Error Loading View");
  }

  responseStatus(response, status_code, message) {
    response.status(status_code).send(message);
  }
}
export default Message;
