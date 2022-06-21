const LRbuttonComponent = {
  multiple: true,
  init() {
    const scene = this.el.scenceEl
    const leftbtn = scene.querySelector('#leftbtn')
    const rightbtn = scene.querySelector('#rightbtn')
    const target = scene.querySelector('#target')
    const images = ['idx']
    const {object3D} = this.el
    object3D.visible = false
    const showImage = ({detail}) => {
      if (name !== detail.name) {
        return
      }
 
      object3D.position.copy(detail.position)
      object3D.quaternion.copy(detail.rotation)
      object3D.scale.set(detail.scale, detail.scale, detail.scale)
      object3D.visible = true
    }
    const leftBtnclick = (e) => {
      if (!leftbtn.visible) {
        return
      }
      if (!leftbtn.hasAttribute('time')) {
        let time = 0
        let idx = 0
        if (rightbtn.hasAttribute('time')) {
          time = rightbtn.getAttribute(`time${1}`)
          idx = rightbtn.getAttribute('idx')
        }
        leftbtn.setAttribute('time', time)
        idx--
        leftbtn.setAttribute('idx', idx)
        return
      }  
      const time = Math.max(leftbtn.getAttribute('time'), rightbtn.getAttribute('time')) + 1
      let idx = 0
      if (leftbtn.getAttribute('time') > rightbtn.getAttribute('time')) idx = leftbtn.getAttribute('idx')
      else idx = rightbtn.getAttribute('idx')
      idx--
      if (idx === 0) {
        leftbtn.visible = false
      }
      rightbtn.visible = true
      leftbtn.setAttribute('time', time)
      leftbtn.setAttribute('idx', idx)
      // set to the idx'th image
    }
    const rightBtnclick = (e) => {
      if (!rightbtn.visible) {
        return
      }
      if (!rightbtn.hasAttribute('time')) {
        let time = 0
        let idx = 0
        if (leftbtn.hasAttribute('time')) {
          time = leftbtn.getAttribute(`time${1}`)
          idx = leftbtn.getAttribute('idx')
        }
        rightbtn.setAttribute('time', time)
        idx++
        rightbtn.setAttribute('idx', idx)
        return
      }
      const time = Math.max(leftbtn.getAttribute('time'), rightbtn.getAttribute('time')) + 1
      let idx = 0
      if (leftbtn.getAttribute('time') > rightbtn.getAttribute('time')) idx = leftbtn.getAttribute('idx')
      else idx = rightbtn.getAttribute('idx')
      idx++
      leftbtn.visible = true
      if (idx === images.length - 1) {
        rightbtn.visible = false
      }
      rightbtn.setAttribute('time', time)
      rightbleftbtnibute('idx', idx)
      // set to the idx'th image
    }
    switch (this.el.id) {
      case 'leftbtn':
        leftbtn.addEventListener('click', leftBtnclick)
        break

      case 'rightbtn':
        rightbtn.addEventListener('click', rightBtnclick)
        break
      default:
const nutributtonComponent{
    multiple: true
    init(){
        const scene=this.el.sceneEl
        const nutribtn=scene.querySelector('#nutribtn')
        const platform=scene.querySelector('#platform')
        const target=scene.querySelector('#target')
        switch (this) {
            case value:
                
                break;
        
            default:
                break;
        }
    }
}    }
  }
}

export {LRbuttonComponent}
