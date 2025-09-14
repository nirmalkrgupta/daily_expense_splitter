    // --- Calculator ---
    function appendCalc(value) {
      document.getElementById("calcDisplay").value += value;
    }
    function calculateCalc() {
      let exp = document.getElementById("calcDisplay").value;
      try {
        document.getElementById("calcDisplay").value = eval(exp);
      } catch {
        document.getElementById("calcDisplay").value = "Error";
      }
    }
    function clearCalc() {
      document.getElementById("calcDisplay").value = "";
    }
    function backspaceCalc() {
      let exp = document.getElementById("calcDisplay").value;
      document.getElementById("calcDisplay").value = exp.slice(0, -1);
    }

    // --- Expense Splitter ---
    function calculateSplit() {
      let a = parseFloat(document.getElementById("personA").value) || 0;
      let b = parseFloat(document.getElementById("personB").value) || 0;
      let total = a + b;
      let share = total / 2;

      if (total === 0) {
        document.getElementById("result").innerHTML = "<strong>Please enter some amount.</strong>";
        document.getElementById("result").style.display = "block";
        return;
      }

      let message = `<strong>Total Spent:</strong> ₹${total.toFixed(2)}<br>
                     <strong>Each Share:</strong> ₹${share.toFixed(2)}<br><br>`;
      let qrText = "";

      if (a > share) {
        let amount = (a - share).toFixed(2);
        message += `<strong>Result:</strong> Devendra should pay Nirmal ₹${amount}`;
        qrText = `upi://pay?pa=nirmalkrgupta24@ybl&pn=Nirmal&am=${amount}&cu=INR`;
      } else if (b > share) {
        let amount = (b - share).toFixed(2);
        message += `<strong>Result:</strong> Nirmal should pay Devendra ₹${amount}`;
        qrText = `upi://pay?pa=devyadav3001-1@okaxis&pn=Devendra&am=${amount}&cu=INR`;
      } else {
        message += `<strong>Result:</strong> Both spent equally 🎉 No settlement needed.`;
      }

      // Hide inputs & show only result + QR + Reset
      document.getElementById("splitInputs").style.display = "none";
      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerHTML = message;
      document.getElementById("resetBtn").style.display = "block";

      if (qrText) {
        document.getElementById("qrcode").innerHTML =
          `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200" alt="UPI QR Code">`;
      } else {
        document.getElementById("qrcode").innerHTML = "";
      }
    }

    function resetForm() {
      document.getElementById("personA").value = "";
      document.getElementById("personB").value = "";
      document.getElementById("result").innerHTML = "";
      document.getElementById("qrcode").innerHTML = "";
      document.getElementById("result").style.display = "none";
      document.getElementById("resetBtn").style.display = "none";
      document.getElementById("splitInputs").style.display = "block";
    }