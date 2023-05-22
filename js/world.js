(function () {
  const houseElem = document.querySelector(".house");
  const progressBarElem = document.querySelector(".progress-bar");
  const stageElem = document.querySelector(".stage");

  let maxScroll = document.body.clientHeight - window.innerHeight;

  function scrollMove() {
    const zMove = (scrollY / maxScroll) * 980 - 490;
    houseElem.style.transform = `translateZ(${zMove}vw)`;
  }

  function scrollRatio() {
    const yMove = (scrollY / maxScroll) * 100;
    progressBarElem.style.width = `${yMove}vw`;
  }

  function scrollHanlder() {
    scrollMove();
    scrollRatio();
  }

  function resizeEvent() {
    maxScroll = document.body.clientHeight - window.innerHeight;
  }

  function mouseHanlder(e) {
    const xRotate = (e.clientX - this.innerWidth / 2) / (this.innerWidth / 2);
    const yRotate = -(e.clientY - this.innerHeight / 2) / (this.innerWidth / 2);
    stageElem.style.transform = `rotateX(${yRotate * 5}deg) rotateY(${
      xRotate * 5
    }deg)`;
  }

  window.addEventListener("mousemove", mouseHanlder);

  window.addEventListener("scroll", scrollHanlder);
  window.addEventListener("resize", resizeEvent);
})();
