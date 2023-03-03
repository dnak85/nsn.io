// event open
const dnToggle = document.querySelectorAll("[data-dn-toggle]");
const newDiv = document.createElement("div");
newDiv.classList.add("eventBg");

for (i = 0; i < dnToggle.length; i++) {
  const _this = dnToggle[i];

  // toggle 버튼 click
  _this.addEventListener("click", () => {
    const dnTarget = document.querySelector(_this.getAttribute("data-dn-target"));
    document.body.appendChild(newDiv);

    if (dnTarget.classList.contains("modal")) {
      // modal
      document.body.classList.add("overflow-hidden");
      dnTarget.classList.add("active");
      dnTarget.animate(
        [
          {
            opacity: 0,
            marginTop: "5%",
          },
          {
            opacity: 1,
            marginTop: 0,
          },
        ],
        450
      );
      newDiv.classList.add("active");
      newDiv.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        350
      );
    } else if (dnTarget.classList.contains("offcanvas")) {
      //offcanvas
      dnTarget.classList.add("active");
    }
  });
}

// modal click
const modal = document.querySelectorAll(".modal");
for (i = 0; i < modal.length; i++) {
  const _this = modal[i];

  _this.addEventListener("click", (e) => {
    const content = _this.querySelector(".modal-dialog");
    e.stopPropagation();
    e.preventDefault();

    if (e.target === content) {
      document.body.classList.remove("overflow-hidden");
      _this.animate(
        //from keyframe
        [
          {
            opacity: 1,
            marginTop: 0,
          },
          //to keyframe
          {
            opacity: 0,
            marginTop: "5%",
          },
        ],
        450
      );
      setTimeout(function () {
        _this.classList.remove("active");
      }, 440);

      newDiv.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ],
        460
      );
      setTimeout(function () {
        newDiv.classList.remove("active");
      }, 450);
    }
  });
}

// event close - 공통
const btnClose = document.querySelectorAll("[data-dn-close]");

for (i = 0; i < btnClose.length; i++) {
  const _close = btnClose[i];
  _close.addEventListener("click", (e) => {
    const eventTarget = document.querySelector(_close.getAttribute("data-dn-close"));

    if (eventTarget.classList.contains("modal")) {
      document.body.classList.remove("overflow-hidden");
      eventTarget.animate(
        //from keyframe
        [
          {
            opacity: 1,
            marginTop: 0,
          },
          //to keyframe
          {
            opacity: 0,
            marginTop: "5%",
          },
        ],
        450
      );
      setTimeout(function () {
        eventTarget.classList.remove("active");
      }, 440);

      newDiv.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ],
        360
      );
      setTimeout(function () {
        newDiv.classList.remove("active");
      }, 450);
    }
  });
}

// state-box loading
const stateBox = document.querySelectorAll(".state-box");

for (i = 0; i < stateBox.length; i++) {
  const _this = stateBox[i];

  setTimeout(() => {
    _this.classList.remove("opacity-0");
    _this.animate(
      [
        {
          opacity: 0,
          marginTop: i * 10 + "%",
        },
        {
          opacity: 0.2,
          marginTop: i * 2 + "%",
        },
        {
          opacity: 1,
          marginTop: 0,
        },
      ],
      550
    );
  }, (i / 2) * 400);
}
