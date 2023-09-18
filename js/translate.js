let ua_name = "Олександр Ясінський 🇺🇦"
let ua_short_bio = "19yo, <b>Android Developer</b><br>з Києва, Україна"

let ua_about_h1 = "Про мене";
let ua_about_edu = 'Навчаюсь на інженерії програмного забезпечення в <a href="https://istu.edu.ua/" target="_blank"> International Scientific and Technical University</a>'
let ua_about_me = 'Останні два роки займаюсь розробкою під Android, опановую Kotlin і сучасний підхід до розробки, архітектуру, Android Jetpack. Приймаю активну участь в цікавих проєктах. Є досвід роботи в комерційних додатках'
let ua_about_read = 'Читаю <a href="https://bookmate.com/@nexy791/books/all" target="_blank">тут</a> у вільний час'
let ua_about_fun_fact = '<b>Fun Fact:</b> У 14 років опублікував перший додаток у Google Play 💎'
let ua_about_my_works = 'Мої роботи і мою активність можна побачити за посиланнями нижче'

let ua_stack_h1 = "Стек"
let ua_stack_desc = "Технології, які я активно використовую або був досвід роботи з ними"
let ua_l1 = "Українська - Носій 🇺🇦"
let ua_l2 = "Російська - Рівень Носія 🇷🇺"
let ua_l3 = "Англійська - B2 🇺🇸"
let ua_stack_h2_1 = "Загальне"
let ua_stack_h2_2 = "Детальніше"

let ua_work_exp = "Досвід роботи"
let ua_work_desc = "Маю бажання навчатись новому, покращувати знання і працювати в цікавих проектах. <br> <b>🧑🏻‍💻 Відкрит для пропозицій </b> Part Time / Remote Job"
let ua_pdf = "Завантажити PDF-копію"


let en_name = "Olexandr Yasinskyi 🇺🇦";
let en_short_bio = "19yo, <b>Android Developer</b><br> from Kyiv, Ukraine";

let en_about_h1 = "About me";
let en_about_edu = 'Im studying software engineering at <a href="https://istu.edu.ua/" target="_blank">International Scientific and Technical University</a>';
let en_about_me = 'For the last 2 years I have been developing for Android, studying Kotlin and modern approach to development, architecture, Android Jetpack. Actively involved in interesting projects. I have experience in commercial apps'
let en_about_read = 'I read <a href="https://bookmate.com/@nexy791/books/all" target="_blank">there</a> in my spare time'
let en_about_fun_fact = '<b>Fun Fact:</b> At 14, I published my first app on Google Play 💎'
let en_about_my_works = 'You can see my work and my activity at the links below'


let en_stack_h1 = "Stack"
let en_stack_desc = "Technologies that I actively use or have had experience with"
let en_l1 = "Ukrainian - Native 🇺🇦"
let en_l2 = "Russian - Native Level 🇷🇺"
let en_l3 = "English - B2 🇺🇸"
let en_stack_h2_1 = "General"
let en_stack_h2_2 = "More"

let en_work_exp = "Work experience"
let en_work_desc = "I have a huge interest to learn new things, improve my knowledge and work in interesting projects.<br><b>🧑🏻‍💻 Open to suggestions</b> Part Time / Remote Job "
let en_pdf = "Download PDF copy"

$(function () {
    return
    updateText()

    $('#en').click(function () {
        window.location.hash = "en"
        updateText()
    });
    $('#ua').click(function () {
        window.location.hash = "ua"
        updateText()
    });

});

function updateText() {
    $(window).scrollTop(0);
    let lang = window.location.hash.split('#')[1]
    if (lang === "en") {

        $("#ua").html("UA")
        $("#en").html("<b>EN</b>")


        $("#name").html(en_name)
        $("#short_bio").html(en_short_bio)

        $("#about_h1").html(en_about_h1)
        $("#about_edu").html(en_about_edu)
        $('#about_me').html(en_about_me)
        //$("#about_read").html(en_about_read)
        $("#about_fun_fact").html(en_about_fun_fact)
        $('#about_my_works').html(en_about_my_works)


        $("#stack_h1").html(en_stack_h1)
        $("#stack_description").html(en_stack_desc)
        $("#l1").html(en_l1)
        // $("#l2").html(en_l2)
        $("#l3").html(en_l3)

        $("#stack_h2_1").html(en_stack_h2_1)
        $("#stack_h2_2").html(en_stack_h2_2)

        $("#work_exp").html(en_work_exp)
        $("#work_desc").html(en_work_desc)

        $("#pdf").html(en_pdf)

    } else {

        $("#ua").html("<b>UA</b>")
        $("#en").html("EN")

        $("#name").html(ua_name)
        $("#short_bio").html(ua_short_bio)

        $("#about_h1").html(ua_about_h1)
        $("#about_edu").html(ua_about_edu)
        $('#about_me').html(ua_about_me)
        // $("#about_read").html(ua_about_read)
        $("#about_fun_fact").html(ua_about_fun_fact)
        $('#about_my_works').html(ua_about_my_works)

        $("#stack_h1").html(ua_stack_h1)
        $("#stack_description").html(ua_stack_desc)
        $("#l1").html(ua_l1)
        // $("#l2").html(ua_l2)
        $("#l3").html(ua_l3)

        $("#stack_h2_1").html(ua_stack_h2_1)
        $("#stack_h2_2").html(ua_stack_h2_2)

        $("#work_exp").html(ua_work_exp)
        $("#work_desc").html(ua_work_desc)

        $("#pdf").html(ua_pdf)

    }
}