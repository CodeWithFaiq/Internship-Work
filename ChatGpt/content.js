$(function(){
 $('.absolute .p-1').css('visibility','hidden');

 
$('form >div>div').eq(1).append(`<button id='mybutton' type='button'  style="position: absolute;
    right: 20px;" >  <svg style="margin-top: 5; color:lightgrey" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>  </button>`)

    $('#mybutton').on('click',submit);

    






})

const submit=()=>{
    let data=$('textarea').val();
    if(!data){
        return alert('Please Enter some data in the textfield')
    }
    else{
      
let text='Generate script for Youtube video about ';
        
   let data=$('textarea').val();

   let newdata=text+data;
   $('textarea').val(newdata);
   $('.absolute .p-1').click();
 



}
}