var TimePick = (function () {
  "use strict";

  var Constructor = function (element, use12HourFormat = false) {
    var globalvar = {};
    globalvar.set_hour = {};
    globalvar.set_minute = {};

    let is12HourFormat = use12HourFormat;

    if (document.getElementById("TimePickStyleSheet") == null) {
      MakeStyle();
    }

    var unique_id = RandomString(5);

    if (document.getElementById("TimePickBackgroundOverlay") == null) {
      let overlaydiv = document.createElement("div");
      overlaydiv.id = "TimePickBackgroundOverlay";
      document.body.insertBefore(overlaydiv, document.body.firstChild);
    }

    globalvar.elemets = document.querySelectorAll(element);

    for (var i = 0; i < globalvar.elemets.length; i++) {
      let timepickerbtn = globalvar.elemets[i];
      let TIMESARRAY = {};
      globalvar.elemets[i].setAttribute(
        "TimePick",
        "input_" + unique_id + "_" + i
      );
      timepickerbtn.insertAdjacentHTML(
        "afterend",
        `<button class="TimePick_BTN"><svg class="TimePick_ICON" id="${
          unique_id + "_" + i
        }" height="20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            
            
                <div class="TimePick_POPUP" id="popup_${unique_id + "_" + i}">
                    <div class="hour">
                        <div class="adjustbtn uparrow" data='{"type": "hour", "action": "up", "id":"${
                          unique_id + "_" + i
                        }"}'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6.70005 14.6998C6.51672 14.5165 6.42505 14.2831 6.42505 13.9998C6.42505 13.7165 6.51672 13.4831 6.70005 13.2998L11.3 8.6998C11.4 8.5998 11.5084 8.5288 11.625 8.4868C11.7417 8.44547 11.8667 8.4248 12 8.4248C12.1334 8.4248 12.2627 8.4498 12.388 8.4998C12.5127 8.5498 12.6167 8.61647 12.7 8.6998L17.3 13.2998C17.4834 13.4831 17.575 13.7165 17.575 13.9998C17.575 14.2831 17.4834 14.5165 17.3 14.6998C17.1167 14.8831 16.8834 14.9748 16.6 14.9748C16.3167 14.9748 16.0834 14.8831 15.9 14.6998L12 10.7998L8.10005 14.6998C7.91672 14.8831 7.68338 14.9748 7.40005 14.9748C7.11672 14.9748 6.88338 14.8831 6.70005 14.6998Z" fill="black"/>
</svg></div>
                        <div id="label_hour_${
                          unique_id + "_" + i
                        }" class="label">00</div>
                        <div class="adjustbtn downarrow" data='{"type": "hour", "action": "down", "id":"${
                          unique_id + "_" + i
                        }"}'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 14.9748C11.8667 14.9748 11.7377 14.9498 11.613 14.8998C11.4877 14.8498 11.3834 14.7831 11.3 14.6998L6.70005 10.0998C6.51672 9.91647 6.42505 9.68314 6.42505 9.3998C6.42505 9.11647 6.51672 8.88314 6.70005 8.6998C6.88338 8.51647 7.11672 8.4248 7.40005 8.4248C7.68338 8.4248 7.91672 8.51647 8.10005 8.6998L12 12.5998L15.9 8.6998C16.0834 8.51647 16.3167 8.4248 16.6 8.4248C16.8834 8.4248 17.1167 8.51647 17.3 8.6998C17.4834 8.88314 17.575 9.11647 17.575 9.3998C17.575 9.68314 17.4834 9.91647 17.3 10.0998L12.7 14.6998C12.6 14.7998 12.4917 14.8705 12.375 14.9118C12.2584 14.9538 12.1334 14.9748 12 14.9748Z" fill="black"/>
</svg></div>
                    </div>
                    <div class="minute">
                        <div class="adjustbtn uparrow" data='{"type": "minute", "action": "up", "id":"${
                          unique_id + "_" + i
                        }"}'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6.70005 14.6998C6.51672 14.5165 6.42505 14.2831 6.42505 13.9998C6.42505 13.7165 6.51672 13.4831 6.70005 13.2998L11.3 8.6998C11.4 8.5998 11.5084 8.5288 11.625 8.4868C11.7417 8.44547 11.8667 8.4248 12 8.4248C12.1334 8.4248 12.2627 8.4498 12.388 8.4998C12.5127 8.5498 12.6167 8.61647 12.7 8.6998L17.3 13.2998C17.4834 13.4831 17.575 13.7165 17.575 13.9998C17.575 14.2831 17.4834 14.5165 17.3 14.6998C17.1167 14.8831 16.8834 14.9748 16.6 14.9748C16.3167 14.9748 16.0834 14.8831 15.9 14.6998L12 10.7998L8.10005 14.6998C7.91672 14.8831 7.68338 14.9748 7.40005 14.9748C7.11672 14.9748 6.88338 14.8831 6.70005 14.6998Z" fill="black"/>
</svg></div>
<div id="label_minute_${unique_id + "_" + i}" class="label">00</div>
                        <div class="adjustbtn downarrow" data='{"type": "minute", "action": "down", "id":"${
                          unique_id + "_" + i
                        }"}'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 14.9748C11.8667 14.9748 11.7377 14.9498 11.613 14.8998C11.4877 14.8498 11.3834 14.7831 11.3 14.6998L6.70005 10.0998C6.51672 9.91647 6.42505 9.68314 6.42505 9.3998C6.42505 9.11647 6.51672 8.88314 6.70005 8.6998C6.88338 8.51647 7.11672 8.4248 7.40005 8.4248C7.68338 8.4248 7.91672 8.51647 8.10005 8.6998L12 12.5998L15.9 8.6998C16.0834 8.51647 16.3167 8.4248 16.6 8.4248C16.8834 8.4248 17.1167 8.51647 17.3 8.6998C17.4834 8.88314 17.575 9.11647 17.575 9.3998C17.575 9.68314 17.4834 9.91647 17.3 10.0998L12.7 14.6998C12.6 14.7998 12.4917 14.8705 12.375 14.9118C12.2584 14.9538 12.1334 14.9748 12 14.9748Z" fill="black"/>
</svg></div>
                    </div>
                    <div class="ampm">
                        <div class="adjustbtn uparrow ampm-btn" data='{"type": "ampm", "action": "toggle", "id":"${
                          unique_id + "_" + i
                        }"}'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6.70005 14.6998C6.51672 14.5165 6.42505 14.2831 6.42505 13.9998C6.42505 13.7165 6.51672 13.4831 6.70005 13.2998L11.3 8.6998C11.4 8.5998 11.5084 8.5288 11.625 8.4868C11.7417 8.44547 11.8667 8.4248 12 8.4248C12.1334 8.4248 12.2627 8.4498 12.388 8.4998C12.5127 8.5498 12.6167 8.61647 12.7 8.6998L17.3 13.2998C17.4834 13.4831 17.575 13.7165 17.575 13.9998C17.575 14.2831 17.4834 14.5165 17.3 14.6998C17.1167 14.8831 16.8834 14.9748 16.6 14.9748C16.3167 14.9748 16.0834 14.8831 15.9 14.6998L12 10.7998L8.10005 14.6998C7.91672 14.8831 7.68338 14.9748 7.40005 14.9748C7.11672 14.9748 6.88338 14.8831 6.70005 14.6998Z" fill="black"/>
</svg></div>
<div id="label_ampm_${unique_id + "_" + i}" class="label">AM</div>
                        <div class="adjustbtn downarrow ampm-btn" data='{"type": "ampm", "action": "toggle", "id":"${
                          unique_id + "_" + i
                        }"}'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 14.9748C11.8667 14.9748 11.7377 14.9498 11.613 14.8998C11.4877 14.8498 11.3834 14.7831 11.3 14.6998L6.70005 10.0998C6.51672 9.91647 6.42505 9.68314 6.42505 9.3998C6.42505 9.11647 6.51672 8.88314 6.70005 8.6998C6.88338 8.51647 7.11672 8.4248 7.40005 8.4248C7.68338 8.4248 7.91672 8.51647 8.10005 8.6998L12 12.5998L15.9 8.6998C16.0834 8.51647 16.3167 8.4248 16.6 8.4248C16.8834 8.4248 17.1167 8.51647 17.3 8.6998C17.4834 8.88314 17.575 9.11647 17.575 9.3998C17.575 9.68314 17.4834 9.91647 17.3 10.0998L12.7 14.6998C12.6 14.7998 12.4917 14.8705 12.375 14.9118C12.2584 14.9538 12.1334 14.9748 12 14.9748Z" fill="black"/>
</svg></div>
                    </div>
                </div>
            </button>`
      );

      if (globalvar.elemets[i].value) {
        let previustimestr = globalvar.elemets[i].value;
        let previustimes = previustimestr.split(":");
        let uniquecode = `${unique_id + "_" + i}`;

        document.getElementById("label_hour_" + uniquecode).innerText =
          previustimes[0];
        document.getElementById("label_minute_" + uniquecode).innerText =
          previustimes[1];
        document.getElementById("label_ampm_" + uniquecode).innerText =
          previustimes[2];
      } else {
        //   초기값 설정
        globalvar.elemets[i].setAttribute("value", "00:00:AM");
      }
    }

    let timepickpopupbtn = document.getElementsByClassName("TimePick_ICON");
    for (let i = 0; i < timepickpopupbtn.length; i++) {
      timepickpopupbtn[i].onclick = function () {
        let currID = "popup_" + timepickpopupbtn[i].id;
        if (document.getElementById(currID).style.display == "flex") {
          document.getElementById(currID).style.display = "none";
          return;
        }
        document.getElementById(currID).style.display = "flex";
      };
    }

    document.onclick = function (e) {
      if (e.target.id == "TimePickBackgroundOverlay") {
        let TimePick_POPUP = document.getElementsByClassName("TimePick_POPUP");
        for (let i = 0; i < TimePick_POPUP.length; i++) {
          TimePick_POPUP[i].style.display = "none";
        }
      }
    };

    let adjustbtn = document.getElementsByClassName("adjustbtn");

    for (let i = 0; i < adjustbtn.length; i++) {
      adjustbtn[i].onclick = function () {
        let data = JSON.parse(adjustbtn[i].getAttribute("data"));

        let curr_hour = document.getElementById(
          "label_hour_" + data.id
        ).innerText;
        let curr_minute = document.getElementById(
          "label_minute_" + data.id
        ).innerText;
        let curr_ampm = document.getElementById(
          "label_ampm_" + data.id
        ).innerText;

        // AM/PM 토글 로직
        if (data.type == "ampm" && data.action == "toggle") {
          let ampmLabel = document.getElementById("label_ampm_" + data.id);
          let currentAmPm = ampmLabel.innerText;

          if (currentAmPm === "AM") {
            ampmLabel.innerText = "PM";
          } else {
            ampmLabel.innerText = "AM";
          }
        }

        if (curr_hour != "00") {
          globalvar.set_hour[data.id] = parseInt(curr_hour);
        }

        if (is12HourFormat && data.type == "hour") {
          globalvar.set_hour[data.id] = globalvar.set_hour[data.id] % 12 || 12; // 12시간 형식으로 변환
        }

        if (curr_minute != "00") {
          globalvar.set_minute[data.id] = parseInt(curr_minute);
        }

        if (data.type == "hour" && data.action == "up") {
          globalvar.set_hour[data.id] = globalvar.set_hour[data.id]
            ? globalvar.set_hour[data.id] + 1
            : 1;
          globalvar.set_hour[data.id] =
            globalvar.set_hour[data.id] == 13 ? 1 : globalvar.set_hour[data.id];
        }

        if (data.type == "hour" && data.action == "down") {
          globalvar.set_hour[data.id] = globalvar.set_hour[data.id]
            ? globalvar.set_hour[data.id] - 1
            : 12;
          globalvar.set_hour[data.id] =
            globalvar.set_hour[data.id] == 0 ? 12 : globalvar.set_hour[data.id];
        }

        if (data.type == "minute" && data.action == "up") {
          globalvar.set_minute[data.id] = globalvar.set_minute[data.id]
            ? globalvar.set_minute[data.id] + 1
            : 0 + 1;
          globalvar.set_minute[data.id] =
            globalvar.set_minute[data.id] == 60
              ? 0
              : globalvar.set_minute[data.id];
        }
        if (data.type == "minute" && data.action == "down") {
          globalvar.set_minute[data.id] = globalvar.set_minute[data.id]
            ? globalvar.set_minute[data.id] - 1
            : -1;
          globalvar.set_minute[data.id] =
            globalvar.set_minute[data.id] == -1
              ? 59
              : globalvar.set_minute[data.id];
        }

        let hrview =
          globalvar.set_hour[data.id] == undefined
            ? "00"
            : globalvar.set_hour[data.id] < 10
            ? "0" + globalvar.set_hour[data.id]
            : globalvar.set_hour[data.id];
        let mnview =
          globalvar.set_minute[data.id] == undefined
            ? "00"
            : globalvar.set_minute[data.id] < 10
            ? "0" + globalvar.set_minute[data.id]
            : globalvar.set_minute[data.id];

        // 12시간 형식이 설정된 경우 AM/PM 라벨 업데이트
        let ampmLabel = document.getElementById("label_ampm_" + data.id);
        if (is12HourFormat) {
          ampmLabel.innerText = globalvar.set_hour[data.id] < 12 ? "AM" : "PM";
        }

        document.getElementById("label_hour_" + data.id).innerText = hrview;
        document.getElementById("label_minute_" + data.id).innerText = mnview;

        document.querySelectorAll(
          "input[TimePick=input_" + data.id + "]"
        )[0].value = hrview + ":" + mnview + ":" + ampmLabel.innerText;
      };
    }

    //private function
    function RandomString(length) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    function MakeStyle() {
      var styles =
        ".TimePick_POPUP{ position: absolute; height: 80px; width: 120px; background-color: #ffffff; border-radius: 3px; border: 1px solid #eeeeee; display: flex; justify-content: center; align-items: center; box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px; z-index:500; margin-left: 30px; margin-top: -32px; display: none;} svg:active{ fill: #0000; stroke: #0000;} .TimePick_BTN{ position: absolute; background-color: transparent; border: none; margin-left: -35px; margin-top: 7px; cursor: pointer;} .TimePick_ICON{ opacity: 0.5;} .TimePick_ICON:hover{ opacity: 1;} input{ padding: 10px; border-width: 1px; border-style: solid; border-color: lightgray; background-color: white;} #TimePickBackgroundOverlay{ background-color:transparent; position:fixed; top:0; left:0; right:0; bottom:0; display:block;} .label{ font-size: 20px;} .hour{ display: flex; flex-direction: column; width: 35px;} .minute{ display: flex; flex-direction: column; width: 35px;} .second{ display: flex; flex-direction: column; width: 35px;}";
      var styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.id = "TimePickStyleSheet";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
      return;
    }

    return globalvar;
  };

  return Constructor;
})();
/**********
 *************************************************************************
 *********** JAVASCRIPT MODULE TIME PICKER DONE BY KATHEESKUMAR **********
 *************************************************************************
 ***************************** Version: 1.0 ******************************
 *************************************************************************
 **********/
