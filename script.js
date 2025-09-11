document.addEventListener('DOMContentLoaded', function() {
    const subtitleElement = document.getElementById('typing-subtitle');
    if (subtitleElement) {
        const text = subtitleElement.textContent;
        subtitleElement.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                subtitleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150); // Typing speed (ms)
            }
        }
        typeWriter();
    }
});