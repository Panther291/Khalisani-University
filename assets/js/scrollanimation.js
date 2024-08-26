const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.add('show-sec')
      }
      
      else{
        entry.target.classList.remove('show-sec')
      }
    })
  })
  
//   const obs2 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       console.log(entry);
//       if(entry.isIntersecting){
//         entry.target.classList.add('show-el')
//       }
      
//       else{
//         entry.target.classList.remove('show-el')
//       }
//     })
//   })
  
  const hidden = document.querySelectorAll('.hidden-sec')
//   const hidden2 = document.querySelectorAll('.hidden-el')
  hidden.forEach((e) => obs.observe(e))
//   hidden2.forEach((e) => obs.observe(e))
  