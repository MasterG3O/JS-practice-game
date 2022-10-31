async function getResponse(){
    $.ajax({

        url: 'https://www.googleapis.com/moderator/v1/series?key='+key,
        data: myData,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function() { alert("Success"); },
        error: function() { alert('Failed!'); },
        beforeSend: setHeader
    });
}

getResponse()

