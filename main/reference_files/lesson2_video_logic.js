const videoLogicComponent = {
    schema: {
      name: {type: 'string'},
      video: {type: 'string'},
      thumb: {type: 'string'},
      canstop: {type: 'bool'},
    },
    init() {
      /**
       * "this" aka "el" refers to the video entity.
       */
      const {el} = this
      const {object3D} = this.el
      const {name} = this.data
      const video = document.querySelector(this.data.video)
      const thumbnailAsset = this.data.thumb && document.querySelector(this.data.thumb)
  
      let playing = false
      object3D.visible = false
  
      el.setAttribute('material', 'src', thumbnailAsset || video)
      el.setAttribute('class', 'cantap')
  
      /**
       * Play or pause the video when tapped.
       */
      el.addEventListener('click', () => {
        if (!playing) {
          el.setAttribute('material', 'src', video)
          video.play()
          playing = true
        } else if (this.data.canstop) {
          el.setAttribute('material', 'src', thumbnailAsset || video)
          video.pause()
          playing = false
        }
      })
  
      /**
       * Handle updating of the video position relative to the tracking image.
       */
      const updatePosition = ({detail}) => {
        if (name !== detail.name) {
          return
        }
  
        object3D.position.copy(detail.position)
        object3D.quaternion.copy(detail.rotation)
        object3D.scale.set(detail.scale, detail.scale, detail.scale)
      }
  
      /**
       * Show thumbnail upon tracking lost.
       */
      const showThumbnail = ({detail}) => {
        if (name !== detail.name) {
          return
        }
  
        video.pause()
        el.setAttribute('material', 'src', thumbnailAsset || video)
        object3D.position.copy(detail.position)
        object3D.quaternion.copy(detail.rotation)
        object3D.scale.set(detail.scale, detail.scale, detail.scale)
        object3D.visible = true
      }
  
      /**
       * When the tracking is lost, we will pause the video.
       */
      const hideThumbnail = ({detail}) => {
        if (name !== detail.name) {
          return
        }
  
        video.pause()
        playing = false
        object3D.visible = false
      }
  
      this.el.sceneEl.addEventListener('xrimagefound', showThumbnail)
      this.el.sceneEl.addEventListener('xrimageupdated', updatePosition)
      this.el.sceneEl.addEventListener('xrimagelost', hideThumbnail)
    },
  }
  
  export {videoLogicComponent}