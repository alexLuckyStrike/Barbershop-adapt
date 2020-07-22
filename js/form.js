
(function Check() {

    let form = document.querySelector('.form');
    let group = document.querySelectorAll('.point');
    let fail = document.querySelector('.fail');
    let success = document.querySelector('.success');
    let modalBtn = document.querySelectorAll('.modal__btn');
    let modal = document.querySelectorAll('.modal');
    let enter = document.querySelector('.user-menu__item--enter');
    let PrivateRoom = document.querySelector('.private');



    form.addEventListener('submit', function (e) {
        e.preventDefault();
        for (let i = 0; i < group.length; i++) {
            if (!group[i].value) {
                group[i].style.border = '1px solid red';
                fail.classList.add('popup--appear');
            } else {
                success.classList.add('popup--appear');
            }
        }
    });


    for (let i = 0; i < modalBtn.length; i++) {
        modalBtn[i].addEventListener('click', function () {
            for (let e = 0; e < modal.length; e++) {
                modal[e].classList.remove('popup--appear');
            }
        });
    }

    enter.addEventListener('click',function(){

        PrivateRoom.classList.add('popup--appear');
    });

}());





















