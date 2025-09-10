function calculateSplit() {
  let a = parseFloat(document.getElementById("personA").value) || 0;
  let b = parseFloat(document.getElementById("personB").value) || 0;

  let total = a + b;
  let share = total / 2;
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
    qrText = `upi://pay?pa=devyadav3001-1@okaxis&pn=Friend&am=${amount}&cu=INR`;
  } else {
    message += `<strong>Result:</strong> Both spent equally 🎉 No settlement needed.`;
  }

  document.getElementById("result").innerHTML = message;

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
}
