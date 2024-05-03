let i = 0;
const images = [];
const time = 3000;

// Image list
images[0] = 'puppy1.jpg';
images[1] = 'puppy2.jpeg';
images[2] = 'puppy3.jpg';
images[3] = 'puppy4.jpg';
images[4] = 'puppy5.png';

// Image Captions
const captions = ['Prideful Puppy >:)', 'hungry pupper :3', 'tired doggo had a <strong>Rough</strong> day', '<span class = color>Box of Smiles</span> <em>has been added to your inventory</em>', '<em>*Airplane sounds</em>']
// Change img
function changeimg() {
    document.slide.src = images[i];
    const myCaption = document.querySelector('#puppies-caption');
    myCaption.innerHTML = captions[i]; //index number i of array 'captions'

    // When run until variable 'i' is above the length of the slideshow incriment i by 1
    if (i < images.length - 1) {
        i++;
    } else {
        // if i is greater then slideshow length resetv the slideshow
        i = 0;
    }

    // Run function 'changeimg' every 'time' (3000 miliseconds)
    setTimeout('changeimg()', time);
}

window.onload = changeimg;