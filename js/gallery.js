$(document).ready(function() {
    var all_images = [];
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        // if (false) {
        for (let i = 1; i <= 9; i++) {
            all_images.push({
                "thumb": "/images/thumbs/" + i + ".jpg",
                "full": "/images/full/" + i + ".jpg",
            });
        }
    } else {
        const base_url = "https://res.cloudinary.com/do9ccpdtg/image/upload";
        all_images = [{
                "full": base_url + "/v1694535642/fullsize/1_xesabh.jpg",
                "thumb": base_url + "/v1694535665/thumb/1_q4cxej.jpg",
            },
            {
                "full": base_url + "/v1694535644/fullsize/2_wauwaf.jpg",
                "thumb": base_url + "/v1694535666/thumb/2_pcisqu.jpg",
            },
            {
                "full": base_url + "/v1694535644/fullsize/3_em6eu0.jpg",
                "thumb": base_url + "/v1694535667/thumb/3_sy2fpf.jpg",
            },
            {
                "full": base_url + "/v1694535646/fullsize/4_hhc8rh.jpg",
                "thumb": base_url + "/v1694535667/thumb/4_vrl1xn.jpg",
            },
            {
                "full": base_url + "/v1694535647/fullsize/5_wgzfkx.jpg",
                "thumb": base_url + "/v1694535668/thumb/5_vcircr.jpg",
            },
            {
                "full": base_url + "/v1694535645/fullsize/6_nadkvh.jpg",
                "thumb": base_url + "/v1694535669/thumb/6_iyraht.jpg",
            },
            {
                "full": base_url + "/v1694535648/fullsize/7_mokevv.jpg",
                "thumb": base_url + "/v1694535670/thumb/7_xkpghr.jpg",
            },
            {
                "full": base_url + "/v1694535650/fullsize/8_f9sqt7.jpg",
                "thumb": base_url + "/v1694535671/thumb/8_w7m3jq.jpg",
            },
            {
                "full": base_url + "/v1694535649/fullsize/9_dwk17s.jpg",
                "thumb": base_url + "/v1694535672/thumb/9_c5rhby.jpg",
            },
        ];
    }

    var total_images = all_images.length;

    var gallery_idx = null;

    $.each(all_images, function(index, value) {
        $('#gallery_inner').append(
            '<div class="gallery-image"><img src="' +
            value["thumb"] + '" data-image_idx="' + index + '"></div>'
        );
    });

    $(".gallery-image").on('click', function(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var img_idx = $(event.target).data('image_idx');
        openModal(img_idx);
    });

    function openModal(image_idx) {
        $('#myModal').css('display', 'block');
        set_image(image_idx);
    }

    function set_image(image_idx) {
        gallery_idx = image_idx;
        $('#modal-img').attr('src', all_images[image_idx]["full"]);
    }

    function closeModal() {
        $('#myModal').css('display', 'none');
    }

    // Close the modal when clicking on the close icon
    $('.close').click(function(e) {
        closeModal();
    });

    // Close the modal when clicking outside of it
    $('#modal-content').click(function(e) {
        closeModal();
    });
    $('#myModal').click(function(e) {
        closeModal();
    });

    $('#modal-wrapper-padding').click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    $('#modal-wrapper').click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    $('#modal-img').click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    function offsetImage(imgOffset) {
        var new_idx = (
            gallery_idx + imgOffset + total_images  // + `total_images` to ensure positive number
        ) % total_images;
        set_image(new_idx);
    }

    // Attach click events to prev and next buttons
    $('.prev').click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        offsetImage(-1);
    });
    $('.next').click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        offsetImage(1);
    });

});