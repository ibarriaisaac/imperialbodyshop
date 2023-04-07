const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/image/workshop${i}.jpeg`;
    image.alt = `Workshop ${i}`;
    image.classList.add('galleryImg');

    image.addEventListener('click' , () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = `/image/workshop${i}.jpeg`;
        selectedImage.alt = `Car 1 ${i}`;
    })
    
    
    gallery.appendChild(image);
});

popup.addEventListener('click', () =>{
    popup.style.transform = 'translateY(-100%)';
    popup.src = '';
    popup.alt = '';
})
