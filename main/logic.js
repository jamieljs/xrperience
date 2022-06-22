const ButtonComponent = {
  multiple: true,
  init() {
    const scene = this.el.scenceEl
    const leftbtn = document.querySelector('#left-arrow')
    const rightbtn = document.querySelector('#right-arrow')
    const plusbtn = document.querySelector('#plus-btn')
    const minusbtn = document.querySelector('#minus-btn')
    const {manager} = document.querySelector('a-scene').systems
    const model = document.querySelector('#model')
    const store1btn = document.querySelector('#store1-btn')
    const store2btn = document.querySelector('#store2-btn')
    const name = document.querySelector('#dish-name-1')
    const nutri = document.querySelector('#nutrition-1-btn')
    const info = document.querySelector('#ingredients-1-btn')
    const quantity = document.querySelector('#dish-quantity-1')
    const resetbtn = document.querySelector('#reset-btn')
    const resettext = document.querySelector('#reset-text')
    const finishbtn = document.querySelector('#finish-btn')
    const sendorderbtn = document.querySelector('#send-order-btn')
    // const price = document.querySelector('#dish-price-1')
    const updateManager = (updmodel = true) => {
      if (updmodel) {
        model.removeAttribute('gltf-model')
        model.setAttribute('gltf-model', `#dish-${manager.idx + 1}-glb`)
      }
      quantity.setAttribute('text', `value: Quantity: ${manager.cnt[manager.idx]} ($${(manager.price[manager.idx] * manager.cnt[manager.idx]).toFixed(2)}); anchor: center; wrapCount: 10; color: black`)
      nutri.setAttribute('text', `value: Nutrition Facts:\n\n${manager.nutri[manager.idx]}; anchor: center; wrapCount: 20; color: black`)
      name.setAttribute('text', `value: ${manager.name[manager.idx]} ($${manager.price[manager.idx].toFixed(2)}); anchor: center; wrapCount: 20; color: black`)
      info.setAttribute('text', `value: Ingredients:\n\n${manager.info[manager.idx]}; anchor: center; wrapCount: 20; color: black`)
      // price.setAttribute('text', `value: $${manager.price[manager.idx].toFixed(2)}; anchor: center; wrapCount: 10; color: black`)
    }
    updateManager()
    const leftBtnclick = (e) => {
      if (leftbtn.getAttribute('visible') === false) {
        return
      }
      manager.incre(-1)
      updateManager()
      console.log('leftbtn')
      console.log(manager.idx)
    }
    const rightBtnclick = (e) => {
      if (rightbtn.getAttribute('visible') === false) {
        return
      }
      manager.incre(1)
      updateManager()
      console.log('rightbtn')
      console.log(manager.idx)
    }
    const plusBtnclick = (e) => {
      if (plusbtn.getAttribute('visible') === false) {
        return
      }
      manager.add()
      updateManager(false)
    }
    const minusBtnclick = (e) => {
      if (minusbtn.getAttribute('visible') === false) {
        return
      }
      manager.remove()
      updateManager(false)
    }
    const changeVisibility = () => {
      store1btn.setAttribute('visible', false)
      store2btn.setAttribute('visible', false)
      store1btn.classList.remove('cantap')
      store2btn.classList.remove('cantap')
      leftbtn.setAttribute('visible', true)
      rightbtn.setAttribute('visible', true)
      plusbtn.setAttribute('visible', true)
      minusbtn.setAttribute('visible', true)
      model.setAttribute('visible', true)
      nutri.setAttribute('visible', true)
      info.setAttribute('visible', true)
      name.setAttribute('visible', true)
      quantity.setAttribute('visible', true)
      finishbtn.style.display = 'block'
      sendorderbtn.style.display = 'none'
      sendorderbtn.setAttribute('visible', false)
      resetbtn.style.display = 'block'
      resettext.style.display = 'block'

      leftbtn.classList.add('cantap')
      rightbtn.classList.add('cantap')
      plusbtn.classList.add('cantap')
      minusbtn.classList.add('cantap')
      model.classList.add('cantap')
    }
    const changeVisibility2 = () => {
      leftbtn.setAttribute('visible', false)
      rightbtn.setAttribute('visible', false)
      plusbtn.setAttribute('visible', false)
      minusbtn.setAttribute('visible', false)
      model.setAttribute('visible', false)
      nutri.setAttribute('visible', false)
      info.setAttribute('visible', false)
      name.setAttribute('visible', false)
      quantity.setAttribute('visible', false)
      finishbtn.style.display = 'none'
      finishbtn.setAttribute('visible', false)
      sendorderbtn.style.display = 'block'

      leftbtn.classList.remove('cantap')
      rightbtn.classList.remove('cantap')
      plusbtn.classList.remove('cantap')
      minusbtn.classList.remove('cantap')
      model.classList.remove('cantap')
    }
    const st1Btnclick = (e) => {
      console.log('Button 1 Clicked')
      if (store1btn.getAttribute('visible') === false) {
        return
      }
      changeVisibility()
    }
    const st2Btnclick = (e) => {
      console.log('Button 2 Clicked')
      if (store2btn.getAttribute('visible') === false) {
        return
      }
      changeVisibility()
    }
    const checkout = (e) => {
      let arr = manager.getItems()
      if (arr.length > 8) {
        alert("Please order at most 8 items!")
        return
      }
      manager.displayimages = true
      for (let i = 0; i < 8; i++) {
        const modeli = document.querySelector(`#model${i+1}`)
        if (i < arr.length){
          modeli.removeAttribute('gltf-model')
          modeli.setAttribute('gltf-model', `#dish-${arr[i] + 1}-glb`)
          modeli.setAttribute('visible', true)
        } 
        else {
          modeli.setAttribute('visible', false)
        }
      }
      changeVisibility2()
    }
    const sendorderclick = (e) => {
      if(confirm(`Are you sure you want to send this order? The total cost is $${manager.getCost()}. You will be notified when your food is ready for collection.`)) {
        alert('Order has been sent!')
      }
      return
    }
    store1btn.addEventListener('click', st1Btnclick)
    store2btn.addEventListener('click', st2Btnclick)
    leftbtn.addEventListener('click', leftBtnclick)
    rightbtn.addEventListener('click', rightBtnclick)
    plusbtn.addEventListener('click', plusBtnclick)
    minusbtn.addEventListener('click', minusBtnclick)
    finishbtn.addEventListener('click', checkout)
    sendorderbtn.addEventListener('click', sendorderclick)
    console.log('HI')
  },
}
export {ButtonComponent}