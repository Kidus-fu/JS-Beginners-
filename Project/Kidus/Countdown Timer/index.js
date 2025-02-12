let countdown;
        function startCountdown() {
            clearInterval(countdown); // Clear existing countdown
            let time = parseInt(document.getElementById("timeInput").value);
            if (isNaN(time) || time <= 0) return;

            const countdownDisplay = document.getElementById("countdown");

            countdown = setInterval(() => {
                if (time <= 0) {
                    clearInterval(countdown);
                    countdownDisplay.textContent = "🎉 Time’s Up!";
                } else {
                    countdownDisplay.textContent = `00:${time < 10 ? '0' : ''}${time}`;
                    time--;
                }
            }, 1000);
        }

        function resetCountdown() {
            clearInterval(countdown);
            document.getElementById("countdown").textContent = "00:00";
            document.getElementById("timeInput").value = "";
        }