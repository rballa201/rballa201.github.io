$(document).ready(function () {
    $('#GoBack').click(function () {
        //localStorage.removeItem( 'CountryData' );
        //location.replace("earthquake.html");
        window.close();
    });
    var myData = JSON.parse(localStorage.getItem('CountryData'));
    //window.localStorage.clear();
    console.log(myData);
    var country = $("<p />", {
        text: "Country Name: " + myData.name
    });
    var capital = $("<p />", {
        text: "Capital: " + myData.capital
    });
    var demonym = $("<p />", {
        text: "Demonym: " + myData.demonym
    });
    var continent = $("<p />", {
        text: "Region: " + myData.region
    });
    var subregion = $("<p />", {
        text: "Subregion: " + myData.subregion
    });
    // var timezones = $("<p />", {
    // 	text: ": " + myData.
    // });
    // var borders = $("<p />", {
    // 	text: ": " + myData.
    // });
    // var regionBloc = $("<p />", {
    // 	text: "Capital: " + myData.
    // });

    $("#Info").append(country, capital, continent, subregion, demonym);
    var currenciesLength = myData.currencies.length;
    console.log(currenciesLength);
    for (var i = 0; i < currenciesLength; i++) {
        if (myData.currencies[i].symbol == null) {
            var currencies = $("<p />", {
                text: "Main Currency: " + myData.currencies[i].name
            });
            currencies.append("<br>Symbol: (No Symbol Avialable)");
            $("#Info").append(currencies);
        } else {
            var currencies = $("<p />", {
                text: "Main Currency: " + myData.currencies[i].name
            });
            currencies.append("<br>Symbol: " + myData.currencies[i].symbol);
            $("#Info").append(currencies);
        }
    }


    var languagesLength = myData.languages.length;
    console.log(languagesLength);
    for (var i = 0; i < languagesLength; i++) {
        var languages = $("<p />", {
            text: "Language: " + myData.languages[i].name
        });
        $("#Info").append(languages);
    }

    var timesLength = myData.timezones.length;
    console.log(timesLength);
    var time = $("<p />", {
        text: "Timezones:"
    });
    for (var i = 0; i < timesLength; i++) {
        var timezones = $("<li />", {});
        timezones.append(myData.timezones[i]);
        time.append(timezones);
    }
    $("#Info").append(time);


    var regionBlocLength = myData.regionalBlocs.length;
    console.log(regionBlocLength);
    for (var i = 0; i < regionBlocLength; i++) {
        var regionalBlocs = $("<p />", {
            text: "Region Bloc(Unions etc): " + myData.regionalBlocs[i].name
        });
        $("#Info").append(regionalBlocs);
    }

    document.getElementById('Flag').src = myData.flag;
    document.getElementById('Flag').alt = myData.name + " Flag";

});