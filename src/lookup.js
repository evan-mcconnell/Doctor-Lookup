

export class DoctorsByCondition {
  getDoctorList(name,cond) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${cond}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
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

  newPatients(practices) {
    let newP = [];
    practices.forEach((pract) => {
      if (pract.accepts_new_patients === true) {
        newP.push(`The office at ${pract.visit_address.street} in ${pract.visit_address.city} is accepting new patients.<br>`);
      } else {
        newP.push(`The office at ${pract.visit_address.street} in ${pract.visit_address.city} is not accepting new patients at this time.<br>`);
      }
    });
    return newP;
  }
}

export class Doctor {
  constructor (first, last, title, street, city, state, zip) {
    this.first = first,
    this.last = last,
    this.title = title,
    this.practices = []
  }
  displayCard() {
    return `<h4 class="doc-name">${this.first} ${this.last}, ${this.title}</h4>`
  }
}

export class Practice {
  constructor (street, city, state, zip, phoneType, number) {
    this.street = street,
    this.city = city,
    this.state = state,
    this.zip = zip,
    this.phoneType = phoneType,
    this.number = number
  }
  displayPractice() {
    return `<address class="doc-address">${this.street}${this.street2}<br>${this.city}, ${this.state} ${this.zip}</address><p class="doc-phone">${this.phoneType} ${this.number}</p><a href="${this.website}"></a>`
  }
}

// <p>${newPatientList.toString().replace(/,/g, '')}</p>
//
