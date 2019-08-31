let form = document.querySelector('.form-action');

fname,lname,email,phnum,address,linkIn,compName,compStart,compLoc,workDec,skills,Achievements,projects




form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let fullName = form.fname.value;
  let lastName = form.lastName.value ;
  let email = form.email.value ;
  let phoneNum = form.phoneNum.value ;
  let address = form.address.value ;
  let linkIn = form.linkIn.value ;
  let compName = form.compName.value ;
  let compStart = form.compStart.value ;
  let compLoc = form.compLoc.value ;
  let workDec = form.workDec.value ;
  let skills = form.skills.value ;
  let Achievements = form.Achievements.value ;
  let projects = form.projects.value ;

  let doc = new jsPDF();

  doc.setFontSize(40)
  doc.text(20, 20, 'Personal Details');

  doc.text('Hello world!', 10, 10)
  doc.save('a4.pdf')  

  doc.save(`${fullName}.pdf`);

});