<script>
    const screenshots = document.querySelectorAll('.screenshot-container img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentScreenshotIndex = 0;

    function showScreenshot(index) {
        for (let i = 0; i < screenshots.length; i++) {
            screenshots[i].style.display = 'none';
        }
        screenshots[index].style.display = 'block';
    }

    function nextScreenshot() {
        currentScreenshotIndex = (currentScreenshotIndex + 1) % screenshots.length;
        showScreenshot(currentScreenshotIndex);
    }

    function prevScreenshot() {
        currentScreenshotIndex = (currentScreenshotIndex - 1 + screenshots.length) % screenshots.length;
        showScreenshot(currentScreenshotIndex);
    }

    nextBtn.addEventListener('click', nextScreenshot);
    prevBtn.addEventListener('click', prevScreenshot);

    function autoChangeScreenshot() {
        nextScreenshot();
        setTimeout(autoChangeScreenshot, 6000); // Cambia automaticamente ogni 6 secondi
    }

    autoChangeScreenshot();
</script>
