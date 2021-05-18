const Band = require("./band");

class Bands {
  constructor() {
    this.bands = [];
  }

  addBand(band = new Band()) {
    console.log(band);
    this.bands.push(band);
  }

  getBands() {
    return this.bands;
  }

  deleteBand(id = "") {
    //삭제시 필터링 사용
    this.bands = this.bands.filter((band) => band.id !== id);
    return this.bands;
  }

  voteBand(id = "") {
    //각각의 요소를 변경을 해야 할 떄 map
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.votes++;
        return band;
      } else {
        return band;
      }
    });
  }
}

module.exports = Bands;
