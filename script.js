let lien = document.querySelectorAll('.lien');
let all = document.querySelector('.all');
let frame = document.getElementById('frame');
let link = document.querySelector('.link');

lien.forEach(element => {

  element.addEventListener('click', function (event){
  event.preventDefault();

    all.style.display = 'none';
    frame.style.display = 'block';

    if(element == lien[0]){
      frame.innerHTML = `
      <iframe src="./projet1/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[1]){
      frame.innerHTML = `
      <iframe src="./projet2/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[2]){
      frame.innerHTML = `
      <iframe src="./projet3/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[3]){
      frame.innerHTML = `
      <iframe src="./projet4/index.html" frameborder="0" name="content" style="width:98% ; height:60vh;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[4]){
      frame.innerHTML = `
      <iframe src="./projet5/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[5]){
      frame.innerHTML = `
      <iframe src="./projet6/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[6]){
      frame.innerHTML = `
      <iframe src="./projet7/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[7]){
      frame.innerHTML = `
      <iframe src="./projet8/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[8]){
      frame.innerHTML = `
      <iframe src="./projet9/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[9]){
      frame.innerHTML = `
      <iframe src="./projet10/index.html" frameborder="0" name="content" style="width:98% ; height:60vh ;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
    if(element == lien[10]){
      frame.innerHTML = `
      <iframe src="./projet11/index.html" frameborder="0" name="content" style="width:98% ; height:60vh;border-radius:20px ; margin-top:25px ; margin-left:15px"></iframe>`;
    }
  })
  });

 link.addEventListener('click',function (){
   frame.style.display = 'none';
   all.style.display = 'flex';
 })




