    function calculateSplit() {
      let a = parseFloat(document.getElementById("personA").value) || 0;
      let b = parseFloat(document.getElementById("personB").value) || 0;

      let total = a + b;
      let share = total / 2;
      let message = `<strong>Total Spent:</strong> ₹${total.toFixed(2)}<br>
                     <strong>Each Person's Share:</strong> ₹${share.toFixed(2)}<br><br>`;

      if (a > share) {
        message += `<strong>Result:</strong> Devendra should pay Nirmal <b>₹${(a - share).toFixed(2)}</b>`;
      } else if (b > share) {
        message += `<strong>Result:</strong> Nirmal should pay Devendra <b>₹${(b - share).toFixed(2)}</b>`;
      } else {
        message += `<strong>Result:</strong> Both spent equally. 🎉 No settlement needed.`;
      }

      document.getElementById("result").innerHTML = message;
    }

    function resetForm() {
      document.getElementById("personA").value = "";
      document.getElementById("personB").value = "";
      document.getElementById("result").innerHTML = "";
    }