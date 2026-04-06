const contents = document.querySelectorAll('.content');

document.addEventListener('scroll', showtext);

function showtext(){
    contents.forEach(section => {
        const imgElement = section.querySelector('img');
        const textElement = section.querySelector('.text');

        const scrollPosition = window.pageYOffset;

        const textPosition = imgElement.offsetTop + imgElement.offsetHeight / 50;

        if (scrollPosition > textPosition) {
            textElement.classList.add('show-reveal');
        } else {
            textElement.classList.remove('show-reveal');
        }
    });
}