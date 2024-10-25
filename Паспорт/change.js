const change = document.getElementById("change")
function change_all() {
    if (document.getElementsByTagName("div")[3].innerText === "Scomarovschii") {
        document.getElementsByTagName("div")[3].innerText = "Скомаровский";
        document.getElementsByTagName("div")[4].innerText = "Максим";
        document.getElementsByTagName("div")[5].innerText = "Вадимович";
        document.getElementsByTagName("div")[6].innerText = "муж.";
    }

    else
        if (document.getElementsByTagName("div")[3].innerText === "Скомаровский") {
            document.getElementsByTagName("div")[3].innerText = "Scomarovschii";
            document.getElementsByTagName("div")[4].innerText = "Maxim";
            document.getElementsByTagName("div")[5].innerText = "Vadimovich";
            document.getElementsByTagName("div")[6].innerText = "M";
        }



}
change.addEventListener("click", change_all)