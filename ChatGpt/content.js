$(function(){
 $('.absolute .p-1').css('visibility','hidden');

 
$('form >div>div').eq(1).append(`<button id='mybutton' type='button'  style="position: absolute;
    right: 20px;" >  <svg style="margin-top: 5; color:lightgrey" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>  </button>`)

    
  
    
$('form >div .flex ').eq(1).css(
  "margin-left","135px",
  
).css("height","130px");

    $('form >div >div  ').eq(1).prepend(`<div class='myLabel'>  <label class="movieSelection"  > <b> Select a Movie </b> </label> </div> 
      `)
    
      
$('.myLabel').append(` <div class="dropdown ">
  <button style="background-color:grey;width:150px" class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"  data-bs-target=".dropdown-menu" >
    Movies 
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li id='item1' class="dropdown-item" >Titanic </li>
     <li id='item2' class="dropdown-item" >Green Mile </li>
    
  </ul>
</div>
<div class='container mt-2'>
<hr>
</div>

`)

 $('.dropdown-toggle').on('click',function(){
  $('.dropdown-menu').toggle();
 })

$('#item1').on('click',function(){
 
 
 
 $('.dropdown-menu').toggle();
 
   $('textarea').focus();
  

   $('textarea').val('Titanic');
   $('.absolute .p-1').prop('disabled',false);
})


$('#item2').on('click',function(){
  
  $('.dropdown-menu').toggle();
  $('textarea').val('Green Mile');
  $('textarea').focus();
  $('.absolute .p-1').prop('disabled',false);
})

$('#mybutton').on('click',submit);



$('textarea').keydown(function(e){
  
  if(e.keyCode===13){
    
    submit();
  }
})

})




function submit(e){
 
 
    let data=$('textarea').val();
    if(!data){
        return alert('Please Enter some data in the textfield')
    }
    else{
      if(data){

let text='Generate script for Youtube video about ';
        
  

   let newdata=text+data;
   $('textarea').val(newdata);
   
 $('.absolute .p-1').trigger('click');
 

   setTimeout(()=>{
document.querySelectorAll('.relative .flex .flex-col .gap-1 > .flex-grow >div')[0].textContent=data;
  $('textarea').val(data);
  
 },150)
      }
      
}
}