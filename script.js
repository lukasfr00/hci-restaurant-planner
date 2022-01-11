let btn_step_1;
let btn_step_2;
let btn_step_2_back;
let btn_step_3;
let btn_step_3_back;
let btn_step_4;
let btn_step_4_back;
let btn_step_5;
let btn_step_5_back;
let btn_step_6;

let display_intro;
let display_form;
let display_table;
let display_meal;
let display_overview;
let display_complete;

document.addEventListener("DOMContentLoaded",() => {
    display_intro = document.getElementById("display_intro")
    display_form = document.getElementById("display_form")
    display_form.style.display = "none";
    display_table = document.getElementById("display_table")
    display_table.style.display = "none";
    display_meal = document.getElementById("display_meal")
    display_meal.style.display = "none";
    display_overview = document.getElementById("display_overview")
    display_overview.style.display = "none";
    display_complete = document.getElementById("display_complete")
    display_complete.style.display = "none";

    btn_step_1 = document.getElementById("btn_step_1");
    btn_step_1.addEventListener("click", open_form)

    btn_step_2 = document.getElementById("btn_step_2");
    btn_step_2.addEventListener("click", open_table)
    btn_step_2_back = document.getElementById("btn_step_2_back");
    btn_step_2_back.addEventListener("click", open_intro)

    btn_step_3 = document.getElementById("btn_step_3");
    btn_step_3.addEventListener("click", open_meal);
    btn_step_3_back = document.getElementById("btn_step_3_back");
    btn_step_3_back.addEventListener("click", open_form)

    btn_step_4 = document.getElementById("btn_step_4");
    btn_step_4.addEventListener("click", open_overview);
    btn_step_4_back = document.getElementById("btn_step_4_back");
    btn_step_4_back.addEventListener("click", open_table)

    btn_step_5 = document.getElementById("btn_step_5");
    btn_step_5.addEventListener("click", open_complete);
    btn_step_5_back = document.getElementById("btn_step_5_back");
    btn_step_5_back.addEventListener("click", open_meal)

    btn_step_6 = document.getElementById("btn_step_6");
    btn_step_6.addEventListener("click", open_intro);


});

function open_intro() {
    display_intro.style.display = "";
    display_form.style.display = "none";
    display_table.style.display = "none";
    display_meal.style.display = "none";
    display_overview.style.display = "none";
    display_complete.style.display = "none";
}

function open_form() {
    display_intro.style.display = "none";
    display_form.style.display = "";
    display_table.style.display = "none";
    display_meal.style.display = "none";
    display_overview.style.display = "none";
    display_complete.style.display = "none";
}

function open_table() {
    display_intro.style.display = "none";
    display_form.style.display = "none";
    display_table.style.display = "";
    display_meal.style.display = "none";
    display_overview.style.display = "none";
    display_complete.style.display = "none";
}

function open_meal() {
    display_intro.style.display = "none";
    display_form.style.display = "none";
    display_table.style.display = "none";
    display_meal.style.display = "";
    display_overview.style.display = "none";
    display_complete.style.display = "none";
}

function open_overview() {
    display_intro.style.display = "none";
    display_form.style.display = "none";
    display_table.style.display = "none";
    display_meal.style.display = "none";
    display_overview.style.display = "";
    display_complete.style.display = "none";
}

function open_complete() {
    display_intro.style.display = "none";
    display_form.style.display = "none";
    display_table.style.display = "none";
    display_meal.style.display = "none";
    display_overview.style.display = "none";
    display_complete.style.display = "";
}
