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

  const hidden = document.querySelectorAll('.hidden-sec')
  hidden.forEach((e) => obs.observe(e))
  