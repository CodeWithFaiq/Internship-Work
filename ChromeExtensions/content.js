$(function(){
    chrome.runtime.onMessage.addListener(function(req,sender,response){
        
        if(req){
           alert('Message Successfully Received from popup.')
        }
    })



})