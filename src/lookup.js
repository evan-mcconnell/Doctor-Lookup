
//
// export class DoctorsByCondition {
//   getDoctorList(name,cond) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${cond}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
//   getList(doc) {
//     const doctors = [];
//     doc.forEach((doc) => {
//       doctors.push(doc);
//     });
//     return doctors;
//   }
// }

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
  constructor (street, city, state, zip, number, web, street2) {
    this.street = street,
    this.city = city,
    this.state = state,
    this.zip = zip,
    this.number = number,
    this.web = web,
    this.street2 = street2
  }
  displayPractice() {
    return `<h5>Practices:</h5><address class="doc-address">${this.street}<br>${this.street2}<br>${this.city}, ${this.state}<br> ${this.zip}</address><p class="doc-phone">${this.number}</p><a href="${this.web}">${this.web}</a><br><p>${this.acceptsNew}</p>`
  }
  newPatients(accept) {
    if (accept === true) {
      return `This office is accepting new patients.`;
    } else {
      return `This office is not accepting new patients at this time.`;
    }
  }
}

// <p>${newPatientList.toString().replace(/,/g, '')}</p>
//
