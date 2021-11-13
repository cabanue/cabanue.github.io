function route(id) {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (!hashTag) {
    pageID = id;
  }

  $("a.current").removeClass("current");
  $(`#${pageID}`).addClass("current");

  if (!pageID) {
    MODEL.getPageData("home");
  } else {
    MODEL.getPageData(pageID);
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  route();

  //   $(".hamburger").click(function (e) {
  //     $(".mobile-nav").css("display", "flex");
  //   });

  //   $(".click").click(function (e) {
  //     $(".mobile-nav").css("display", "none");
  //   });

  //   $(".mobile-nav-link").click(function (e) {
  //     $(".mobile-nav").css("display", "none");
  //   });
}

$(document).ready(function () {
  initListeners();
  route("home");
});
