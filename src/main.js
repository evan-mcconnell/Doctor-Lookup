import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import './sass/styles.scss';
import { DoctorsByCondition } from './lookup';

function newPatients(practices) {
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

$(document).ready(function() {

  let name = "john";
  let cond = "pain";

  let docLookup = new DoctorsByCondition();
  let promise1 = docLookup.getDoctorList(name, cond);

  promise1.then((response) => {
    let body = JSON.parse(response);
    let docList = docLookup.getList(body.data);
    console.log(newPatients(body.data[0].practices));
    console.log(body.data[6].practices[0].visit_address.street);
    console.log(body.data[6].practices[0].visit_address.street2);
    console.log(body.data[6].practices[0].visit_address.city);
    console.log(body.data[6].practices[0].visit_address.state);
    console.log(body.data[6].practices[0].visit_address.zip);

    docList.forEach((doc) => {
      // const newPatients
      $("#docs-in-area-list").append(`<li><img src="${doc.profile.image_url}" alt=""><h4 class="doc-name">${doc.profile.first_name} ${doc.profile.last_name}, ${doc.profile.title}</h4><address class="doc-address">${doc.practices[0].visit_address.street}${doc.practices[0].visit_address.street2}<br>${doc.practices[0].visit_address.city}, ${doc.practices[0].visit_address.state} ${doc.practices[0].visit_address.zip}</address><p class="doc-phone">${doc.practices[0].phones[0].type} ${doc.practices[0].phones[0].number}</p><a class="" href=""></a><p>${newPatients(doc.practices)}</p></li>`)
    });
  });
});
