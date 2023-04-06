const btn = document.querySelector('.calendar-text');
const picker = document.querySelector('#date');
picker.addEventListener("mouseover", function(){
    btn.classList.add('hover');
});
picker.addEventListener("mouseout", function(){
btn.classList.remove('hover');
});
new AirDatepicker("#date", {
    autoClose: true,
    inline: false,
    onShow() {
         btn.classList.add('active');
    },
    onHide() {
        btn.classList.remove('active');
    }
}); // Выбор пунков списка



