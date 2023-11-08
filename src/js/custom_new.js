const body = document.body;
const wrap = document.querySelector("#m_wrap");
const newDiv = document.createElement("div");
newDiv.classList.add("eventBg");
const animationDuration = 350;

function animateElement(element, keyframes, duration) {
  return new Promise((resolve) => {
    element.animate(keyframes, duration).onfinish = () => {
      resolve();
    };
  });
}

function openElement(dnTarget) {
  body.classList.add("overflow-hidden");
  dnTarget.classList.add("active");
  dnTarget.animate(
    [
      { opacity: 0, marginTop: "5%" }, // 시작 상태
      { opacity: 1, marginTop: 0 }, // 종료 상태
    ],
    animationDuration
  );
  newDiv.classList.add("active");
  newDiv.animate(
    [
      { opacity: 0 }, // 시작 상태
      { opacity: 1 }, // 종료 상태
    ],
    animationDuration
  );
}

function closeElement(eventTarget, removeClass, extraAction) {
  body.classList.remove("overflow-hidden");
  animateElement(
    eventTarget,
    [
      { opacity: 1, marginTop: 0 }, // 시작 상태
      { opacity: 0, marginTop: "5%" }, // 종료 상태
    ],
    animationDuration
  ).then(() => {
    eventTarget.classList.remove("active");
    if (removeClass) {
      eventTarget.classList.remove(removeClass);
    }
    if (extraAction) {
      extraAction();
    }
  });
}

const dnToggle = document.querySelectorAll("[data-dn-toggle]");

for (let i = 0; i < dnToggle.length; i++) {
  const _this = dnToggle[i];

  _this.addEventListener("click", (event) => {
    event.preventDefault();
    const dnTarget = document.querySelector(
      _this.getAttribute("data-dn-target")
    );
    wrap.appendChild(newDiv);

    if (dnTarget.classList.contains("modal")) {
      openElement(dnTarget);
    } else if (dnTarget.classList.contains("offcanvas")) {
      openElement(dnTarget);
    } else if (dnTarget.classList.contains("dropdown")) {
      if (dnTarget.classList.contains("show")) {
        closeElement(dnTarget, "show", () => {
          dnTarget.classList.add("hidden");
        });
      } else {
        dnTarget.classList.remove("hidden");
        dnTarget.classList.add("show");
        dnTarget.animate(
          [
            { opacity: 0, height: 0 }, // 시작 상태
            { opacity: 1, height: "104px" }, // 종료 상태
          ],
          200
        );
        dnTarget.style.opacity = "1";
        dnTarget.style.height = "104px";
      }
    }

    newDiv.addEventListener("click", () => {
      if (dnTarget.classList.contains("offcanvas")) {
        closeElement(dnTarget, null, () => {
          animateElement(newDiv, [{ opacity: 1 }, { opacity: 0 }], 360).then(
            () => {
              newDiv.classList.remove("active");
            }
          );
        });
      }
    });
  });
}

const modal = document.querySelectorAll(".modal");

for (let i = 0; i < modal.length; i++) {
  const _this = modal[i];

  _this.addEventListener("click", (e) => {
    const content = _this.querySelector(".modal-dialog");
    e.stopPropagation();
    e.preventDefault();

    if (e.target === content) {
      if (content.classList.contains("alert")) {
        // 추가 작업
      } else {
        closeElement(_this, null, () => {
          animateElement(newDiv, [{ opacity: 1 }, { opacity: 0 }], 360).then(
            () => {
              newDiv.classList.remove("active");
            }
          );
        });
      }
    }
  });

  // 모달 내의 닫기 버튼에 대한 클릭 이벤트 핸들러 추가
  const closeButton = _this.querySelector(".close-button");
  if (closeButton) {
    closeButton.addEventListener("click", (event) => {
      closeElement(_this, null, () => {
        animateElement(newDiv, [{ opacity: 1 }, { opacity: 0 }], 360).then(
          () => {
            newDiv.classList.remove("active");
          }
        );
      });
    });
  }
}

const stateBox = document.querySelectorAll(".state-box");

for (let i = 0; i < stateBox.length; i++) {
  const _this = stateBox[i];

  setTimeout(() => {
    _this.classList.remove("opacity-0");
    animateElement(
      _this,
      [
        { opacity: 0, marginTop: i * 20 + "%" }, // 시작 상태
        { opacity: 0.2, marginTop: i * 10 + "%" }, // 중간 상태
        { opacity: 1, marginTop: 0 }, // 종료 상태
      ],
      550
    );
  }, (i / 2) * 250);
}

const moreBtn = document.querySelectorAll(".list-more");

for (let i = 0; i < moreBtn.length; i++) {
  const _this = moreBtn[i];
  _this.classList.remove("hidden");
  setTimeout(() => {
    _this.classList.remove("hidden");
    animateElement(_this, [{ opacity: 0 }, { opacity: 1 }], 500);
  }, 1500);
}
