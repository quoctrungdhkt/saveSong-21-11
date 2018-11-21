
document.getElementById('load-more').onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('Everything is ok')
            var arraySongs = JSON.parse(xhr.responseText);
            var htmlContent = '';
            for (var i = 0; i < arraySongs.length; i++) {
                var song = arraySongs [i];
                htmlContent += '<div class="song-item">';
                htmlContent += '<div class ="song-index">' + (i + 1) + '</div>';
                htmlContent += '<div class ="song-thumbnail">';
                htmlContent += '<img src="' + song.thumbnail + '" alt="">';
                htmlContent += '</div>';
                htmlContent += '<div class ="song-infor">';
                htmlContent += '<div class ="song-name">' + song.name + '</div>';
                htmlContent += '<div class ="song-singer">' + song.singer + '</div>';
                htmlContent += '</div>';
                // style 1
                htmlContent += '<div class ="song-control" onclick="playSong(\'' + song.link + '\')">Play</div>';
                // style 2
                htmlContent += '<div class ="song-control" onclick="playSong('
                ${song.link')">Play</div>';
                            htmlContent += '<div class ="song-control"><a href="#">Detail</a></div>';
                            htmlContent += '</div>';

                document.getElementById('list-song').innerHTML += htmlContent;
            }
        };
        xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs', true);
        xhr.send();
    }
}
// Lưu bài hát
function saveSong () {
        var name = document.forms['song-form']['name'].value;
        var thumbnail = document.forms['song-form']['thumbnail'].value;
        var singer = document.forms['song-form']['singer'].value;
        var author = document.forms['song-form']['author'].value;
        var link = document.forms['song-form']['link'].value;

        var song = {
            thumbnail: thumbnail,
            name: name,
            singer: singer,
            author: author,
            link: link
        };
      var senData = JSON.stringify(song);
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200){
              alert('Save Success');
          }
      };
      xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(senData);
}

}
// Đăng ký
var btnSubmit = document.forms['register-form']['btn-submit'];
btnSubmit.onclick = function () {
    var _firstName = document.forms['register-form']['firstName'].value;
    var _lastName = document.forms['register-form']['lastName'].value;

    var registerInformation = {
        _firstName: _firstName,
        _lastName: _lastName
    };
    var sendData = JSON.stringify(registerInformation);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 201){
            alert('Register Success!');
            document.forms['register-form'].reset();
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/members',true);
    xhr.send(sendData)
}
