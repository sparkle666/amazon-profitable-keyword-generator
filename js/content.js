// fetch(chrome.runtime.getURL('container.html')).then(r => r.text()).then(page => {
    
//     let banner = document.querySelector("#nav-progressive-subnav")
//     banner.insertAdjacentHTML('beforeend', page);
//     // console.log(page)
//     // not using innerHTML as it would break js event listeners of the page
//   });

  const injectContainer = async() => {
    const page = await fetch(chrome.runtime.getURL('container.html'))
    console.log(page.text(), typeof(page))
    // const res = page.response()
    let banner = document.querySelector("#nav-progressive-subnav")
    // banner.src = res.text()
    console.log(banner)
    banner.insertAdjacentHTML('beforeend', page);
    console.log("Type of: ", typeof(page))
  }
  injectContainer()
  
// Search a keyword on amazon search bar.

// const searchKeyword = () => {
//   document.getElementById("#twotabsearchtextbox").value = "Some random keyword"
//   document.getElementById("#nav-search-submit-button").click()
// }
// searchKeyword()