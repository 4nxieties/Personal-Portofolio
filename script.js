<button onclick="copyEmail()" class="email">
  Copy Email
</button>

<script>
  function copyEmail() {

    const email = "marcelokawuwung@gmail.com";
    

    const input = document.createElement("input");
    input.value = email;
    document.body.appendChild(input);
    

    input.select();
    input.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    

    document.body.removeChild(input);
    

    alert("Email berhasil disalin: " + email);
  }
</script>
