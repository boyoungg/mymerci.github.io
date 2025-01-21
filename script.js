//1초마다 키워드 바꾸는 그거..
function mainTextSlide (spanId, title) {
  let index = 0;
  const spanEle = document.getElementById(spanId);

  setInterval(() => {
    index = (index + 1) % title.length;
    spanEle.textContent = title[index];
  }, 1500)
}

document.addEventListener("DOMContentLoaded", () => {
  // 변경할 키워드 추가
  const title = ["편리하니까,", "채워주세여,", "다섯글자가," , "좋은듯해요,"]
  mainTextSlide("slide_text", title);




});



