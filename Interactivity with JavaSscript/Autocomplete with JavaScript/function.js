document.getElementsByTagName("form").autocomplete = "on";
function billingFunction() {
  if (same.checked) {
    var name = document.getElementById("shippingName").value;
    var zip = document.getElementById("shippingZip").value;
    document.getElementById("billingName").value = name;
    document.getElementById("billingZip").value = zip;
  } else {
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
    document.getElementById("billingName").removeAttribute("required");
    document.getElementById("billingZip").removeAttribute("required");
  }
}
