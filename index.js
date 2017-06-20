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

  doc.setFontSize(20);
  doc.text(20,40, "Last Name :");
  doc.setFontSize(20);
  doc.text(60,40, lastName);

  doc.setFontSize(20);
  doc.text(20,50, "Email :");
  doc.setFontSize(20);
  doc.text(60,50, email);

  doc.setFontSize(20);
  doc.text(20,70, "phone Number :");
  doc.setFontSize(20);
  doc.text(60,70, phoneNum);

  doc.setFontSize(20);
  doc.text(20,80, "Address :");
  doc.setFontSize(20);
  doc.text(60,80, address);

  doc.setFontSize(20);
  doc.text(20,90, "LinkedIn Link :");
  doc.setFontSize(20);
  doc.text(60,90, linkIn);



  doc.save(`${fullName}.pdf`);

});