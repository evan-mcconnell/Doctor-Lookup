import { DoctorsByCondition } from './../src/lookup.js';

const nameSearch = "john";
const cond = "pain";
let docLookup = new DoctorsByCondition();
let promise1 = docLookup.getDoctorList(nameSearch, cond);

let name;

function testPromise1(done) {
promise1.then(function(response) {
    let body = JSON.parse(response);
    name = body.data[0].profile.first_name;
    done();
  });
}


describe('DoctorsByCondition', function() {
  beforeEach(function(done) {
    testPromise1(done);
  });

  it('should return the first name of the first doctor in the search', function() {
    expect(name).toEqual("John");
  });
});
