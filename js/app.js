// MainContoller와 연결을 한다.
import MainContoller from "./controllers/MainController.js"

document.addEventListener("DOMContentLoaded", () => {
    console.log("app.js");
    MainContoller.init();
});