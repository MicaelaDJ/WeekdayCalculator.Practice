import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Triangle } from "./triangletracker.js"

$(document).ready(function() {
    $("form#triangle_tracker_form").submit(function(event) {
      var side1 = parseInt($("input#side1").val());
      var side2 = parseInt($("input#side2").val());
      var side3 = parseInt($("input#side3").val());
      var triangle = new Triangle(side1, side2, side3);
      var result = triangle.checkType(); 
      $("#result").text(result);
  
      event.preventDefault();
    });
  });
  