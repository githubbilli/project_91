function addUser() {
    player1_name = document.getElementById("player_1_username");
    player2_name = document.getElementById("player_2_username");
    localStorage.setItem("player1_username",player1_name);
    localStorage.setItem("player2_username",player2_name);
    window.location = "quizgame.html";
    console.log("shift");
}