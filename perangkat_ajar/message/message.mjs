class Message {
  listen(port) {
    return `listen on: localhost:${port}`;
  }

  notFound() {
    return Error("404! NOT FOUND");
  }

  errLoadView() {
    return Error("500! Error Loading View");
  }
}
export default Message;
