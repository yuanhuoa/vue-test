import "../static/css/popup.css";
import $ = require("../static/js/jquery-3.3.1.min.js");

import {
  DIV_SHOW
} from "./constans";

function addDocumentUrlListener() {
  document.body.insertAdjacentHTML("beforeend", DIV_SHOW);
  $("#_close_show").click(function () {
    $("#div_show").css("display", "none")
  })
}
addDocumentUrlListener();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message.title === "change-show"){
    // 显示主div   chrome-extension://acihopjfdoofljkkkkijpfafmglgjdam/static/icons/icon_16.png
    if($("#div_show").css("display") == "none"){
      $("#div_show").css("display", "block")
    } else {
      $("#div_show").css("display", "none")
    }
  }
});

/**
 * 播放 audio
 */
function playSuccessAudio() {
  let audio: HTMLAudioElement = new Audio(chrome.runtime.getURL('static/sounds/extension_success.mp3'));
  audio.play();
}

