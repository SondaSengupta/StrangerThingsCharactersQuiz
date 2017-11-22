(function() {
    "use strict";

    window.onload = function () {
        $("#SubmitButton").click (function() {
            let submission = $("input[name=character]:checked").val();
            ShowCharacterPic(submission);
            ShowCharacterName(submission);
            return false;
        });
    };

    function ShowCharacterPic(submission) {
        ClearPic();
        let imgSrc = 'Pics/' + submission + '.jpg';
        let picId = submission + 'Pic';
        $('#CharacterPicture').prepend($('<img>', {id: picId, src: imgSrc}));
    }

    function ShowCharacterName(submission){
        ClearName();
        let name = submission;
        let characterName = submission + 'ID';
        $('#CharacterName').prepend($('<h1>', {id: characterName, text: name}));
    }

    function ClearPic() {
        $("#CharacterPicture img:last-child").remove();
    }

    function ClearName() {
        $("#CharacterName h1:last-child").remove();
    }

  }());