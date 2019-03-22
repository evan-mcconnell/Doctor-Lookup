import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import './sass/styles.scss';
import { DoctorsByCondition } from './lookup';

$(document).ready(function() {

  let name = "john";
  let cond = "pain";

  let docLookup = new DoctorsByCondition();
  let promise1 = docLookup.getDoctorList(name, cond);

  promise1.then((response) => {
    let body = JSON.parse(response);
    let docList = docLookup.getList(body.data);
    console.log(body.data);
    console.log(docList);
    docList.forEach( (doc) => {
      $("#docs-in-area-list").html(`<li><img src="" alt=""><h4 class="doc-name">${doc.profile.first_name} ${doc.profile.last_name}, ${doc.profile.title}</h4><address class="doc-address"></address><p class="doc-phone"></p><a class="" href=""></a><p>Accepting New patients</p></li>`)
    });
  });
});
