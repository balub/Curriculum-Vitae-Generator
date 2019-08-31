let form = document.querySelector('.form-action');





form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let fullName = form.fname.value;
  let lastName = form.lname.value ;
  let email = form.email.value ;
  let phoneNum = form.phnum.value ;
  let address = form.address.value ;
  let linkIn = form.linkIn.value ;
  // let compName = form.compName.value ;
  // let compStart = form.compStart.value ;
  // let compLoc = form.compLoc.value ;
  // let workDec = form.workDec.value ;
  // let skills = form.skills.value ;
  // let Achievements = form.Achievements.value ;
  // let projects = form.projects.value ;

  let doc = new jsPDF();

  doc.setFontSize(40);
  doc.text(50, 20, 'Personal Details');
  
  doc.setFontSize(20);
  doc.text(20,30, "Full Name :");
  doc.setFontSize(20);
  doc.text(60,30, fullName);

  doc.save(`${fullName}.pdf`);

});