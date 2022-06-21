const ButtonComponent = {
  multiple: true,
  init() {
    const scene = this.el.scenceEl
    const leftbtn = document.querySelector('#left-arrow')
    const rightbtn = document.querySelector('#right-arrow')
    const plusbtn = document.querySelector('#plus-btn')
    const minusbtn = document.querySelector('#minus-btn')
    const manager = document.querySelector('a-scene').systems['manager']
    const model = document.querySelector('#model')
    const store1btn = document.querySelector('#store1-btn')
    const store2btn = document.querySelector('#store2-btn')
    leftbtn.setAttribute('visible',false)
    rightbtn.setAttribute('visible',false)
    plusbtn.setAttribute('visible',false)
    minusbtn.setAttribute('visible',false)
    model.setAttribute('visible',false)
    const changeModel = () => {
      model.removeAttribute('gltf-model')
      model.setAttribute('gltf-model', `#dish-${manager.idx + 1}-glb`)
    }
    const leftBtnclick = (e) => {
      if(leftbtn.getAttribute('visible')==false){
        return;
      }
      manager.incre(-1)
      changeModel()
      console.log('leftbtn')
      console.log(manager.idx)
    }
    const rightBtnclick = (e) => {
      if(rightbtn.getAttribute('visible')==false){
        return;
      }
      manager.incre(1)
      changeModel()
      console.log('rightbtn')
      console.log(manager.idx)
    }
    const plusBtnclick = (e) =>{
      if(plusbtn.getAttribute('visible')==false){
        return;
      }
      manager.add()
    }
    const minusBtnclick = (e) =>{
      if(minusbtn.getAttribute('visible')==false){
        return;
      }
      manager.remove()
    }
    const st1Btnclick = (e) => {
      if(store1btn.getAttribute('visible')==false){
        return;
      }
      store1btn.setAttribute('visible',false)
      leftbtn.setAttribute('visible',true)
      rightbtn.setAttribute('visible',true)
      plusbtn.setAttribute('visible',true)
      minusbtn.setAttribute('visible',true)
    }
    const st2Btnclick = (e) => {
      if(store2btn.getAttribute('visible')==false){
        return;
      }
      store2btn.setAttribute('visible',false)
      leftbtn.setAttribute('visible',true)
      rightbtn.setAttribute('visible',true)
      plusbtn.setAttribute('visible',true)
      minusbtn.setAttribute('visible',true)
    }
    store1btn.addEventListener('click',st1Btnclick)
    store2btn.addEventListener('click',st2Btnclick)
    leftbtn.addEventListener('click', leftBtnclick)
    rightbtn.addEventListener('click', rightBtnclick)
    plusbtn.addEventListener('click',plusBtnclick)
    minusbtn.addEventListener('click',minusBtnclick)
    console.log('HI')
  },
}
export {ButtonComponent}
export {ButtonComponent}