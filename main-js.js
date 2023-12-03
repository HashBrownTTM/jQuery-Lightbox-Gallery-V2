$(function(){
    const arrImages = [
        {
            src : "media/images/elena-mozhvilo-vGbkqyCRA1Q-unsplash.webp",
            desc : "Photo by Elena Mozhvilo on Unsplash https://unsplash.com/photos/vGbkqyCRA1Q"
        },
        {
            src : "media/images/jon-parry-C8eSYwQkwHw-unsplash.webp",
            desc : "Photo by Jon Parry on Unsplash https://unsplash.com/photos/C8eSYwQkwHw"
        },
        {
            src : "media/images/karthik-sreenivas-rsx-joaKYrk-unsplash.webp",
            desc : "Photo by Karthik Sreenivas on Unsplash https://unsplash.com/photos/rsx-joaKYrk"
        },
        {
            src : "media/images/kaung-myat-min-n39-bU4c5kQ-unsplash.webp",
            desc : "Photo by Kaung Myat Min on Unsplash https://unsplash.com/photos/n39-bU4c5kQ"
        },
        {
            src : "media/images/will-4lbniAdMzcc-unsplash.webp",
            desc : "Photo by Will on Unsplash https://unsplash.com/photos/4lbniAdMzcc"
        },
        {
            src : "media/images/mostafa-meraji-HJgEB78b2Z8-unsplash.webp",
            desc : "Photo by Mostafa Meraji on Unsplash https://unsplash.com/photos/HJgEB78b2Z8"
        }
    ]
    
    const arrVideos = [
        {
            src : "media/videos/production_id_4114797 (720p).mp4",
            desc : "Video by Edward Jenner from Pexels: https://www.pexels.com/video/laboratory-medical-medicine-virus-4114797/"
        },
        {
            src : "media/videos/video (720p).mp4",
            desc : "Video by Pressmaster: https://www.pexels.com/video/digital-formation-of-a-dna-in-an-animated-presentation-3191572/"
        },
        {
            src : "media/videos/video (720p) (1).mp4",
            desc : "Video by Dan Cristian Pădureț: https://www.pexels.com/video/slow-motion-footage-of-the-movement-of-yellow-fluid-mixed-in-water-creating-abstract-3051356/"
        },
        {
            src : "media/videos/pexels-otavio-henrique-17903408 (720p).mp4",
            desc : "Video by Otavio Henrique: https://www.pexels.com/video/balneario-camboriu-17903408/"
        }
    ]
    
    const arrMedia = [
        {
            src : "media/images/elena-mozhvilo-vGbkqyCRA1Q-unsplash.webp",
            type: "image",
            desc : "Photo by Elena Mozhvilo on Unsplash https://unsplash.com/photos/vGbkqyCRA1Q"
        },
        {
            src : "media/images/jon-parry-C8eSYwQkwHw-unsplash.webp",
            type: "image",
            desc : "Photo by Jon Parry on Unsplash https://unsplash.com/photos/C8eSYwQkwHw"
        },
        {
            src : "media/videos/production_id_4114797 (720p).mp4",
            type: "video",
            desc : "Video by Edward Jenner from Pexels: https://www.pexels.com/video/laboratory-medical-medicine-virus-4114797/"
        },
        {
            src : "media/videos/pexels-otavio-henrique-17903408 (720p).mp4",
            type: "video",
            desc : "Video by Otavio Henrique: https://www.pexels.com/video/balneario-camboriu-17903408/"
        },
        {
            src : "media/images/will-4lbniAdMzcc-unsplash.webp",
            type: "image",
            desc : "Photo by Will on Unsplash https://unsplash.com/photos/4lbniAdMzcc"
        },
        {
            src : "media/videos/video (720p).mp4",
            type: "video",
            desc : "Video by Pressmaster: https://www.pexels.com/video/digital-formation-of-a-dna-in-an-animated-presentation-3191572/"
        },
        {
            src : "https://www.youtube.com/embed/dQw4w9WgXcQ?si=FmFdlBKYvNF_Evze",
            type: "iframe",
            desc : "Rick Astley - Never Gonna Give You Up (Official Music Video)"
        }
    ]

    const imageSectionContainer = $('.image-section');
    const videoSectionContainer = $('.video-section');
    const imageGallery = $(`<div class="image-gallery"></div>`);
    const videoGallery = $(`<div class="video-gallery"></div>`);
    const btnOpenMediaLightbox = $('#btn-open-media-lightbox');

    $.each(arrImages, function(key, image){
        let imageSrc = image.src;

        let imageLink = $(`
            <a class="thumbnail-box gallery-images" href="${imageSrc}">
                <img src="${imageSrc}" alt="gallery-img_${key}" loading="lazy"/>
            </a>`);

        imageLink.on('click', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            imageLightbox(arrImages, key);
        });

        imageGallery.append(imageLink);
        imageSectionContainer.append(imageGallery);
    });

    $.each(arrVideos, function(key, video){
        let videoSrc = video.src;

        let videoLink = $(`
            <a class="thumbnail-box gallery-videos" href="${videoSrc}">
                <video src="${videoSrc}" muted></video>
            </a>`);

        videoLink.on('click', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            videoLightbox(arrVideos, key);
        });

        videoGallery.append(videoLink);
        videoSectionContainer.append(videoGallery);
    });

    btnOpenMediaLightbox.on('click', function(){
        mediaLightbox(arrMedia);
    });
});