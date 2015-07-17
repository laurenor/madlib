function changeImage(evt) {
        var image = $("img")
        if (image.attr('src').indexOf("300") !== -1) {
            image.attr('src', "https://placekitten.com/g/200/301");
        }
        else {
            image.attr('src', "https://placekitten.com/g/200/300");
        }
        }

    



        $("h1").fadeToggle(2000);
        $("img").on("click", changeImage)
