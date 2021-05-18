const { v4: uuidV4 } = require("uuid");

class Band {
  constructor(name = "no-name") {
    this.id = uuidV4(); //새로운 식별자 생성
    this.name = name;
    this.votes = 0;
  }
}

module.exports = Band;
