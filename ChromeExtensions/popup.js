

$(function(){
    
$('#submit').on('click',submit)

})

function submit(){
    let data=$('#inputText').val();
    if(!data){
        alert('You must have entered some piece of data');
    }
    else{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: data}, function(response) {
    console.log(response.farewell);
  });

});
    }
}