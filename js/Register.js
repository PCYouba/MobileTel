function ChangeImg() {
    var q = new Date();
    document.getElementById("CheckImg").src = "/Users/CheckCode?" + q.getMilliseconds();

}