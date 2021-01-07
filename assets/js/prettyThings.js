function togglePrettyThing(ptData) {
    var modal = document.getElementsByClassName('copyModal')[0];
    var modalIsHidden = modal.classList.contains('isHidden');

    if (ptData != null) {
        let header = document.getElementById('ptHeader');
        header.innerHTML = ptData[0];

        let description = document.getElementById('ptDescription');
        description.innerHTML = ptData[1];

        let whyItWorks = document.getElementById('ptWhyItWorks');
        whyItWorks.innerHTML = ptData[2];

        // Does it have a gif, or just a still?
        let image = document.getElementById('ptImage');
        if (ptData[5] != "") {
            image.src  = ptData[5];
            image.alt = ptData[4];
        } else {
            image.src  = ptData[3];
            image.alt = ptData[4];
        }
    }

    if (modalIsHidden) {
        modal.classList.remove('isHidden', 'hidden', 'pointer-events-none', 'transform', 'ease-in', 'duration-100', 'opacity-0');
        modal.classList.add('transform', 'ease-out', 'duration-300', 'transition', 'opacity-100');
    } else {
        modal.classList.remove('transform', 'ease-out', 'duration-300', 'transition', 'opacity-100');
        modal.classList.add('isHidden', 'hidden', 'pointer-events-none', 'transform', 'ease-in', 'duration-100', 'opacity-0');
    }
}