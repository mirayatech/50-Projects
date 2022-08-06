const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9bc7a40-49f8-471c-b031-04a2491894f8/ddh3crc-b410ad5c-6875-4059-9652-be916e6f4ed8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U5YmM3YTQwLTQ5ZjgtNDcxYy1iMDMxLTA0YTI0OTE4OTRmOFwvZGRoM2NyYy1iNDEwYWQ1Yy02ODc1LTQwNTktOTY1Mi1iZTkxNmU2ZjRlZDguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qB4O98ziLAxdLUnZzZzAuIiiN9DvwMHwRE9tzAjbV9Q" alt="" />';
  title.innerHTML = "Kimetsu no Yaiba Wiki";
  excerpt.innerHTML = "生殺与奪の権を他人に握らせるな";
  profile_img.innerHTML =
    '<img src="https://i.pinimg.com/736x/cf/ca/43/cfca4334bf8b85b7ca926f232d125b3e.jpg" alt="" />';
  name.innerHTML = "Tanjirō";
  date.innerHTML = "Aug 06, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
