
document.addEventListener("DOMContentLoaded", function(){
  const loginTab = new LoginTab({
    tabs: document.querySelectorAll('.page-tab li'),
    pages: document.querySelectorAll('.panel-page'),
  })
  
});


class DOMObject{
  constructor(){
    
  }
}
class LoginTab extends DOMObject{
  constructor(options){
    super()
    console.log(options)
    this._tabs = options.tabs
    this._pages = options.pages
    // set up event 
    this._tabs.forEach((v, i) =>{
      v.addEventListener('click', (e) => {
        this._tabs.forEach( tab => tab.classList.remove('active'))
        this._pages.forEach( page => page.classList.remove('active'))
        this._tabs[i].classList.add('active')
        this._pages[i].classList.add('active')
      })
    })
    this.__refresh()
  }

  __refresh(){
    this._tabs.forEach(tab => tab.classList.remove('active'))
    this._pages.forEach(page => page.classList.remove('active'))
    this._tabs[0].classList.add('active')
    this._pages[0].classList.add('active')
  }
}