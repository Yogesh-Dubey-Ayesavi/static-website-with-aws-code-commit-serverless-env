var all = $("#main").children();

var offset_list = [];

for (let x of all) {
    var ele_off = $(x).offset().top;
    offset_list.push(Math.floor(ele_off));
}

var nav = document.querySelectorAll(".custom-dept-nav ul li");

function removeId(){
    nav.forEach((element) => {
        element.removeAttribute("id");
    });
}

$(window).scroll(function () {
    const scroll = window.scrollY;

    if (scroll < offset_list[0]) {
        removeId()
        nav[0].setAttribute("id", "active");
    } else if (scroll <= offset_list[1]) {
        removeId()
        nav[1].setAttribute("id", "active");
    } else if ((scroll <= offset_list[6] - 75) & (scroll >= offset_list[5])) {
        removeId()
        nav[2].setAttribute("id", "active");
    } else if ((scroll <= offset_list[7] - 70) & (scroll >= offset_list[6])) {
        removeId()
        nav[3].setAttribute("id", "active");
    } else if ((scroll <= offset_list[8] - 70) & (scroll >= offset_list[7])) {
        removeId()
        nav[4].setAttribute("id", "active");
    } else if (
        (scroll - 75 <= offset_list[9] - 70) &
        (scroll >= offset_list[8])
    ) {
        removeId()
        nav[5].setAttribute("id", "active");
    } else if (
        (scroll - 100 <= offset_list[10] - 70) &
        (scroll >= offset_list[9])
    ) {
        removeId()
        nav[6].setAttribute("id", "active");
    }
});

console.log($("#faculty").offset());

var slider = tns({
    container: ".my-slider",
    items: 2,
    gutter: 20,
    slideBy: 1,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayButtonOutput: false,
    controlsContainer: "#custom-control",
    autoplayHoverPause: true,
    touch: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //     nav: false
    //   },
    //   768: {
    //     items: 2,
    //     nav: true
    //   },
    //   1440: {
    //     items: 3
    //   }
    // }
  });