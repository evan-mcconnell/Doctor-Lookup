import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import './sass/styles.scss';
import { DoctorsByCondition } from './lookup';


$(document).ready(function() {

  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    const cond = $("#condition").val();
    const name = $("#doctor").val();
    console.log(name);


    let docLookup = new DoctorsByCondition();
    let promise1 = docLookup.getDoctorList(name, cond);

    promise1.then((response) => {
      let body = JSON.parse(response);
      let docList = docLookup.getList(body.data);
      console.log(body.data);
      // console.log(body.data[6].practices[0].visit_address.street2);
      // console.log(body.data[6].practices[0].visit_address.city);
      // console.log(body.data[6].practices[0].visit_address.state);
      // console.log(body.data[6].practices[0].visit_address.zip);

      docList.forEach((doc) => {
        const newPatientList = docLookup.newPatients(doc.practices);
        $("#docs-in-area-list").append(`<li><img src="${doc.profile.image_url}" alt=""><h4 class="doc-name">${doc.profile.first_name} ${doc.profile.last_name}, ${doc.profile.title}</h4><address class="doc-address">${doc.practices[0].visit_address.street}${doc.practices[0].visit_address.street2}<br>${doc.practices[0].visit_address.city}, ${doc.practices[0].visit_address.state} ${doc.practices[0].visit_address.zip}</address><p class="doc-phone">${doc.practices[0].phones[0].type} ${doc.practices[0].phones[0].number}</p><a class="" href=""></a><p>${newPatientList.toString().replace(/,/g, '')}</p></li>`)
      });
    });
  });
});
