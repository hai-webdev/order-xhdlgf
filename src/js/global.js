$("#dowebok").fullpage({
  navigation: true,
  sectionsColor: ["#1bbc9b", "#fff", "#f6f6f6", "#fff", "#f6f6f6", "#fff"],
  onLeave: function (anchorLink, item) {
    if(item.index === 0){
        $("header").removeClass("on");
    }else {
        $("header").addClass("on");
        
    }
  },

});

$(".alert-btn").on("click", function () {
  $(".alert").fadeIn();
});
$(".close").on("click", function () {
  $(".alert").fadeOut();
});
