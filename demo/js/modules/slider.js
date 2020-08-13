function slider() {
    const slider = document.querySelector('.offer__slider'),
        slides = document.querySelectorAll('.offer__slide'),
        prew = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        sliderWrapper = document.querySelector('.offer__slider-wrapper'),
        sliderFields = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(sliderWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    prepare(slideIndex);

    sliderFields.style.width = 100 * slides.length + '%';
    sliderFields.style.display = 'flex';
    sliderFields.style.transition = '0.5s all';

    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    })

//для нормаьного отображения абсолютно спозиционированных элементов
    slider.style.position = 'relative';

    let dots = [];

//Динамически создадим элемент
    const indicators =document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = 'position: absolute;\n' +
        '    right: 0;\n' +
        '    bottom: 0;\n' +
        '    left: 0;\n' +
        '    z-index: 15;\n' +
        '    display: flex;\n' +
        '    justify-content: center;\n' +
        '    margin-right: 15%;\n' +
        '    margin-left: 15%;\n' +
        '    list-style: none;';
    slider.append(indicators);

//Создадим точки по колличеству картинок в слайдере
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = 'box-sizing: content-box;\n' +
            '    flex: 0 1 auto;\n' +
            '    width: 30px;\n' +
            '    height: 6px;\n' +
            '    margin-right: 3px;\n' +
            '    margin-left: 3px;\n' +
            '    cursor: pointer;\n' +
            '    background-color: #fff;\n' +
            '    background-clip: padding-box;\n' +
            '    border-top: 10px solid transparent;\n' +
            '    border-bottom: 10px solid transparent;\n' +
            '    opacity: .5;\n' +
            '    transition: opacity .6s ease;';
        indicators.append(dot);

        if (i == 0) {
            dot.style.opacity = '1';
        }
        dots.push(dot);
    }

    function prepare(index) {
        if (index > slides.length) {
            slideIndex = 1;
        } else if (index < 1) {
            slideIndex = slides.length;
        }
        slideIndex < 10 ? current.textContent = `0${slideIndex}` : current.textContent = slideIndex;
    }

    function dotsActivity() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    next.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

        sliderFields.style.transform = `translateX(-${offset}px)`;

        prepare(++slideIndex);

        dotsActivity();
    });

    prew.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1)

        } else {
            offset -= +width.replace(/\D/g, '');
        }

        sliderFields.style.transform = `translateX(-${offset}px)`;

        prepare(--slideIndex);

        dotsActivity();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = +width.replace(/\D/g, '') * (slideTo - 1);
            sliderFields.style.transform = `translateX(-${offset}px)`;

            prepare(slideIndex);

            dotsActivity();
        })
    })
}

export default slider;