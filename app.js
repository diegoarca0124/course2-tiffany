let video_teaser = document.getElementById('video-home');

function play_stop(){
    console.log(video_teaser.paused);
    if(!video_teaser.paused){
        video_teaser.pause();
        document.getElementById('icon-pause-desktop').classList.add('d-none');
        document.getElementById('icon-play-desktop').classList.remove('d-none');
    }else{
        video_teaser.play();
        document.getElementById('icon-pause-desktop').classList.remove('d-none');
        document.getElementById('icon-play-desktop').classList.add('d-none');
    }
}

function sound(){
    console.log();

    if(video_teaser.muted){
        video_teaser.muted = false;
        document.getElementById('icon-volume-desktop').classList.add('d-none');
        document.getElementById('icon-silent-desktop').classList.remove('d-none');
    }else{
        video_teaser.muted = true;
        document.getElementById('icon-volume-desktop').classList.remove('d-none');
        document.getElementById('icon-silent-desktop').classList.add('d-none');

    }
}


let dropdownMenu = document.querySelector('.dropdown-menu');

dropdownMenu.addEventListener('click',function(event){
    event.stopPropagation();
});

let right_container = document.querySelector('#right-container');

right_container.addEventListener('mouseenter',()=>{
    document.body.classList.add('no-scroll');
});

right_container.addEventListener('mouseleave',()=>{
    document.body.classList.remove('no-scroll');
});

$('.slack-rs').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="slick-prev"><i style="font-size:1.5rem !important" class="bi bi-arrow-left-short"></i></button>',
    nextArrow: '<button class="slick-next"><i style="font-size:1.5rem !important" class="bi bi-arrow-right-short"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$('.slack-rs-2').slick({
  dots:true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button class="slick-prev"><i style="font-size:1.5rem !important" class="bi bi-arrow-left-short"></i></button>',
  nextArrow: '<button class="slick-next"><i style="font-size:1.5rem !important" class="bi bi-arrow-right-short"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});