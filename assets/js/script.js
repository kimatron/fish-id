/*jshint esversion: 8 */
document.addEventListener("DOMContentLoaded", function () {
  // Get the modal open button element
  var modalOpenBtn = document.getElementById("modalOpenBtn");

  // Get the modal close button element
  var modalCloseBtn = document.getElementById("modalCloseBtn");

  // Get the modal element
  var modal = document.getElementById("myModal");

  // Function to open the modal when the modal open button is clicked
  modalOpenBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // Function to close the modal when the modal close button is clicked
  modalCloseBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});