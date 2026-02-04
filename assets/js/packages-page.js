$(document).ready(function () {

    /* -----------------------------
       Initial State
    ----------------------------- */
    $('#packageDetailsContainer').hide();
    $('#packageCarouselContainer').show();

    /* -----------------------------
       Helper Methods
    ----------------------------- */
    function getPackageById(id) {
        return packages.find(pkg => pkg.id === id);
    }

    function getImage(id) {
        return getPackageById(id)?.imagePath || '';
    }

    function getShortContent(id) {
        return getPackageById(id)?.shortContent || '';
    }

    function getFullContent(id) {
        return getPackageById(id)?.fullContent || '';
    }

    function getPackageName(id) {
        return getPackageById(id)?.packageName || '';
    }

    function getCountryName(id) {
        return getPackageById(id)?.countryName || '';
    }

    /* -----------------------------
       Render Carousel
    ----------------------------- */
    function renderCarousel() {
        const $carousel = $('.packages-carousel-container');
        $carousel.empty();

        packages.forEach(pkg => {
            const item = `
                <div class="item" data-id="${pkg.id}">
                    <div class="inner-container">
                        <div class="image-container" style="background-image:url(${pkg.imagePath})">
                            <div class="details">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="title">${pkg.packageName}</p>
                                    <button class="view-more-btn" data-id="${pkg.id}">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                                <p class="data mb-0">${pkg.shortContent}</p>
                            </div>
                        </div>
                    </div>
                    <p class="country-name">${pkg.countryName}</p>
                </div>
            `;
            $carousel.append(item);
        });

        // Initialize slick AFTER rendering
        $carousel.slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            nextArrow: '<button class="nextBtn slick-btn"><img src="assets/images/airplane-icon-right.png"></button>',
            prevArrow: '<button class="prevBtn slick-btn"><img src="assets/images/airplane-icon-left.png"></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: { slidesToShow: 3 }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 1 }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }
                }
            ]
        });
    }

    renderCarousel();

    /* -----------------------------
       View More Click
    ----------------------------- */
    $(document).on('click', '.view-more-btn', function () {
        const id = Number($(this).data('id'));

        // Pause carousel autoplay
        $('.packages-carousel-container').slick('slickPause');

        $('#packageCarouselContainer').hide();
        $('#packageDetailsContainer').show();

        $('#packageDetailsContainer .image')
            .css('background-image', `url(${getImage(id)})`);

        $('#packageDetailsContainer .title')
            .text(getPackageName(id));

        $('#packageDetailsContainer .data')
            .text(getFullContent(id));
    });

    /* -----------------------------
       Close Button
    ----------------------------- */
    $('.close-btn').on('click', function () {
        $('#packageDetailsContainer').hide();
        $('#packageCarouselContainer').show();

        // Resume carousel autoplay
        $('.packages-carousel-container').slick('slickPlay');
    });

});
