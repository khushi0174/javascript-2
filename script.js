
document.addEventListener("DOMContentLoaded", function() {
    // Get the featured image element and thumbnails
    const featured = document.getElementById("featured");
    const thumbnails = document.querySelectorAll("#thumbnails img");
    const figcaption = document.querySelector("figcaption");

    // Array of images with their corresponding captions
    const images = [
        {src: "images/flowers-pink-large.jpg", caption: "Flowers Pink"},
        {src: "images/flowers-purple-large.jpg", caption: "Flowers Purple"},
        {src: "images/flowers-red-large.jpg", caption: "Flowers Red"},
        {src: "images/flowers-white-large.jpg", caption: "Flowers White"},
        {src: "images/flowers-yellow-large.jpg", caption: "Flowers Yellow"}
    ];

    // Add click event listener to each thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function() {
            // Update the featured image source and figcaption text
            featured.src = images[index].src;
            figcaption.textContent = images[index].caption;

            // Remove 'active' class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove("active"));

            // Add 'active' class to the clicked thumbnail
            thumbnail.classList.add("active");
        });
    });

    // Initially set the first thumbnail as active
    thumbnails[0].classList.add("active");
});
