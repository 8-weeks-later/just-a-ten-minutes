"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const dateSection = document.querySelector(".date");
    if (dateSection) {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfWeek = date.getDay();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const dateString = `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${hour}시 ${minute}분`;
        dateSection.textContent = dateString;
    }
});
