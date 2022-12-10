let repositories = [];

function repoObjSample(name0, path0, link0) {
  this.name = name0;
  this.path = path0;
  this.link = link0;
  this.showCard = () => {
    $("#main-right_overflow").html(
      $("#main-right_overflow").html() +
        ` <div class="main-right_repoCard" onclick="toLink('${this.link}')" style="background-image: url('${this.path}_blurred.png');"><p class="main-right-repoCard_name">${this.name}</p></div>`
    );
  };
}

repositories.push(
  new repoObjSample(
    "Trekking free design",
    "img/trekking",
    "https://nikolassnorkell.github.io/trekking/"
  )
);
repositories.push(
  new repoObjSample(
    "Beauty Saloon Template",
    "img/Beauty_Saloon",
    "https://nikolassnorkell.github.io/Beauty-Saloon/"
  )
);
repositories.push(
  new repoObjSample(
    "Hex Gradient Back Generator",
    "img/Hex",
    "https://nikolassnorkell.github.io/HEX-Gradient-Generator/"
  )
);
repositories.push(
  new repoObjSample(
    "Snake Game",
    "img/Snake",
    "https://nikolassnorkell.github.io/Snake/"
  )
);
repositories.push(
  new repoObjSample(
    "Simple Car Traffic Game",
    "img/CarGame",
    "https://nikolassnorkell.github.io/Traffic-Simple-Game/"
  )
);
repositories.push(
  new repoObjSample(
    "Matrix",
    "img/Matrix",
    "https://nikolassnorkell.github.io/Matrix/"
  )
);
repositories.push(
  new repoObjSample(
    "Simple Digital Clock",
    "img/DigitClock",
    "https://nikolassnorkell.github.io/Digital-Clock/"
  )
);
repositories.push(
  new repoObjSample(
    "Memory Card Game",
    "img/CardMemory",
    "https://nikolassnorkell.github.io/Memory-Card-Game/"
  )
);

// console.log(repositories)

function showCards() {
  $("#main-right_overflow").html("");

  for (let i = 0; i < repositories.length; i++) {
    repositories[i].showCard();
  }
}

showCards();

$(".main-left_linkedin img").click(function () {
  window.open("https://www.linkedin.com/in/nikitazykov/", "_blank");
});

// let reposArr = $.getJSON("/json/repos.json", parseRepos);

// function parseRepos() {
//   console.log(reposArr.responseJSON);
//     let reposMain = reposArr.responseJSON;
//   $('#main-right_overflow').html("");

//    for(let i=0;i<reposMain.length;i++){
//         $('#main-right_overflow').html($('#main-right_overflow').html()+` <div class="main-right_repoCard" onclick="toLink('${reposMain[i].link}')" style="background-image: url('${reposMain[i].path}_blurred.png');"><p class="main-right-repoCard_name">${reposMain[i].name}</p></div>`)
//    }

// }

function toLink(link) {
  window.open(link, "_blank");
}



// Version Banner
setTimeout(() => {
  $("#version").animate({
    top: "10px",
  });

  setTimeout(() => {
    $("#version").animate({
      top: "-50px",
    });
  }, 2500);
}, 1500);

//background animation block

function circlesHub() {
  circlesAmountGenerator()
  let circleArr = $(".circle");
  for (let i = 0; i < circleArr.length; i++) {
    let circSize = circleRandwidthNStartPoint(circleArr[i]);

    circleRandDirection(circleArr[i], circSize);
  }
}

function circlesAmountGenerator() {
  const x_window = window.innerWidth;
  let circles_amount = 0;
  if (x_window >= 1920) circles_amount = 20;
  else if (x_window >= 1280) circles_amount = 15;
  else if (x_window > 720) circles_amount = 10;
  else if (x_window <= 720) circles_amount = 5;

  $("#circle-container").html('<div class="circle"></div>');

  let flag = circles_amount;
  $("#circle-container").html("");
  while (flag != -0) {
    flag--;
    $("#circle-container").html(
      $("#circle-container").html() + '<div class="circle"></div>'
    );
  }
}

function circleRandwidthNStartPoint(circle) {
  let x_start, y_start, sizes_start;
  const x_window = window.innerWidth;
  const y_window = window.innerHeight;

  sizes_start = Math.floor(Math.random() * (100 - 40) + 40);
  // console.log(sizes_start)
  x_start = Math.floor(Math.random() * (x_window - sizes_start));
  y_start = Math.floor(Math.random() * (y_window - sizes_start));

  $(circle).css({
    top: y_start + `px`,
    left: x_start + "px",
    width: sizes_start + "px",
    height: sizes_start + "px",
  });

  return sizes_start;
}

function circleRandDirection(circle, size) {
  let randFlag;

  switch ((randFlag = Math.floor(Math.random() * 4))) {
    case 0:
      toBottomRight(circle, size);
      break;
    case 1:
      toBottomLeft(circle, size);
      break;
    case 2:
      toTopLeft(circle, size);
      break;
    case 3:
      toTopRight(circle, size);
      break;
  }
}

function toBottomRight(elem, size) {
  let x1 = $(elem).offset().left;
  let y1 = $(elem).offset().top;

  let widthTimer = setInterval(function () {
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    x1++;
    y1++;
    $(elem).css("left", x1 + "px");
    $(elem).css("top", y1 + "px");
    if (x1 + size >= windowInnerWidth) {
      clearInterval(widthTimer);
      toBottomLeft(elem, size);
    }
    if (y1 + size >= windowInnerHeight) {
      clearInterval(widthTimer);
      toTopRight(elem, size);
    }
  }, 10);
}

function toTopRight(elem, size) {
  let x1 = $(elem).offset().left;
  let y1 = $(elem).offset().top;

  let widthTimer = setInterval(function () {
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    x1++;
    y1--;
    $(elem).css("left", x1 + "px");
    $(elem).css("top", y1 + "px");
    if (x1 + size >= windowInnerWidth) {
      clearInterval(widthTimer);
      toTopLeft(elem, size);
    }
    if (y1 <= 0) {
      clearInterval(widthTimer);
      toBottomRight(elem, size);
    }
  }, 10);
}

function toBottomLeft(elem, size) {
  let x1 = $(elem).offset().left;
  let y1 = $(elem).offset().top;

  let widthTimer = setInterval(function () {
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    x1--;
    y1++;
    $(elem).css("left", x1 + "px");
    $(elem).css("top", y1 + "px");
    if (x1 <= 0) {
      clearInterval(widthTimer);
      toBottomRight(elem, size);
    }
    if (y1 + size >= windowInnerHeight) {
      clearInterval(widthTimer);
      toTopLeft(elem, size);
    }
  }, 10);
}

function toTopLeft(elem, size) {
  let x1 = $(elem).offset().left;
  let y1 = $(elem).offset().top;

  let widthTimer = setInterval(function () {
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    x1--;
    y1--;
    $(elem).css("left", x1 + "px");
    $(elem).css("top", y1 + "px");
    if (x1 <= 0) {
      clearInterval(widthTimer);
      toTopRight(elem, size);
    }
    if (y1 <= 0) {
      clearInterval(widthTimer);
      toBottomLeft(elem, size);
    }
  }, 10);
}

circlesHub();




let countClick = 0;
function rotate() {
  countClick++;

  if (countClick % 2 == 0) {
    $("#main-right_part").animate(
      {
        opacity: "0",
      },
      400
    );
    setTimeout(() => {
      $("#main-right_part").css("z-index", "1");
    }, 400);
  } else {
    $("#main-right_part").css("z-index", "2");
    $("#main-right_part").animate(
      {
        opacity: "1",
      },
      400
    );
  }
}
