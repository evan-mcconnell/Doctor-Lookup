import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import './sass/styles.scss';
import { DoctorsByCondition, Doctor, Practice } from './lookup';


$(document).ready(function() {

  $("#doctor-search").submit(function(event) {
    event.preventDefault();
    const cond = $("#condition").val();
    const name = $("#doctor").val();
    console.log(name);

    const docLookup = new DoctorsByCondition();
    const promise1 = docLookup.getDoctorList(name, cond);

    promise1.then((response) => {
      const body = JSON.parse(response);
      const docList = docLookup.getList(body.data);
      console.log(body.data);
      docList.forEach((doc) => {
        let counter = 0;
        const doctor = new Doctor(doc.profile.first_name, doc.profile.last_name, doc.profile.title);


        $("#docs-in-area-list").append(`<li id="doctor${counter}">${doctor.displayCard()}</li>`);


        doc.practices.forEach((practice) => {
          const pract = new Practice(practice.visit_address.street, practice.visit_address.city, practice.visit_address.state, practice.visit_address.zip, practice.phones[0].type, practice.phones[0].number);
          practice.website ? pract["web"] = practice.website : false;
          console.log(pract);
        });



        // const newPatientList = docLookup.newPatients(doc.practices);
        // $("#docs-in-area-list").append(`<li id="doctor${counter}"><img src="${doc.profile.image_url}" alt=""><h4 class="doc-name">${doc.profile.first_name} ${doc.profile.last_name}, ${doc.profile.title}</h4><address class="doc-address">${doc.practices[0].visit_address.street}${doc.practices[0].visit_address.street2}<br>${doc.practices[0].visit_address.city}, ${doc.practices[0].visit_address.state} ${doc.practices[0].visit_address.zip}</address><p class="doc-phone">${doc.practices[0].phones[0].type} ${doc.practices[0].phones[0].number}</p><a class="" href=""></a><p>${newPatientList.toString().replace(/,/g, '')}</p></li>`)
      });
    });
  });
});










///
