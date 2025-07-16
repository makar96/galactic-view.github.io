<script>
document.addEventListener('DOMContentLoaded', function () {
    const playBtn = document.querySelector('.playBtn');
    const container = document.getElementById('videoContainer');

    if (playBtn && container) {
        playBtn.addEventListener('click', function () {
            container.innerHTML = `
                <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/xAieE-QtOeM?autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                </iframe>`;
            container.style.display = 'block';
        });
    } else {
        console.warn('Элементы playBtn или videoContainer не найдены на странице.');
    }
});
</script>
