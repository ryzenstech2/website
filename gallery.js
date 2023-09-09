<script>
    const screenshotsWrapper = document.querySelector('.screenshots-wrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const screenshotCount = document.querySelectorAll('.screenshots-wrapper img').length;
    let currentScreenshotIndex = 0;

    function showScreenshot(index) {
        const screenshotWidth = document.querySelector('.screenshots-wrapper img').clientWidth;
        const newPosition = -index * screenshotWidth;
        screenshotsWrapper.style.transform = `translateX(${newPosition}px)`;
    }

    function nextScreenshot() {
        currentScreenshotIndex = (currentScreenshotIndex + 1) % screenshotCount;
        showScreenshot(currentScreenshotIndex);
    }

    function prevScreenshot() {
        currentScreenshotIndex = (currentScreenshotIndex - 1 + screenshotCount) % screenshotCount;
        showScreenshot(currentScreenshotIndex);
    }

    nextBtn.addEventListener('click', nextScreenshot);
    prevBtn.addEventListener('click', prevScreenshot);

    setInterval(nextScreenshot, 6000); // Cambia automaticamente ogni 6 secondi
</script>
