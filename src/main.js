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
          practice.website ? pract["web"] = practice.website : pract["web"] = "";
          practice.visit_address.street2 ? pract["street2"] = practice.visit_address.street2 : pract["street2"] = "";
          console.log(pract);
          console.log(pract.street2);
          $("#docs-in-area-list").append(`<div>${pract.displayPractice()}</div>`);
        });

// <a class="" href=""></a><p>${newPatientList.toString().replace(/,/g, '')}</p></li>`)
      });
    });
  });
});










///
