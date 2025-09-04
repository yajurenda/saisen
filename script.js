document.getElementById("saisenBtn").addEventListener("click", function () {
  const amount = document.getElementById("amount").value;
  const message = document.getElementById("message");
  const audio = document.getElementById("yariAudio");

  if (amount && amount > 0) {
    message.textContent = `${amount}円、ありがとナス！`;
    audio.currentTime = 0;
    audio.play();
  } else {
    message.textContent = "ちゃんと賽銭しろ～？";
  }
});
