// event open
const dnToggle = document.querySelectorAll("[data-dn-toggle]");
const newDiv = document.createElement("div");
newDiv.classList.add("eventBg");

for (let i = 0; i < dnToggle.length; i++) {
  const _this = dnToggle[i];

  // toggle 버튼 click
  _this.addEventListener("click", (event) => {
    event.preventDefault();
    const dnTarget = document.querySelector(
      _this.getAttribute("data-dn-target")
    );
    document.querySelector("#m_wrap").appendChild(newDiv);

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
        350
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
      document.body.classList.add("overflow-hidden");
      dnTarget.classList.add("active");
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
    } else if (dnTarget.classList.contains("dropdown")) {
      //dropdown
      if (dnTarget.classList.contains("show")) {
        dnTarget.classList.remove("show");
        dnTarget.classList.add("hidden");
      } else {
        dnTarget.classList.remove("hidden");
        dnTarget.classList.add("show");
        dnTarget.animate(
          [
            { opacity: 0, height: 0 },
            { opacity: 1, height: "104px" },
          ],
          200
        );
        dnTarget.style.opacity = "1";
        dnTarget.style.height = "104px";
      }
    }

    newDiv.addEventListener("click", () => {
      if (dnTarget.classList.contains("offcanvas")) {
        // offcanvas clos
        document.body.classList.remove("overflow-hidden");
        // dnTarget.animate(
        //   [{ left: 0 }, { left: "-" + dnTarget.offsetWidth + "px" }],
        //   250
        // );
        setTimeout(() => {
          dnTarget.classList.remove("active");
        }, 200);
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
        }, 300);
      }
    });
  });
}

// modal click
const modal = document.querySelectorAll(".modal");
for (let i = 0; i < modal.length; i++) {
  const _this = modal[i];

  _this.addEventListener("click", (e) => {
    const content = _this.querySelector(".modal-dialog");
    e.stopPropagation();
    e.preventDefault();

    if (e.target === content) {
      if (content.classList.contains("alert")) {
        //
      } else {
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
          350
        );
        setTimeout(function () {
          _this.classList.remove("active");
        }, 300);

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
        }, 300);
      }
    }
  });
}

// event close - 공통
const btnClose = document.querySelectorAll("[data-dn-close]");

for (let i = 0; i < btnClose.length; i++) {
  const _close = btnClose[i];
  _close.addEventListener("click", () => {
    const eventTarget = document.querySelector(
      _close.getAttribute("data-dn-close")
    );
    console.log(eventTarget);

    if (eventTarget == "modal") {
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
        350
      );
      setTimeout(function () {
        eventTarget.classList.remove("active");
      }, 340);

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
      }, 350);
    } else if (eventTarget.classList.contains("dropdown")) {
      document.body.classList.remove("overflow-hidden");
      eventTarget.animate(
        [
          { opacity: 1, height: "104px" },
          { opacity: 0, height: 0 },
        ],
        200
      );
      eventTarget.classList.add("h-0");
      eventTarget.classList.remove("show");
      setTimeout(() => {
        eventTarget.classList.add("hidden");
      }, 250);
    } else if (eventTarget.classList.contains("offcanvas")) {
      document.body.classList.remove("overflow-hidden");
      // eventTarget.animate(
      //   [{ left: 0 }, { left: "-" + eventTarget.offsetWidth + "px" }],
      //   250
      // );
      setTimeout(() => {
        eventTarget.classList.remove("active");
      }, 200);
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
      }, 300);
    }
  });
}
// state-box loading
const stateBox = document.querySelectorAll(".state-box");
// const prDiv = stateBox[0].parentElement;
// const prDivHeight = (stateBox[0].offsetHeight * 7) + 144;
// prDiv.style.minHeight = "928px";

for (let i = 0; i < stateBox.length; i++) {
  const _this = stateBox[i];

  //_this.classList.remove("opacity-0");

  setTimeout(() => {
    _this.classList.remove("opacity-0");
    _this.animate(
      [
        {
          opacity: 0,
          marginTop: i * 20 + "%",
        },
        {
          opacity: 0.2,
          marginTop: i * 10 + "%",
        },
        {
          opacity: 1,
          marginTop: 0,
        },
      ],
      550
    );
  }, (i / 2) * 250);
}

// list더보기 딜레이
const moreBtn = document.querySelectorAll(".list-more");

for (let i = 0; i < moreBtn.length; i++) {
  const _this = moreBtn[i];
  _this.classList.remove("hidden");
  setTimeout(() => {
    _this.classList.remove("hidden");
    _this.animate([{ opacity: 0 }, { opacity: 1 }], 500);
  }, 1500);
}



function closeModal(modal, overlay) {
  document.body.classList.remove("overflow-hidden");
  modal.animate(
    [
      {
        opacity: 1,
        marginTop: 0,
      },
      {
        opacity: 0,
        marginTop: "5%",
      },
    ],
    350
  );
  setTimeout(function () {
    modal.classList.remove("active");
  }, 340);

  overlay.animate(
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
    overlay.classList.remove("active");
  }, 350);
}
