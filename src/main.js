import { Date } from "./triangletracker.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  $("form#day_of_the_week").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var month = parseInt($("input#month").val());
    var day = parseInt($("input#day").val());
    var date = new Date(month,day,year);
    date.leapYear(year);
    console.log(date);



  });
});
