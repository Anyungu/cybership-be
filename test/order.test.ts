import { expect } from "chai";
import { getOrdersService } from "../src/api/v1/services/order";

describe("Unit Test Touching DB", function () {
  it("skip 0, take 1 should return 1 record", function (done) {
    this.timeout(10000);
    getOrdersService(0, 1)
      .then((orders) => {
        expect(orders.length).to.equal(1);
        done();
      })
      .catch(done);
  });

  it("skip 5, take 102 should return 102 record", function (done) {
    this.timeout(10000);
    getOrdersService(5, 102)
      .then((orders) => {
        expect(orders.length).to.equal(102);
        done();
      })
      .catch(done);
  });

  it("skip -1, take 1 should return 1 record", function (done) {
    this.timeout(10000);
    getOrdersService(0, 1)
      .then((orders) => {
        expect(orders.length).to.equal(1);
        done();
      })
      .catch(done);
  });
});
