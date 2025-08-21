<input id="email" type="text" placeholder="Enter email">
<button onclick="validate()">Submit</button>

<script>
function validate() {
  let email = document.getElementById("email").value;
  if(email.includes("@")) {
    alert("Valid Email");
  } else {
    alert("Invalid Email");
  }
}
</script>
