var css_inline=`
body {font-family: Arial;}

/* Style the tab */
.tab {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #f1f1f100;
}

.tablinks{
    width: 20%;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
`

function Register(){

}

$(function(){





  

  $('body > div').eq(0).append(`<div style="background:black" >
  
  </div>`)

setTimeout(()=>{
$('#ownbutton').on('click',function(){
  $('#promptbtn').show();
})
},1600)

setTimeout(()=>{
$('#crossbtn').on('click','body',function(){
  alert('clicked')
})
},1500)

    
setTimeout(()=>{
 $('#promptbtn').hide();
},1600)


   
$('.absolute .p-1').css('visibility','hidden');

$('form>div>div').eq(1).css('margin-left','150px');

 
$('form >div>div').eq(1).append(`<button id='mybutton' type='button'  style="position: absolute;
    right: 20px;" >  <svg style="margin-top: 5; color:lightgrey" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>  </button>`)

    $('#mybutton').on('click',submit1);


    var lang_wrapper=`<div id="language-select-wrapper" style="padding-bottom: 15px;width: 87%;" class="AIPRM__flex AIPRM__gap-3 lg:AIPRM__max-w-3xl md:last:AIPRM__mb-6 AIPRM__mx-2 AIPRM__pt-2 AIPRM__stretch AIPRM__justify-between AIPRM__text-sm AIPRM__items-end AIPRM__pb-2 AIPRM__mb-2 AIPRM__border-b AIPRM__flex-col sm:AIPRM__flex-row">
    <div class="AIPRM__flex AIPRM__w-full">
      <div style="float: left;">
        <label for="languageSelect" class="AIPRM__block AIPRM__text-sm AIPRM__font-medium AIPRM__whitespace-nowrap">Output in</label>
        
        <select id="languageSelect" style="font-size: 10px;height: 25px;padding-top: 0px;padding-bottom: 0px;" class="AIPRM__bg-gray-100 AIPRM__border-0 AIPRM__text-sm AIPRM__rounded AIPRM__block AIPRM__w-full dark:AIPRM__bg-gray-600 dark:AIPRM__border-gray-600 dark:hover:AIPRM__bg-gray-900 dark:AIPRM__placeholder-gray-400 dark:AIPRM__text-white hover:AIPRM__bg-gray-200 focus:AIPRM__ring-0">
          <option value="">Default language</option>  

          
            <option value="German">
              Deutsch
              </option> 
          
            <option value="English*" selected="">
              English
              </option> 
          
        </select>
      </div>
      
      <div class="AIPRM__ml-2" style="float: left;padding-left: 20px;padding-right: 20px;">
        <label for="toneSelect" class="AIPRM__block AIPRM__text-sm AIPRM__font-medium">Tone</label>
      
        <select id="toneSelect" style="font-size: 10px;height: 25px;padding-top: 0px;padding-bottom: 0px;" class="AIPRM__bg-gray-100 AIPRM__border-0 AIPRM__text-sm AIPRM__rounded AIPRM__block AIPRM__w-full dark:AIPRM__bg-gray-600 dark:AIPRM__border-gray-600 dark:hover:AIPRM__bg-gray-900 dark:AIPRM__placeholder-gray-400 dark:AIPRM__text-white hover:AIPRM__bg-gray-200 focus:AIPRM__ring-0">
          <option value="" selected="">Default</option>

          
            <option value="2006">
              Emotional
              </option> 
          

          <option value="" disabled="">_________</option><option value="UPGRADE">Upgrade for more</option>
        </select>
      </div>

      <div class="AIPRM__ml-2">
        <label for="writingStyleSelect" class="AIPRM__block AIPRM__text-sm AIPRM__font-medium AIPRM__whitespace-nowrap">Writing Style</label>
      
        <select id="writingStyleSelect" style="font-size: 10px;height: 25px;padding-top: 0px;padding-bottom: 0px;" class="AIPRM__bg-gray-100 AIPRM__border-0 AIPRM__text-sm AIPRM__rounded AIPRM__block AIPRM__w-full dark:AIPRM__bg-gray-600 dark:AIPRM__border-gray-600 dark:hover:AIPRM__bg-gray-900 dark:AIPRM__placeholder-gray-400 dark:AIPRM__text-white hover:AIPRM__bg-gray-200 focus:AIPRM__ring-0">
          <option value="" selected="">Default</option>

          
            <option value="3017">
              Poetic
              </option> 
          

          <option value="" disabled="">_________</option><option value="UPGRADE">Upgrade for more</option>
        </select>
      </div>
    </div>

   
  </div>`;
  $('form > div > div').eq(1).prepend(lang_wrapper) 

    var main_div=`<div>
                    <h1 style="padding-left: 34%;">NOAH DEMO</h1>
                    <div class="tab" style="margin-left: -32%;width: 150%;">

                        <button  class="tablinks">Favorite</button>
                        <button class="tablinks">NOAH DEMO</button>
                        <button class="tablinks">PUBLIC</button>
                        <button id='ownbutton' class="tablinks">OWN</button>
                        <button class="tablinks">HIDDEN</button>
                    
                    </div>
                    <div>
                    <div id="addnewprompt" style="padding-top: 25px;">
                    <button id='promptbtn' style="background: rgb(217 217 227);height: 40px;width: 250px;border-radius: 11px;/* padding-top: 20px; */">
                    <div id='prompt'>
                    <svg id='mysvg' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="float: left;margin-left: 35px;"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add new prompt template
                    </div>
                    </button>
                    </div>
                    </div>
                  
                    


                </div>

                
               
                `

                
$(document).on('click','#savebutton',function(){
  let template= $('#template').val();
  let teaser=$('#teaser').val();
  let hint=$('#hint').val();
  let title=$('#title').val();
  let author=$('#author').val();
  let url=$('#url').val();
 let topic = $('#Topic').find(":selected").val();
 let activity=$('#Activity').find(":selected").val();
  $.ajax({
    url:'http://localhost:3000/api/preferences',
    method:'POST',
    data:{template,teaser,hint,title,author,url,topic,activity},
    success:function(){
      alert('Your Prompt was successfully Added')
      setTimeout(()=>{
      $('#openPopUp').remove();
       $('#openPopUp').remove();
  $('.flex-1 .overflow-hidden').removeClass('blur-effect')
   $('nav').removeClass('blur-effect');
   $('textarea').show();
      },1000)
    }
  })
})
                

$(document).on('click','#crossbtn',function(){
  $('#openPopUp').remove();
  $('.flex-1 .overflow-hidden').removeClass('blur-effect')
   $('nav').removeClass('blur-effect');
   $('textarea').show();
})
setTimeout(()=>{
$('#promptbtn').on('click',function(){
  $('.flex-1 .overflow-hidden').addClass('blur-effect');
  $('nav').addClass('blur-effect');
  $('textarea').hide();
$('body').append(`<div id='openPopUp' style="position: absolute;
    top: 20px;
    right: 400px;
    height: 670px;
    border: 1px solid black;
    background-color: white;
    width: 500px;
    border-radius: 5px;" >
    <div style="display:flex;justify-content:space-between">

<div class='mx-2 my-2' > 
<b style="font-size:11px;">  Prompt Template </b>
</div>

<div id='crossbtn' class='my-2'  >
<span style="margin-right: 10px;
 font-size: 19px;"  >
&#10006;
</span>
</div>

</div>


   <textarea id='template' style="margin-left: 8px;width: 460px;background-color: #ECECF1;border-radius:5px" placeholder='Prompt text including placeholders... ' ></textarea>


  <div class='my-2 ' style="margin-left: 12px;
" > </div>
   <b style="font-size:11px; margin-left:12px">  Teaser </b>
<div> 
   <textarea id='teaser' style="margin-left: 8px;  width: 460px;background-color:#ECECF1;border-radius:5px" placeholder='Create a keyword strategy and SEO content plan from 1 [keyword]' ></textarea>
  </div>

     <div class='my-2 ' style="margin-left: 12px;
" > </div>
   <b style="font-size:11px; margin-left:12px">  Prompt Hint </b>
<div> 

<div> 
   <input id='hint' type='text' style ="margin-left: 8px;
    width: 460px;background-color: #ECECF1;border-radius:5px" placeholder='[KEYWORD] or [your list of keywords, maximum ca. 8000]' />   
    </div>

           <div class='my-2 ' style="margin-left: 12px;
" > </div>
   <b style="font-size:11px; margin-left:12px">  Title </b>
<div> 

<div> 
   <input id='title' type='text' style ="margin-left: 8px;
    width: 460px;background-color: #ECECF1;border-radius:5px" placeholder='Keyword Strategy' />   
    </div>

    <div  style=" margin-left: 45px;
    margin-top: 10px;
    display: flex;
    gap: 250px;" >
       <b style="font-size:12px; " >  Topic </b>
       <b style="font-size:12px;" > Activity </b>
       
    </div>

    <div  style=" margin-left: 12px;
    margin-top: 5px;
    display: flex;
    gap: 150px;" >
     
<select style="border-radius: 5px" name="Topic" id="Topic">
  <option value="Copywriting">Copywriting</option>
  <option value="DevOps">DevOps</option>
  <option value="Generative AI">Generative AI</option>
  <option value="Marketing">Marketing</option>
   <option value="Operating System">Operating System</option>
    <option value="Productivity">Productivity</option>
     <option value="Saas">Saas</option>
      <option value="SEO">SEO</option>
       <option value="Software Applications">Software Applications</option>
        <option value="Software Engineering">Software Engineering</option>
         <option value="UNSURE">UNSURE</option>
</select>





<div>
<select style="border-radius: 5px;
    position: absolute;
    right: 40px;
} " name="Acitivity" id="Activity">
  <option value="Accounting">Accounting</option>
  <option value="Call to Action">Call to Action</option>
  <option value="Games">Games</option>
  <option value="Improve">Improve</option>
   <option value="Keywords">Keywords</option>
    <option value="Marketing">Marketing</option>
     <option value="Outreach">Outreach</option>
      <option value="Persuade">Persuade</option>
       <option value="Positioning">Positioning</option>
        <option value="Description">Product Description</option>
         <option value="Products">Products</option>
         <option value="Research">Research</option>
         <option value="Script Writing">Script Writing</option>
         <option value="Sports Writing">Sports Writing</option>
         <option value="Subject Lines">Subject Lines</option>
         <option value="Summarize">Summarize</option>
         <option value="Writing">Writing</option>
         
</select>
</div>
</div>
    </div>
    <div class='my-3  d-flex align-items-center'   style="margin-left:15px" >
    <input type="checkbox" checked > 
    <p> &nbsp Share prompt template publicly
    </div>

    <div  style="    margin-left: 45px;
    margin-top: 10px;
    display: flex;
    gap: 180px; " >
       <b style="font-size:12px; " >  Author Name </b>
       <b style="font-size:12px;" > Author URL </b>
       
    </div>

       
    <div class='d-flex ' style="gap: 27px;
    margin-left: 14px;" >
     <div >
   <input id='author' style="border-radius:5px" type='text' placeholder='Author Name' />
     </div>
     <div>
     <input id='url' style="border-radius:5px" type='text' placeholder='https://www.example.com' />
     </div>
    </div>

    <div class='d-flex mx-2'>
    
    <p class='mx-2' style="font-size:11px"> Please be mindful of what you share, and do not include any confidential information, as we are not responsible for any actions taken by others with the information you choose to share.  </p>
    </div>

    <div class='my-3 ' style="display:flex;justify-content:flex-end">
   <button id='savebutton' style='background-color:#17a2b8'  type='button' class='btn btn-info'>
   Save Prompt
   </button>
    </div>

    </div>`)
      
    });

},1600)







  



  setTimeout(function(){
    var styleEl = document.createElement('style');
    styleEl.innerHTML = css_inline;
    document.head.appendChild(styleEl);
    
    $('h1').parent().append(main_div);document.querySelectorAll('.text-gray-800 > div')[0].style.display='none'
    document.querySelectorAll('.text-gray-800 > h1')[0].style.display='none'},1500)

    

//   document.querySelectorAll('form > div > div')[1].innerHTML=lang_wrapper + document.querySelectorAll('form > div > div')[1].innerHTML

//   $('#mybutton').on('click',submit1);

})

let data='';
const submit1=()=>{
    data=$('textarea').val();
    if(!data){
        return alert('Please Enter some data in the textfield')
    }
    else{
        let data=$('textarea').val();
      
let text=`I want you to create a clear and concise mobile app design specification in [ENGLISH] for `+data+`. It should include the following sections:

-App Description (one paragraph)
-App Names (three ideas with description of logo and the creative reason why this is a good name)
-List of User Personas (with bullet points describing each persona with an outline of each main screens)
-User Persona #1 User Screens (Start with their main screen, the user flow within the screen, the logic and buttons on screen. Make sure to consider conditional logic and describe in detail with bullet points. Label ea persona based on previously established list of User Personas.)
-User Persona #2 User Screens (Start with their main screen, the user flow within the screen, the logic and buttons on screen. Make sure to consider conditional logic and describe in detail with bullet points. Label ea persona based on previously established list of User Personas.)
-User Persona #3 User Screens (Start with their main screen, the user flow within the screen, the logic and buttons on screen. Make sure to consider conditional logic and describe in detail with bullet points. Label ea persona based on previously established list of User Personas.) *if necessary
-User Persona #4 User Screens (This is usually the main admin user for the app. They need a dashboard to manage day to day operations, users, any revenue generated from the platform, etc) Start with their main screen, the user flow within the screen, the logic and buttons on screen. Make sure to consider conditional logic and describe in detail with bullet points. 
-Design Module #1 (This module is based on a specific User Persona Label, bullet list their main screens, logic and associated flows)
-Design Module #2 (User Persona Label, their main screens and associated flows)
-Design Module #3 (User Persona Label, their main screens and associated flows) *if necessary
-Design Module #4 (User Persona Label, their main screens and associated flows) *if necessary
-Inspirational Apps (similar competitors to emulate, include URLs)
-Color Palette (up to 3) (primary, secondary, tertiary)`;
        
   
// let newdata=text+data
   let newdata=text;
   $('textarea').val(newdata);
   $('.absolute .p-1').click();
 
setTimeout(()=>{
  document.querySelectorAll('.relative .flex .flex-col .gap-1 >div > div')[0].textContent=data;
  $('textarea').val(data);
 },150)


}
}


 