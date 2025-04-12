// index.js
document.addEventListener('DOMContentLoaded', () => {
    const samples = document.querySelectorAll('.sample');

    samples.forEach(sample => {
        sample.addEventListener('click', () => {
            const audioFile = sample.dataset.audio;
            // Ensure the path is correct relative to your index.html file
            const audio = new Audio(`Exercises/Audio Sampler/${audioFile}`);
            audio.play();
        });
    });
});