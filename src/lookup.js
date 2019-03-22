

export class DoctorsByCondition {
  getDoctorList(name,cond) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${cond}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=1eed1e7d094218f3572acbb12421b2f4`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  getList(doc) {
    const doctors = [];
    doc.forEach((doc) => {
      doctors.push(doc);
    });
    return doctors;
  }
  // newPatients(practices) {
  //   practices.forEach((pract) => {
  //     if (pract.accepts_new_patients === true) {
  //       return `The office at ${pract.visit_address.street} in ${pract.visit_address.city} is accepting new patients. We'd be happy to schedule you!`
  //     } else {
  //       return `The office at ${pract.visit_address.street} in ${pract.visit_address.city} is not accepting new patients at this time.`
  //     }
  //   });
  // }
}
