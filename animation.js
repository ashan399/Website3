let tl = gsap.timeline();
tl.from("#wind", 2.5, { opacity: 0, ease: "power4.inOut" });
let i;
for (i = 1; i <= 10; i++) {
  let tl_loading1 = gsap.timeline();
  tl_loading1.to("#rect" + i, 1.5, {
    width: "100%",
    ease: "power3.inOut",
    delay: 2 + i / 5 + 0.2,
  });
  if (i == 10) {
    tl_loading1.to(
      "#rect1,#rect2, #rect3, #rect4, #rect5,#rect6, #rect7, #rect8, #rect9, #rect10",
      1.4,
      { x: "200%", ease: "power4.inOut" }
    );
  }
}

document.getElementById("video").removeAttribute("controls");
let playVideo = function () {
  let video = document.getElementById("video");
  video.currentTime = 25.6;
  console.log(video.currentTime);
  video.play();
};

let invertColor = function () {
  console.log("here");
  document.getElementById("video").style.filter = "invert(.8) contrast(140%) ";
};
gsap.to("#loaded", 0.5, { opacity: 1, delay: 4 });
gsap.to("#wind,#loaded", 0.1, { opacity: "0", delay: 6.2 });
let tl_play_vid = gsap.timeline();
tl_play_vid
  .to("#project-wind", 0.5, { opacity: "1", delay: 6.2 })
  .to("nothing", 1, { delay: 1 })
  .call(playVideo)
  .to("#project-wind", 2, {
    x: "30",
    opacity: 0,
    delay: 2,
    ease: "power1.inOut",
  });
gsap.to("body", 3, { backgroundColor: "#ffffff", delay: 4 });
let tl_fadeout_resize = gsap
  .timeline()
  .to("#video", 3, { opacity: "0", delay: 13.2 })
  .to("#video", 0, {
    width: "32vw",
    height: "80vh",
    left: "25vw",
    top: "10vh",
    ease: "circ.out",
  })
  .call(invertColor)
  .to("#video", 4, {
    opacity: 0.4,
    ease: "circ.out",
  });
// .set("#video", { filter: invert(1) });
gsap.to(".title", 1, { opacity: 1, delay: 14 });
