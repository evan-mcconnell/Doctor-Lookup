import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import './sass/styles.scss';
import { DoctorsByCondition } from './webpack-template';

$(document).ready(function() {
  let docLookup = new DoctorsByCondition();
  let promise2 = getDoctorList(name, cond);

  promise2.then((response) => {
    let body = JSON.parse(response);
    docList = docLookup.getDoctorList(body.drinks);
    docList.forEach( (doc) => {

    });
  });
});
