const machineLabelsComponent = {
    multiple: true,
  
    events: {
      click(evt) {
        const scene = this.el.sceneEl
  
        const target = scene.querySelector('#target')
  
        const machine = scene.querySelector('#machine')
  
        const labels3DQuorum = scene.querySelector('#labels3DQuorum')
        const labelsClarity = scene.querySelector('#labelsClarity')
        const labelsFieldLights = scene.querySelector('#labelsFieldLights')
        const labelsIntelligent2D = scene.querySelector('#labelsIntelligent2D')
        const labelsSmartCurve = scene.querySelector('#labelsSmartCurve')
        const labelsSmartPosition = scene.querySelector('#labelsSmartPosition')
  
        const plusLabels3DQuorum = scene.querySelector('#plusLabels3DQuorum')
        const plusLabelsClarity = scene.querySelector('#plusLabelsClarity')
        const pluslabelsFieldLights = scene.querySelector('#pluslabelsFieldLights')
        const plusLabelsIntelligent2D = scene.querySelector('#plusLabelsIntelligent2D')
        const plusLabelsSmartCurve = scene.querySelector('#plusLabelsSmartCurve')
        const plusLabelsSmartPosition = scene.querySelector('#plusLabelsSmartPosition')
  
        const soundButtonPress = new window.Howl({
          src: [require('./assets/button_v1.mp3')],
          volume: 0.8,
        })
  
        switch (this.el.id) {
          case 'plusLabels3DQuorum': {
            machine.setAttribute('isAnimatingLabels', '')
  
            plusLabels3DQuorum.removeAttribute('animation-mixer')
            plusLabels3DQuorum.setAttribute('animation-mixer', 'clip: pressed; loop: once;')
            plusLabels3DQuorum.setAttribute('currentTab', '')
  
            const plusLabels3DQuorumAnimationFinished = () => {
              if (plusLabels3DQuorum.hasAttribute('currentTab')) {
                console.log('plusLabels3DQuorum event listener fired')
  
                machine.removeAttribute('animation-mixer')
                machine.setAttribute('animation-mixer', 'clip: default_anim; loop: once; clampWhenFinished: true;')
  
                plusLabels3DQuorum.removeAttribute('class', 'cantap')
                plusLabelsClarity.removeAttribute('class', 'cantap')
                pluslabelsFieldLights.removeAttribute('class', 'cantap')
                plusLabelsIntelligent2D.removeAttribute('class', 'cantap')
                plusLabelsSmartCurve.removeAttribute('class', 'cantap')
                plusLabelsSmartPosition.removeAttribute('class', 'cantap')
  
                plusLabels3DQuorum.setAttribute('visible', false)
                plusLabelsClarity.setAttribute('visible', false)
                pluslabelsFieldLights.setAttribute('visible', false)
                plusLabelsIntelligent2D.setAttribute('visible', false)
                plusLabelsSmartCurve.setAttribute('visible', false)
                plusLabelsSmartPosition.setAttribute('visible', false)
  
                labels3DQuorum.setAttribute('visible', true)
                labelsClarity.setAttribute('visible', false)
                labelsFieldLights.setAttribute('visible', false)
                labelsIntelligent2D.setAttribute('visible', false)
                labelsSmartCurve.setAttribute('visible', false)
                labelsSmartPosition.setAttribute('visible', false)
  
                machine.addEventListener('animation-finished', () => {
                  labels3DQuorum.setAttribute('visible', false)
                  labelsClarity.setAttribute('visible', false)
                  labelsFieldLights.setAttribute('visible', false)
                  labelsIntelligent2D.setAttribute('visible', false)
                  labelsSmartCurve.setAttribute('visible', false)
                  labelsSmartPosition.setAttribute('visible', false)
  
                  plusLabels3DQuorum.setAttribute('visible', true)
                  plusLabelsClarity.setAttribute('visible', true)
                  pluslabelsFieldLights.setAttribute('visible', true)
                  plusLabelsIntelligent2D.setAttribute('visible', true)
                  plusLabelsSmartCurve.setAttribute('visible', true)
                  plusLabelsSmartPosition.setAttribute('visible', true)
  
                  plusLabels3DQuorum.setAttribute('class', 'cantap')
                  plusLabelsClarity.setAttribute('class', 'cantap')
                  pluslabelsFieldLights.setAttribute('class', 'cantap')
                  plusLabelsIntelligent2D.setAttribute('class', 'cantap')
                  plusLabelsSmartCurve.setAttribute('class', 'cantap')
                  plusLabelsSmartPosition.setAttribute('class', 'cantap')
  
                  plusLabels3DQuorum.removeAttribute('currentTab')
                  console.log('remove currentTab')
                  machine.removeAttribute('isAnimatingLabels')
                }, {once: true})
              }
            }
  
            if (!plusLabels3DQuorum.hasAttribute('hasEventListener')) {
              console.log('adding plusLabels3DQuorum event listener')
              plusLabels3DQuorum.addEventListener('animation-finished', plusLabels3DQuorumAnimationFinished)
              plusLabels3DQuorum.setAttribute('hasEventListener', '')
            }
          }
            break
  
          case 'plusLabelsClarity': {
            machine.setAttribute('isAnimatingLabels', '')
  
            plusLabelsClarity.removeAttribute('animation-mixer')
            plusLabelsClarity.setAttribute('animation-mixer', 'clip: pressed; loop: once;')
            plusLabelsClarity.setAttribute('currentTab', '')
  
            const plusLabelsClarityAnimationFinished = () => {
              if (plusLabelsClarity.hasAttribute('currentTab')) {
                console.log('plusLabelsClarity event listener fired')
  
                machine.removeAttribute('animation-mixer')
                machine.setAttribute('animation-mixer', 'clip: default_anim; loop: once; clampWhenFinished: true;')
  
                plusLabels3DQuorum.removeAttribute('class', 'cantap')
                plusLabelsClarity.removeAttribute('class', 'cantap')
                pluslabelsFieldLights.removeAttribute('class', 'cantap')
                plusLabelsIntelligent2D.removeAttribute('class', 'cantap')
                plusLabelsSmartCurve.removeAttribute('class', 'cantap')
                plusLabelsSmartPosition.removeAttribute('class', 'cantap')
  
                plusLabels3DQuorum.setAttribute('visible', false)
                plusLabelsClarity.setAttribute('visible', false)
                pluslabelsFieldLights.setAttribute('visible', false)
                plusLabelsIntelligent2D.setAttribute('visible', false)
                plusLabelsSmartCurve.setAttribute('visible', false)
                plusLabelsSmartPosition.setAttribute('visible', false)
  
                labels3DQuorum.setAttribute('visible', false)
                labelsClarity.setAttribute('visible', true)
                labelsFieldLights.setAttribute('visible', false)
                labelsIntelligent2D.setAttribute('visible', false)
                labelsSmartCurve.setAttribute('visible', false)
                labelsSmartPosition.setAttribute('visible', false)
  
                machine.addEventListener('animation-finished', () => {
                  labels3DQuorum.setAttribute('visible', false)
                  labelsClarity.setAttribute('visible', false)
                  labelsFieldLights.setAttribute('visible', false)
                  labelsIntelligent2D.setAttribute('visible', false)
                  labelsSmartCurve.setAttribute('visible', false)
                  labelsSmartPosition.setAttribute('visible', false)
  
                  plusLabels3DQuorum.setAttribute('visible', true)
                  plusLabelsClarity.setAttribute('visible', true)
                  pluslabelsFieldLights.setAttribute('visible', true)
                  plusLabelsIntelligent2D.setAttribute('visible', true)
                  plusLabelsSmartCurve.setAttribute('visible', true)
                  plusLabelsSmartPosition.setAttribute('visible', true)
  
                  plusLabels3DQuorum.setAttribute('class', 'cantap')
                  plusLabelsClarity.setAttribute('class', 'cantap')
                  pluslabelsFieldLights.setAttribute('class', 'cantap')
                  plusLabelsIntelligent2D.setAttribute('class', 'cantap')
                  plusLabelsSmartCurve.setAttribute('class', 'cantap')
                  plusLabelsSmartPosition.setAttribute('class', 'cantap')
  
                  plusLabelsClarity.removeAttribute('currentTab')
                  console.log('remove currentTab')
                  machine.removeAttribute('isAnimatingLabels')
                }, {once: true})
              }
            }
  
            if (!plusLabelsClarity.hasAttribute('hasEventListener')) {
              console.log('adding plusLabelsClarity event listener')
              plusLabelsClarity.addEventListener('animation-finished', plusLabelsClarityAnimationFinished)
              plusLabelsClarity.setAttribute('hasEventListener', '')
            }
          }
            break
  
          case 'pluslabelsFieldLights': {
            machine.setAttribute('isAnimatingLabels', '')
  
            pluslabelsFieldLights.removeAttribute('animation-mixer')
            pluslabelsFieldLights.setAttribute('animation-mixer', 'clip: pressed; loop: once;')
            pluslabelsFieldLights.setAttribute('currentTab', '')
  
            const pluslabelsFieldLightsAnimationFinished = () => {
              if (pluslabelsFieldLights.hasAttribute('currentTab')) {
                console.log('pluslabelsFieldLights event listener fired')
  
                machine.removeAttribute('animation-mixer')
                machine.setAttribute('animation-mixer', 'clip: default_anim; loop: once; clampWhenFinished: true;')
  
                plusLabels3DQuorum.removeAttribute('class', 'cantap')
                plusLabelsClarity.removeAttribute('class', 'cantap')
                pluslabelsFieldLights.removeAttribute('class', 'cantap')
                plusLabelsIntelligent2D.removeAttribute('class', 'cantap')
                plusLabelsSmartCurve.removeAttribute('class', 'cantap')
                plusLabelsSmartPosition.removeAttribute('class', 'cantap')
  
                plusLabels3DQuorum.setAttribute('visible', false)
                plusLabelsClarity.setAttribute('visible', false)
                pluslabelsFieldLights.setAttribute('visible', false)
                plusLabelsIntelligent2D.setAttribute('visible', false)
                plusLabelsSmartCurve.setAttribute('visible', false)
                plusLabelsSmartPosition.setAttribute('visible', false)
  
                labels3DQuorum.setAttribute('visible', false)
                labelsClarity.setAttribute('visible', false)
                labelsFieldLights.setAttribute('visible', true)
                labelsIntelligent2D.setAttribute('visible', false)
                labelsSmartCurve.setAttribute('visible', false)
                labelsSmartPosition.setAttribute('visible', false)
  
                machine.addEventListener('animation-finished', () => {
                  labels3DQuorum.setAttribute('visible', false)
                  labelsClarity.setAttribute('visible', false)
                  labelsFieldLights.setAttribute('visible', false)
                  labelsIntelligent2D.setAttribute('visible', false)
                  labelsSmartCurve.setAttribute('visible', false)
                  labelsSmartPosition.setAttribute('visible', false)
  
                  plusLabels3DQuorum.setAttribute('visible', true)
                  plusLabelsClarity.setAttribute('visible', true)
                  pluslabelsFieldLights.setAttribute('visible', true)
                  plusLabelsIntelligent2D.setAttribute('visible', true)
                  plusLabelsSmartCurve.setAttribute('visible', true)
                  plusLabelsSmartPosition.setAttribute('visible', true)
  
                  plusLabels3DQuorum.setAttribute('class', 'cantap')
                  plusLabelsClarity.setAttribute('class', 'cantap')
                  pluslabelsFieldLights.setAttribute('class', 'cantap')
                  plusLabelsIntelligent2D.setAttribute('class', 'cantap')
                  plusLabelsSmartCurve.setAttribute('class', 'cantap')
                  plusLabelsSmartPosition.setAttribute('class', 'cantap')
  
                  pluslabelsFieldLights.removeAttribute('currentTab')
                  console.log('remove currentTab')
                  machine.removeAttribute('isAnimatingLabels')
                }, {once: true})
              }
            }
  
            if (!pluslabelsFieldLights.hasAttribute('hasEventListener')) {
              console.log('adding pluslabelsFieldLights event listener')
              pluslabelsFieldLights.addEventListener('animation-finished', pluslabelsFieldLightsAnimationFinished)
              pluslabelsFieldLights.setAttribute('hasEventListener', '')
            }
          }
            break
  
          case 'plusLabelsIntelligent2D': {
            machine.setAttribute('isAnimatingLabels', '')
  
            plusLabelsIntelligent2D.removeAttribute('animation-mixer')
            plusLabelsIntelligent2D.setAttribute('animation-mixer', 'clip: pressed; loop: once;')
            plusLabelsIntelligent2D.setAttribute('currentTab', '')
  
            const plusLabelsIntelligent2DAnimationFinished = () => {
              if (plusLabelsIntelligent2D.hasAttribute('currentTab')) {
                console.log('plusLabelsIntelligent2D event listener fired')
  
                machine.removeAttribute('animation-mixer')
                machine.setAttribute('animation-mixer', 'clip: default_anim; loop: once; clampWhenFinished: true;')
  
                plusLabels3DQuorum.removeAttribute('class', 'cantap')
                plusLabelsClarity.removeAttribute('class', 'cantap')
                pluslabelsFieldLights.removeAttribute('class', 'cantap')
                plusLabelsIntelligent2D.removeAttribute('class', 'cantap')
                plusLabelsSmartCurve.removeAttribute('class', 'cantap')
                plusLabelsSmartPosition.removeAttribute('class', 'cantap')
  
                plusLabels3DQuorum.setAttribute('visible', false)
                plusLabelsClarity.setAttribute('visible', false)
                pluslabelsFieldLights.setAttribute('visible', false)
                plusLabelsIntelligent2D.setAttribute('visible', false)
                plusLabelsSmartCurve.setAttribute('visible', false)
                plusLabelsSmartPosition.setAttribute('visible', false)
  
                labels3DQuorum.setAttribute('visible', false)
                labelsClarity.setAttribute('visible', false)
                labelsFieldLights.setAttribute('visible', false)
                labelsIntelligent2D.setAttribute('visible', true)
                labelsSmartCurve.setAttribute('visible', false)
                labelsSmartPosition.setAttribute('visible', false)
  
                machine.addEventListener('animation-finished', () => {
                  labels3DQuorum.setAttribute('visible', false)
                  labelsClarity.setAttribute('visible', false)
                  labelsFieldLights.setAttribute('visible', false)
                  labelsIntelligent2D.setAttribute('visible', false)
                  labelsSmartCurve.setAttribute('visible', false)
                  labelsSmartPosition.setAttribute('visible', false)
  
                  plusLabels3DQuorum.setAttribute('visible', true)
                  plusLabelsClarity.setAttribute('visible', true)
                  pluslabelsFieldLights.setAttribute('visible', true)
                  plusLabelsIntelligent2D.setAttribute('visible', true)
                  plusLabelsSmartCurve.setAttribute('visible', true)
                  plusLabelsSmartPosition.setAttribute('visible', true)
  
                  plusLabels3DQuorum.setAttribute('class', 'cantap')
                  plusLabelsClarity.setAttribute('class', 'cantap')
                  pluslabelsFieldLights.setAttribute('class', 'cantap')
                  plusLabelsIntelligent2D.setAttribute('class', 'cantap')
                  plusLabelsSmartCurve.setAttribute('class', 'cantap')
                  plusLabelsSmartPosition.setAttribute('class', 'cantap')
  
                  plusLabelsIntelligent2D.removeAttribute('currentTab')
                  console.log('remove currentTab')
                  machine.removeAttribute('isAnimatingLabels')
                }, {once: true})
              }
            }
  
            if (!plusLabelsIntelligent2D.hasAttribute('hasEventListener')) {
              console.log('adding plusLabelsIntelligent2D event listener')
              plusLabelsIntelligent2D.addEventListener('animation-finished', plusLabelsIntelligent2DAnimationFinished)
              plusLabelsIntelligent2D.setAttribute('hasEventListener', '')
            }
          }
            break
  
          case 'plusLabelsSmartCurve': {
            machine.setAttribute('isAnimatingLabels', '')
  
            plusLabelsSmartCurve.removeAttribute('animation-mixer')
            plusLabelsSmartCurve.setAttribute('animation-mixer', 'clip: pressed; loop: once;')
            plusLabelsSmartCurve.setAttribute('currentTab', '')
  
            const plusLabelsSmartCurveAnimationFinished = () => {
              if (plusLabelsSmartCurve.hasAttribute('currentTab')) {
                console.log('plusLabelsSmartCurve event listener fired')
  
                machine.removeAttribute('animation-mixer')
                machine.setAttribute('animation-mixer', 'clip: smartcurve_anim; loop: once; clampWhenFinished: true;')
  
                plusLabels3DQuorum.removeAttribute('class', 'cantap')
                plusLabelsClarity.removeAttribute('class', 'cantap')
                pluslabelsFieldLights.removeAttribute('class', 'cantap')
                plusLabelsIntelligent2D.removeAttribute('class', 'cantap')
                plusLabelsSmartCurve.removeAttribute('class', 'cantap')
                plusLabelsSmartPosition.removeAttribute('class', 'cantap')
  
                plusLabels3DQuorum.setAttribute('visible', false)
                plusLabelsClarity.setAttribute('visible', false)
                pluslabelsFieldLights.setAttribute('visible', false)
                plusLabelsIntelligent2D.setAttribute('visible', false)
                plusLabelsSmartCurve.setAttribute('visible', false)
                plusLabelsSmartPosition.setAttribute('visible', false)
  
                labels3DQuorum.setAttribute('visible', false)
                labelsClarity.setAttribute('visible', false)
                labelsFieldLights.setAttribute('visible', false)
                labelsIntelligent2D.setAttribute('visible', false)
                labelsSmartCurve.setAttribute('visible', true)
                labelsSmartPosition.setAttribute('visible', false)
  
                machine.addEventListener('animation-finished', () => {
                  labels3DQuorum.setAttribute('visible', false)
                  labelsClarity.setAttribute('visible', false)
                  labelsFieldLights.setAttribute('visible', false)
                  labelsIntelligent2D.setAttribute('visible', false)
                  labelsSmartCurve.setAttribute('visible', false)
                  labelsSmartPosition.setAttribute('visible', false)
  
                  plusLabels3DQuorum.setAttribute('visible', true)
                  plusLabelsClarity.setAttribute('visible', true)
                  pluslabelsFieldLights.setAttribute('visible', true)
                  plusLabelsIntelligent2D.setAttribute('visible', true)
                  plusLabelsSmartCurve.setAttribute('visible', true)
                  plusLabelsSmartPosition.setAttribute('visible', true)
  
                  plusLabels3DQuorum.setAttribute('class', 'cantap')
                  plusLabelsClarity.setAttribute('class', 'cantap')
                  pluslabelsFieldLights.setAttribute('class', 'cantap')
                  plusLabelsIntelligent2D.setAttribute('class', 'cantap')
                  plusLabelsSmartCurve.setAttribute('class', 'cantap')
                  plusLabelsSmartPosition.setAttribute('class', 'cantap')
  
                  plusLabelsSmartCurve.removeAttribute('currentTab')
                  console.log('remove currentTab')
                  machine.removeAttribute('isAnimatingLabels')
                }, {once: true})
              }
            }
  
            if (!plusLabelsSmartCurve.hasAttribute('hasEventListener')) {
              console.log('adding plusLabelsSmartCurve event listener')
              plusLabelsSmartCurve.addEventListener('animation-finished', plusLabelsSmartCurveAnimationFinished)
              plusLabelsSmartCurve.setAttribute('hasEventListener', '')
            }
          }
            break
  
          case 'plusLabelsSmartPosition': {
            machine.setAttribute('isAnimatingLabels', '')
  
            plusLabelsSmartPosition.removeAttribute('animation-mixer')
            plusLabelsSmartPosition.setAttribute('animation-mixer', 'clip: pressed; loop: once;')
            plusLabelsSmartPosition.setAttribute('currentTab', '')
  
            const plusLabelsSmartPositionAnimationFinished = () => {
              if (plusLabelsSmartPosition.hasAttribute('currentTab')) {
                console.log('plusLabelsSmartPosition event listener fired')
  
                machine.removeAttribute('animation-mixer')
                machine.setAttribute('animation-mixer', 'clip: smartposition_anim; loop: once; clampWhenFinished: true;')
  
                plusLabels3DQuorum.removeAttribute('class', 'cantap')
                plusLabelsClarity.removeAttribute('class', 'cantap')
                pluslabelsFieldLights.removeAttribute('class', 'cantap')
                plusLabelsIntelligent2D.removeAttribute('class', 'cantap')
                plusLabelsSmartCurve.removeAttribute('class', 'cantap')
                plusLabelsSmartPosition.removeAttribute('class', 'cantap')
  
                plusLabels3DQuorum.setAttribute('visible', false)
                plusLabelsClarity.setAttribute('visible', false)
                pluslabelsFieldLights.setAttribute('visible', false)
                plusLabelsIntelligent2D.setAttribute('visible', false)
                plusLabelsSmartCurve.setAttribute('visible', false)
                plusLabelsSmartPosition.setAttribute('visible', false)
  
                labels3DQuorum.setAttribute('visible', false)
                labelsClarity.setAttribute('visible', false)
                labelsFieldLights.setAttribute('visible', false)
                labelsIntelligent2D.setAttribute('visible', false)
                labelsSmartCurve.setAttribute('visible', false)
                labelsSmartPosition.setAttribute('visible', true)
  
                machine.addEventListener('animation-finished', () => {
                  labels3DQuorum.setAttribute('visible', false)
                  labelsClarity.setAttribute('visible', false)
                  labelsFieldLights.setAttribute('visible', false)
                  labelsIntelligent2D.setAttribute('visible', false)
                  labelsSmartCurve.setAttribute('visible', false)
                  labelsSmartPosition.setAttribute('visible', false)
  
                  plusLabels3DQuorum.setAttribute('visible', true)
                  plusLabelsClarity.setAttribute('visible', true)
                  pluslabelsFieldLights.setAttribute('visible', true)
                  plusLabelsIntelligent2D.setAttribute('visible', true)
                  plusLabelsSmartCurve.setAttribute('visible', true)
                  plusLabelsSmartPosition.setAttribute('visible', true)
  
                  plusLabels3DQuorum.setAttribute('class', 'cantap')
                  plusLabelsClarity.setAttribute('class', 'cantap')
                  pluslabelsFieldLights.setAttribute('class', 'cantap')
                  plusLabelsIntelligent2D.setAttribute('class', 'cantap')
                  plusLabelsSmartCurve.setAttribute('class', 'cantap')
                  plusLabelsSmartPosition.setAttribute('class', 'cantap')
  
                  plusLabelsSmartPosition.removeAttribute('currentTab')
                  console.log('remove currentTab')
                  machine.removeAttribute('isAnimatingLabels')
                }, {once: true})
              }
            }
  
            if (!plusLabelsSmartPosition.hasAttribute('hasEventListener')) {
              console.log('adding plusLabelsSmartPosition event listener')
              plusLabelsSmartPosition.addEventListener('animation-finished', plusLabelsSmartPositionAnimationFinished)
              plusLabelsSmartPosition.setAttribute('hasEventListener', '')
            }
          }
            break
  
          default:
            break
        }
      },
    },
  }
  
  const timelineOrbsComponent = {
    multiple: true,
  
    events: {
      click(evt) {
        const scene = this.el.sceneEl
  
        const target = scene.querySelector('#target')
  
        const soundButtonPress = new window.Howl({
          src: [require('./assets/button_v1.mp3')],
          volume: 0.8,
        })
  
        switch (this.el.id) {
          case 'orbs2011': {
            // soundButtonPress.play()
  
            const timelineSelf = scene.querySelector('#timeline2011')
            const timeline2013 = scene.querySelector('#timeline2013')
            const timeline2015 = scene.querySelector('#timeline2015')
            const timeline2018 = scene.querySelector('#timeline2018')
            const timeline2020 = scene.querySelector('#timeline2020')
  
            if (timeline2013 !== null) {
              target.removeChild(timeline2013)
            }
  
            if (timeline2015 !== null) {
              target.removeChild(timeline2015)
            }
  
            if (timeline2018 !== null) {
              target.removeChild(timeline2018)
            }
  
            if (timeline2020 !== null) {
              target.removeChild(timeline2020)
            }
  
            const orbs2011 = scene.querySelector('#orbs2011')
            const orbs2013 = scene.querySelector('#orbs2013')
            const orbs2015 = scene.querySelector('#orbs2015')
            const orbs2018 = scene.querySelector('#orbs2018')
            const orbs2020 = scene.querySelector('#orbs2020')
  
            orbs2011.setAttribute('animation-mixer', 'clip: inflate; loop: once; clampWhenFinished: true;')
            orbs2011.setAttribute('isInflated')
  
            if (orbs2013.hasAttribute('isInflated')) {
              orbs2013.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2013.removeAttribute('isInflated')
            }
  
            if (orbs2015.hasAttribute('isInflated')) {
              orbs2015.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2015.removeAttribute('isInflated')
            }
  
            if (orbs2018.hasAttribute('isInflated')) {
              orbs2018.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2018.removeAttribute('isInflated')
            }
  
            if (orbs2020.hasAttribute('isInflated')) {
              orbs2020.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2020.removeAttribute('isInflated')
            }
  
            if (timelineSelf === null) {
              const timeline2011 = document.createElement('a-entity')
              timeline2011.id = 'timeline2011'
              timeline2011.setAttribute('gltf-model', '#timeline-2011-glb')
              timeline2011.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
              timeline2011.setAttribute('position', '0 0 0.03')
              timeline2011.setAttribute('scale', '0.7 0.7 0.7')
              target.appendChild(timeline2011)
            }
            break
          }
  
          case 'orbs2013': {
            // soundButtonPress.play()
  
            const timeline2011 = scene.querySelector('#timeline2011')
            const timelineSelf = scene.querySelector('#timeline2013')
            const timeline2015 = scene.querySelector('#timeline2015')
            const timeline2018 = scene.querySelector('#timeline2018')
            const timeline2020 = scene.querySelector('#timeline2020')
  
            if (timeline2011 !== null) {
              target.removeChild(timeline2011)
            }
  
            if (timeline2015 !== null) {
              target.removeChild(timeline2015)
            }
  
            if (timeline2018 !== null) {
              target.removeChild(timeline2018)
            }
  
            if (timeline2020 !== null) {
              target.removeChild(timeline2020)
            }
  
            const orbs2011 = scene.querySelector('#orbs2011')
            const orbs2013 = scene.querySelector('#orbs2013')
            const orbs2015 = scene.querySelector('#orbs2015')
            const orbs2018 = scene.querySelector('#orbs2018')
            const orbs2020 = scene.querySelector('#orbs2020')
  
            orbs2013.setAttribute('animation-mixer', 'clip: inflate; loop: once; clampWhenFinished: true;')
            orbs2013.setAttribute('isInflated')
  
            if (orbs2011.hasAttribute('isInflated')) {
              orbs2011.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2011.removeAttribute('isInflated')
            }
  
            if (orbs2015.hasAttribute('isInflated')) {
              orbs2015.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2015.removeAttribute('isInflated')
            }
  
            if (orbs2018.hasAttribute('isInflated')) {
              orbs2018.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2018.removeAttribute('isInflated')
            }
  
            if (orbs2020.hasAttribute('isInflated')) {
              orbs2020.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2020.removeAttribute('isInflated')
            }
  
            if (timelineSelf === null) {
              const timeline2013 = document.createElement('a-entity')
              timeline2013.id = 'timeline2013'
              timeline2013.setAttribute('gltf-model', '#timeline-2013-glb')
              timeline2013.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
              timeline2013.setAttribute('position', '0 0 0.03')
              timeline2013.setAttribute('scale', '0.7 0.7 0.7')
              target.appendChild(timeline2013)
            }
            break
          }
  
          case 'orbs2015': {
            // soundButtonPress.play()
  
            const timeline2011 = scene.querySelector('#timeline2011')
            const timeline2013 = scene.querySelector('#timeline2013')
            const timelineSelf = scene.querySelector('#timeline2015')
            const timeline2018 = scene.querySelector('#timeline2018')
            const timeline2020 = scene.querySelector('#timeline2020')
  
            if (timeline2011 !== null) {
              target.removeChild(timeline2011)
            }
  
            if (timeline2013 !== null) {
              target.removeChild(timeline2013)
            }
  
            if (timeline2018 !== null) {
              target.removeChild(timeline2018)
            }
  
            if (timeline2020 !== null) {
              target.removeChild(timeline2020)
            }
  
            const orbs2011 = scene.querySelector('#orbs2011')
            const orbs2013 = scene.querySelector('#orbs2013')
            const orbs2015 = scene.querySelector('#orbs2015')
            const orbs2018 = scene.querySelector('#orbs2018')
            const orbs2020 = scene.querySelector('#orbs2020')
  
            orbs2015.setAttribute('animation-mixer', 'clip: inflate; loop: once; clampWhenFinished: true;')
            orbs2015.setAttribute('isInflated')
  
            if (orbs2013.hasAttribute('isInflated')) {
              orbs2013.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2013.removeAttribute('isInflated')
            }
  
            if (orbs2011.hasAttribute('isInflated')) {
              orbs2011.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2011.removeAttribute('isInflated')
            }
  
            if (orbs2018.hasAttribute('isInflated')) {
              orbs2018.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2018.removeAttribute('isInflated')
            }
  
            if (orbs2020.hasAttribute('isInflated')) {
              orbs2020.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2020.removeAttribute('isInflated')
            }
  
            if (timelineSelf === null) {
              const timeline2015 = document.createElement('a-entity')
              timeline2015.id = 'timeline2015'
              timeline2015.setAttribute('gltf-model', '#timeline-2015-glb')
              timeline2015.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
              timeline2015.setAttribute('position', '0 0 0.03')
              timeline2015.setAttribute('scale', '0.7 0.7 0.7')
              target.appendChild(timeline2015)
            }
            break
          }
  
          case 'orbs2018': {
            // soundButtonPress.play()
  
            const timeline2011 = scene.querySelector('#timeline2011')
            const timeline2013 = scene.querySelector('#timeline2013')
            const timeline2015 = scene.querySelector('#timeline2015')
            const timelineSelf = scene.querySelector('#timeline2018')
            const timeline2020 = scene.querySelector('#timeline2020')
  
            if (timeline2011 !== null) {
              target.removeChild(timeline2011)
            }
  
            if (timeline2013 !== null) {
              target.removeChild(timeline2013)
            }
  
            if (timeline2015 !== null) {
              target.removeChild(timeline2015)
            }
  
            if (timeline2020 !== null) {
              target.removeChild(timeline2020)
            }
  
            const orbs2011 = scene.querySelector('#orbs2011')
            const orbs2013 = scene.querySelector('#orbs2013')
            const orbs2015 = scene.querySelector('#orbs2015')
            const orbs2018 = scene.querySelector('#orbs2018')
            const orbs2020 = scene.querySelector('#orbs2020')
  
            orbs2018.setAttribute('animation-mixer', 'clip: inflate; loop: once; clampWhenFinished: true;')
            orbs2018.setAttribute('isInflated')
  
            if (orbs2013.hasAttribute('isInflated')) {
              orbs2013.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2013.removeAttribute('isInflated')
            }
  
            if (orbs2015.hasAttribute('isInflated')) {
              orbs2015.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2015.removeAttribute('isInflated')
            }
  
            if (orbs2011.hasAttribute('isInflated')) {
              orbs2011.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2011.removeAttribute('isInflated')
            }
  
            if (orbs2020.hasAttribute('isInflated')) {
              orbs2020.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2020.removeAttribute('isInflated')
            }
  
            if (timelineSelf === null) {
              const timeline2018 = document.createElement('a-entity')
              timeline2018.id = 'timeline2018'
              timeline2018.setAttribute('gltf-model', '#timeline-2018-glb')
              timeline2018.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
              timeline2018.setAttribute('position', '0 0 0.03')
              timeline2018.setAttribute('scale', '0.7 0.7 0.7')
              target.appendChild(timeline2018)
            }
            break
          }
  
          case 'orbs2020': {
            // soundButtonPress.play()
  
            const timeline2011 = scene.querySelector('#timeline2011')
            const timeline2013 = scene.querySelector('#timeline2013')
            const timeline2015 = scene.querySelector('#timeline2015')
            const timeline2018 = scene.querySelector('#timeline2018')
            const timelineSelf = scene.querySelector('#timeline2020')
  
            if (timeline2011 !== null) {
              target.removeChild(timeline2011)
            }
  
            if (timeline2013 !== null) {
              target.removeChild(timeline2013)
            }
  
            if (timeline2015 !== null) {
              target.removeChild(timeline2015)
            }
  
            if (timeline2018 !== null) {
              target.removeChild(timeline2018)
            }
  
            const orbs2011 = scene.querySelector('#orbs2011')
            const orbs2013 = scene.querySelector('#orbs2013')
            const orbs2015 = scene.querySelector('#orbs2015')
            const orbs2018 = scene.querySelector('#orbs2018')
            const orbs2020 = scene.querySelector('#orbs2020')
  
            orbs2020.setAttribute('animation-mixer', 'clip: inflate; loop: once; clampWhenFinished: true;')
            orbs2020.setAttribute('isInflated')
  
            if (orbs2013.hasAttribute('isInflated')) {
              orbs2013.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2013.removeAttribute('isInflated')
            }
  
            if (orbs2015.hasAttribute('isInflated')) {
              orbs2015.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2015.removeAttribute('isInflated')
            }
  
            if (orbs2018.hasAttribute('isInflated')) {
              orbs2018.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2018.removeAttribute('isInflated')
            }
  
            if (orbs2011.hasAttribute('isInflated')) {
              orbs2011.setAttribute('animation-mixer', 'clip: deflate; loop: once; clampWhenFinished: true;')
              orbs2011.removeAttribute('isInflated')
            }
  
            if (timelineSelf === null) {
              const timeline2020 = document.createElement('a-entity')
              timeline2020.id = 'timeline2020'
              timeline2020.setAttribute('gltf-model', '#timeline-2020-glb')
              timeline2020.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
              timeline2020.setAttribute('position', '0 0 0.03')
              timeline2020.setAttribute('scale', '0.7 0.7 0.7')
              target.appendChild(timeline2020)
            }
            break
          }
  
          default:
            break
        }
      },
    },
  }
  
  const clickTabComponent = {
    multiple: true,
  
    init() {
      const scene = this.el.sceneEl
  
      const machine = scene.querySelector('#machine')
  
      const machineBtn = scene.querySelector('#machineBtn')
      const presenterBtn = scene.querySelector('#presenterBtn')
      const timelineBtn = scene.querySelector('#timelineBtn')
  
      const platform = scene.querySelector('#platform')
  
      const target = scene.querySelector('#target')
  
      const soundButtonPress = new window.Howl({
        src: [require('./assets/button_v1.mp3')],
        volume: 0.8,
      })
  
      const machineBtnClick = (e) => {
        if (machine !== null) {
          if (machine.hasAttribute('isAnimatingLabels')) {
            return
          }
        }
  
        if (!machineBtn.hasAttribute('currentTab')) {
          console.log('machine clicked')
          machineBtn.setAttribute('currentTab', '')
          console.log(machineBtn.hasAttribute('currentTab'))
          console.log(machineBtn.hasAttribute('hasMoved'))
  
          machineBtn.removeAttribute('class', 'cantap')
          presenterBtn.removeAttribute('class', 'cantap')
          timelineBtn.removeAttribute('class', 'cantap')
  
          if (presenterBtn.hasAttribute('currentTab')) {
            presenterBtn.removeAttribute('currentTab')
            console.log('remove currentTab 1')
          }
  
          if (timelineBtn.hasAttribute('currentTab')) {
            timelineBtn.removeAttribute('currentTab')
            console.log('remove currentTab 2')
            timelineBtn.setAttribute('animation-mixer', 'clip: unpress; loop: once; clampWhenFinished: true;')
          }
  
          if (!machineBtn.hasAttribute('hasMoved')) {
            machineBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            machineBtn.setAttribute('hasMoved', '')
          } else {
            machineBtn.setAttribute('animation-mixer', 'clip: btn_press; loop: once; clampWhenFinished: true;')
          }
  
          if (!presenterBtn.hasAttribute('hasMoved')) {
            presenterBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            presenterBtn.setAttribute('hasMoved', '')
          }
  
          if (!timelineBtn.hasAttribute('hasMoved')) {
            timelineBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            timelineBtn.setAttribute('hasMoved', '')
          }
  
          const machineAnimationFinished = () => {
            if (machineBtn.hasAttribute('currentTab') && machineBtn.hasAttribute('hasMoved')) {
              console.log('machine event listener fired')
  
              if (!machineBtn.hasAttribute('firstLoad')) {
                machineBtn.setAttribute('animation-mixer', 'clip: btn_press; loop: once; clampWhenFinished: true;')
                machineBtn.setAttribute('hasEventListener', '')
  
                machineBtn.setAttribute('firstLoad', '')
                presenterBtn.setAttribute('firstLoad', '')
                timelineBtn.setAttribute('firstLoad', '')
              }
  
              const ring = scene.querySelector('#ring')
              const orbs2011 = scene.querySelector('#orbs2011')
              const orbs2013 = scene.querySelector('#orbs2013')
              const orbs2015 = scene.querySelector('#orbs2015')
              const orbs2018 = scene.querySelector('#orbs2018')
              const orbs2020 = scene.querySelector('#orbs2020')
  
              if (ring !== null) {
                ring.setAttribute('animation-mixer', 'clip: ringin; loop: once; clampWhenFinished: true;')
                // ring.setAttribute('visible', false)
              }
  
              if (orbs2011 !== null) {
                orbs2011.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2011.removeAttribute('class', 'cantap')
                // orbs2011.setAttribute('visible', false)
              }
  
              if (orbs2013 !== null) {
                orbs2013.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2013.removeAttribute('class', 'cantap')
                // orbs2013.setAttribute('visible', false)
              }
  
              if (orbs2015 !== null) {
                orbs2015.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2015.removeAttribute('class', 'cantap')
                // orbs2015.setAttribute('visible', false)
              }
  
              if (orbs2018 !== null) {
                orbs2018.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2018.removeAttribute('class', 'cantap')
                // orbs2018.setAttribute('visible', false)
              }
  
              if (orbs2020 !== null) {
                orbs2020.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2020.removeAttribute('class', 'cantap')
                // orbs2020.setAttribute('visible', false)
              }
  
              const timeline2011 = scene.querySelector('#timeline2011')
              const timeline2013 = scene.querySelector('#timeline2013')
              const timeline2015 = scene.querySelector('#timeline2015')
              const timeline2018 = scene.querySelector('#timeline2018')
              const timeline2020 = scene.querySelector('#timeline2020')
  
              if (timeline2011 !== null) {
                target.removeChild(timeline2011)
              }
  
              if (timeline2013 !== null) {
                target.removeChild(timeline2013)
              }
  
              if (timeline2015 !== null) {
                target.removeChild(timeline2015)
              }
  
              if (timeline2018 !== null) {
                target.removeChild(timeline2018)
              }
  
              if (timeline2020 !== null) {
                target.removeChild(timeline2020)
              }
  
              machine.setAttribute('visible', true)
              machine.setAttribute('animation-mixer', 'clip: appear_anim; loop: once; clampWhenFinished: true;')
  
              const soundMachineInMusic = new window.Howl({
                src: [require('./assets/spawnin_v1.mp3')],
                volume: 0.3,
              })
              soundMachineInMusic.play()
  
              machine.addEventListener('animation-finished', () => {
                const plusLabels3DQuorum = scene.querySelector('#plusLabels3DQuorum')
                const plusLabelsClarity = scene.querySelector('#plusLabelsClarity')
                const pluslabelsFieldLights = scene.querySelector('#pluslabelsFieldLights')
                const plusLabelsIntelligent2D = scene.querySelector('#plusLabelsIntelligent2D')
                const plusLabelsSmartCurve = scene.querySelector('#plusLabelsSmartCurve')
                const plusLabelsSmartPosition = scene.querySelector('#plusLabelsSmartPosition')
  
                plusLabels3DQuorum.setAttribute('visible', true)
                plusLabelsClarity.setAttribute('visible', true)
                pluslabelsFieldLights.setAttribute('visible', true)
                plusLabelsIntelligent2D.setAttribute('visible', true)
                plusLabelsSmartCurve.setAttribute('visible', true)
                plusLabelsSmartPosition.setAttribute('visible', true)
  
                plusLabels3DQuorum.setAttribute('class', 'cantap')
                plusLabelsClarity.setAttribute('class', 'cantap')
                pluslabelsFieldLights.setAttribute('class', 'cantap')
                plusLabelsIntelligent2D.setAttribute('class', 'cantap')
                plusLabelsSmartCurve.setAttribute('class', 'cantap')
                plusLabelsSmartPosition.setAttribute('class', 'cantap')
  
                console.log('machine scene done')
                machineBtn.setAttribute('class', 'cantap')
                presenterBtn.setAttribute('class', 'cantap')
                timelineBtn.setAttribute('class', 'cantap')
              }, {once: true})
            }
          }
  
          if (!machineBtn.hasAttribute('hasEventListener')) {
            console.log('adding machine event listener')
            machineBtn.addEventListener('animation-finished', machineAnimationFinished)
          }
        }
      }
  
      const timelineBtnClick = (e) => {
        if (machine !== null) {
          if (machine.hasAttribute('isAnimatingLabels')) {
            return
          }
        }
  
        if (!timelineBtn.hasAttribute('currentTab')) {
          console.log('timeline clicked')
          timelineBtn.setAttribute('currentTab', '')
          console.log(timelineBtn.hasAttribute('currentTab'))
          console.log(timelineBtn.hasAttribute('hasMoved'))
  
          machineBtn.removeAttribute('class', 'cantap')
          presenterBtn.removeAttribute('class', 'cantap')
          timelineBtn.removeAttribute('class', 'cantap')
  
          if (machineBtn.hasAttribute('currentTab')) {
            machineBtn.removeAttribute('currentTab')
            console.log('remove currentTab')
            machineBtn.setAttribute('animation-mixer', 'clip: unpress; loop: once; clampWhenFinished: true;')
          }
  
          if (presenterBtn.hasAttribute('currentTab')) {
            presenterBtn.removeAttribute('currentTab')
            console.log('remove currentTab')
          }
  
          if (!machineBtn.hasAttribute('hasMoved')) {
            machineBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            machineBtn.setAttribute('hasMoved', '')
          }
  
          if (!presenterBtn.hasAttribute('hasMoved')) {
            presenterBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            presenterBtn.setAttribute('hasMoved', '')
          }
  
          if (!timelineBtn.hasAttribute('hasMoved')) {
            timelineBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            timelineBtn.setAttribute('hasMoved', '')
          } else {
            timelineBtn.setAttribute('animation-mixer', 'clip: btn_press; loop: once; clampWhenFinished: true;')
          }
  
          const timelineAnimationFinished = () => {
            if (timelineBtn.hasAttribute('currentTab') && timelineBtn.hasAttribute('hasMoved')) {
              console.log('timeline event listener fired')
  
              if (!timelineBtn.hasAttribute('firstLoad')) {
                timelineBtn.setAttribute('animation-mixer', 'clip: btn_press; loop: once; clampWhenFinished: true;')
                timelineBtn.setAttribute('hasEventListener', '')
  
                machineBtn.setAttribute('firstLoad', '')
                presenterBtn.setAttribute('firstLoad', '')
                timelineBtn.setAttribute('firstLoad', '')
              }
  
              const ring = scene.querySelector('#ring')
              const orbs2011 = scene.querySelector('#orbs2011')
              const orbs2013 = scene.querySelector('#orbs2013')
              const orbs2015 = scene.querySelector('#orbs2015')
              const orbs2018 = scene.querySelector('#orbs2018')
              const orbs2020 = scene.querySelector('#orbs2020')
  
              orbs2011.setAttribute('visible', false)
              orbs2013.setAttribute('visible', false)
              orbs2015.setAttribute('visible', false)
              orbs2018.setAttribute('visible', false)
              orbs2020.setAttribute('visible', false)
  
              if (machine !== null) {
                machine.setAttribute('visible', false)
                machine.removeAttribute('animation-mixer')
              }
  
              const plusLabels3DQuorum = scene.querySelector('#plusLabels3DQuorum')
              const plusLabelsClarity = scene.querySelector('#plusLabelsClarity')
              const pluslabelsFieldLights = scene.querySelector('#pluslabelsFieldLights')
              const plusLabelsIntelligent2D = scene.querySelector('#plusLabelsIntelligent2D')
              const plusLabelsSmartCurve = scene.querySelector('#plusLabelsSmartCurve')
              const plusLabelsSmartPosition = scene.querySelector('#plusLabelsSmartPosition')
  
              if (plusLabels3DQuorum !== null) {
                plusLabels3DQuorum.setAttribute('visible', false)
              }
  
              if (plusLabelsClarity !== null) {
                plusLabelsClarity.setAttribute('visible', false)
              }
  
              if (pluslabelsFieldLights !== null) {
                pluslabelsFieldLights.setAttribute('visible', false)
              }
  
              if (plusLabelsIntelligent2D !== null) {
                plusLabelsIntelligent2D.setAttribute('visible', false)
              }
  
              if (plusLabelsSmartCurve !== null) {
                plusLabelsSmartCurve.setAttribute('visible', false)
              }
  
              if (plusLabelsSmartPosition !== null) {
                plusLabelsSmartPosition.setAttribute('visible', false)
              }
  
              // ring.removeAttribute('animation-mixer')
              ring.setAttribute('visible', true)
              ring.setAttribute('animation-mixer', 'clip: ringout; loop: once; clampWhenFinished: true;')
  
              orbs2011.setAttribute('visible', true)
              orbs2011.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
  
              orbs2013.setAttribute('visible', true)
              orbs2013.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
  
              orbs2015.setAttribute('visible', true)
              orbs2015.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
  
              orbs2018.setAttribute('visible', true)
              orbs2018.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
  
              orbs2020.setAttribute('visible', true)
              orbs2020.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
  
              const soundRingOutMusic = new window.Howl({
                src: [require('./assets/spawnin_v1.mp3')],
                volume: 0.3,
              })
              soundRingOutMusic.play()
  
              ring.addEventListener('animation-finished', () => {
                console.log('timeline scene done')
                machineBtn.setAttribute('class', 'cantap')
                presenterBtn.setAttribute('class', 'cantap')
                timelineBtn.setAttribute('class', 'cantap')
  
                orbs2011.setAttribute('class', 'cantap')
                orbs2013.setAttribute('class', 'cantap')
                orbs2015.setAttribute('class', 'cantap')
                orbs2018.setAttribute('class', 'cantap')
                orbs2020.setAttribute('class', 'cantap')
              })
            }
          }
  
          if (!timelineBtn.hasAttribute('hasEventListener')) {
            console.log('adding timeline event listener')
            timelineBtn.addEventListener('animation-finished', timelineAnimationFinished)
          }
        }
      }
  
      const presenterBtnClick = (e) => {
        if (machine !== null) {
          if (machine.hasAttribute('isAnimatingLabels')) {
            return
          }
        }
  
        if (!presenterBtn.hasAttribute('currentTab')) {
          console.log('presenter clicked')
          presenterBtn.setAttribute('currentTab', '')
          console.log(presenterBtn.hasAttribute('currentTab'))
          console.log(presenterBtn.hasAttribute('hasMoved'))
  
          machineBtn.removeAttribute('class', 'cantap')
          presenterBtn.removeAttribute('class', 'cantap')
          timelineBtn.removeAttribute('class', 'cantap')
  
          const plusLabels3DQuorum = scene.querySelector('#plusLabels3DQuorum')
          const plusLabelsClarity = scene.querySelector('#plusLabelsClarity')
          const pluslabelsFieldLights = scene.querySelector('#pluslabelsFieldLights')
          const plusLabelsIntelligent2D = scene.querySelector('#plusLabelsIntelligent2D')
          const plusLabelsSmartCurve = scene.querySelector('#plusLabelsSmartCurve')
          const plusLabelsSmartPosition = scene.querySelector('#plusLabelsSmartPosition')
  
          plusLabels3DQuorum.removeAttribute('class', 'cantap')
          plusLabelsClarity.removeAttribute('class', 'cantap')
          pluslabelsFieldLights.removeAttribute('class', 'cantap')
          plusLabelsIntelligent2D.removeAttribute('class', 'cantap')
          plusLabelsSmartCurve.removeAttribute('class', 'cantap')
          plusLabelsSmartPosition.removeAttribute('class', 'cantap')
  
          if (machineBtn.hasAttribute('currentTab')) {
            machineBtn.removeAttribute('currentTab')
            console.log('remove currentTab')
            machineBtn.setAttribute('animation-mixer', 'clip: unpress; loop: once; clampWhenFinished: true;')
          }
  
          if (timelineBtn.hasAttribute('currentTab')) {
            timelineBtn.removeAttribute('currentTab')
            console.log('remove currentTab')
            timelineBtn.setAttribute('animation-mixer', 'clip: unpress; loop: once; clampWhenFinished: true;')
          }
  
          if (!machineBtn.hasAttribute('hasMoved')) {
            machineBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            machineBtn.setAttribute('hasMoved', '')
          }
  
          if (!presenterBtn.hasAttribute('hasMoved')) {
            presenterBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            presenterBtn.setAttribute('hasMoved', '')
          } else {
            presenterBtn.setAttribute('animation-mixer', 'clip: btn_press; loop: once;')
          }
  
          if (!timelineBtn.hasAttribute('hasMoved')) {
            timelineBtn.setAttribute('animation-mixer', 'clip: btn_move; loop: once; clampWhenFinished: true;')
            timelineBtn.setAttribute('hasMoved', '')
          }
  
          const presenterAnimationFinished = () => {
            if (presenterBtn.hasAttribute('currentTab') && presenterBtn.hasAttribute('hasMoved')) {
              console.log('presenter event listener fired')
  
              let videoFirstLoad = false
  
              if (!presenterBtn.hasAttribute('firstLoad')) {
                presenterBtn.setAttribute('animation-mixer', 'clip: btn_press; loop: once;')
                presenterBtn.setAttribute('hasEventListener', '')
  
                machineBtn.setAttribute('firstLoad', '')
                presenterBtn.setAttribute('firstLoad', '')
                timelineBtn.setAttribute('firstLoad', '')
  
                videoFirstLoad = true
              }
  
              const ring = scene.querySelector('#ring')
              const orbs2011 = scene.querySelector('#orbs2011')
              const orbs2013 = scene.querySelector('#orbs2013')
              const orbs2015 = scene.querySelector('#orbs2015')
              const orbs2018 = scene.querySelector('#orbs2018')
              const orbs2020 = scene.querySelector('#orbs2020')
  
              if (ring !== null) {
                ring.setAttribute('animation-mixer', 'clip: ringin; loop: once; clampWhenFinished: true;')
                // ring.setAttribute('visible', false)
              }
  
              if (orbs2011 !== null) {
                orbs2011.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2011.removeAttribute('class', 'cantap')
                // orbs2011.setAttribute('visible', false)
              }
  
              if (orbs2013 !== null) {
                orbs2013.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2013.removeAttribute('class', 'cantap')
                // orbs2013.setAttribute('visible', false)
              }
  
              if (orbs2015 !== null) {
                orbs2015.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2015.removeAttribute('class', 'cantap')
                // orbs2015.setAttribute('visible', false)
              }
  
              if (orbs2018 !== null) {
                orbs2018.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2018.removeAttribute('class', 'cantap')
                // orbs2018.setAttribute('visible', false)
              }
  
              if (orbs2020 !== null) {
                orbs2020.setAttribute('animation-mixer', 'clip: disappear; loop: once; clampWhenFinished: true;')
                orbs2020.removeAttribute('class', 'cantap')
                // orbs2020.setAttribute('visible', false)
              }
  
              const timeline2011 = scene.querySelector('#timeline2011')
              const timeline2013 = scene.querySelector('#timeline2013')
              const timeline2015 = scene.querySelector('#timeline2015')
              const timeline2018 = scene.querySelector('#timeline2018')
              const timeline2020 = scene.querySelector('#timeline2020')
  
              if (timeline2011 !== null) {
                target.removeChild(timeline2011)
              }
  
              if (timeline2013 !== null) {
                target.removeChild(timeline2013)
              }
  
              if (timeline2015 !== null) {
                target.removeChild(timeline2015)
              }
  
              if (timeline2018 !== null) {
                target.removeChild(timeline2018)
              }
  
              if (timeline2020 !== null) {
                target.removeChild(timeline2020)
              }
  
              if (machine !== null) {
                machine.setAttribute('visible', false)
                machine.removeAttribute('animation-mixer')
              }
  
              if (plusLabels3DQuorum !== null) {
                plusLabels3DQuorum.setAttribute('visible', false)
              }
  
              if (plusLabelsClarity !== null) {
                plusLabelsClarity.setAttribute('visible', false)
              }
  
              if (pluslabelsFieldLights !== null) {
                pluslabelsFieldLights.setAttribute('visible', false)
              }
  
              if (plusLabelsIntelligent2D !== null) {
                plusLabelsIntelligent2D.setAttribute('visible', false)
              }
  
              if (plusLabelsSmartCurve !== null) {
                plusLabelsSmartCurve.setAttribute('visible', false)
              }
  
              if (plusLabelsSmartPosition !== null) {
                plusLabelsSmartPosition.setAttribute('visible', false)
              }
  
              if (videoFirstLoad === false) {
                machineBtn.setAttribute('visible', false)
                timelineBtn.setAttribute('visible', false)
                presenterBtn.setAttribute('visible', false)
  
                machineBtn.removeAttribute('animation-mixer')
                timelineBtn.removeAttribute('animation-mixer')
                presenterBtn.removeAttribute('animation-mixer')
  
                /**
                 * Handling of multiple device issues with iOS vs Android
                 * iPad video playback not supported
                 */
  
                console.log(AFRAME.utils.device)
                if (AFRAME.utils.device.isIOS()) {
                  console.log('IOS DEVICE DETECTED')
  
                  const videoEl = document.querySelector('#alpha-video')
                  videoEl.currentTime = 0
                  videoEl.pause()
  
                  const alphaVideo = document.createElement('xrextras-target-video-sound')
                  alphaVideo.id = 'alphaVideo'
                  alphaVideo.class = 'cantap'
                  alphaVideo.setAttribute('class', 'cantap')
                  alphaVideo.setAttribute('video', '#alpha-video')
                  alphaVideo.setAttribute('geometry', 'primitive: plane; height: 0.5; width: 0.395;')
                  alphaVideo.setAttribute('position', '0 0.1 0.05')
                  alphaVideo.setAttribute('scale', '0 0 0')
                  alphaVideo.setAttribute('material', 'shader: chromakey; src: #alpha-video; color: 0.1 0.9 0.2;')
  
                  platform.appendChild(alphaVideo)
  
                  setTimeout(() => {
                    alphaVideo.setAttribute('scale', '0.5 0.5 0.5')
                  }, 500)
  
                  const alphaVideoClick = () => {
                    console.log('IOS Video Thumbnail Clicked')
  
                    if (!alphaVideo.hasAttribute('isPlaying')) {
                      console.log('IOS Video Start Playing')
                      alphaVideo.setAttribute('isPlaying')
  
                      const soundHologramInMusic = new window.Howl({  // howl is the sound thingy
                        src: [require('./assets/spawnin_v1.mp3')],
                        volume: 0.3,
                      })
                      soundHologramInMusic.play()
  
                      setTimeout(() => {
                        videoEl.muted = false
  
                        // Stop video after x amount of seconds
                        setTimeout(() => {
                          const soundHologramOutMusic = new window.Howl({
                            src: [require('./assets/spawnout_v1.mp3')],
                            volume: 0.3,
                          })
                          soundHologramOutMusic.play()
  
                          setTimeout(() => {
                            machineBtn.setAttribute('visible', true)
                            timelineBtn.setAttribute('visible', true)
                            presenterBtn.setAttribute('visible', true)
  
                            console.log('presenter scene done')
                            machineBtn.setAttribute('class', 'cantap')
                            presenterBtn.setAttribute('class', 'cantap')
                            timelineBtn.setAttribute('class', 'cantap')
  
                            machineBtn.removeAttribute('firstLoad')
                            presenterBtn.removeAttribute('firstLoad')
                            timelineBtn.removeAttribute('firstLoad')
  
                            machineBtn.removeAttribute('hasMoved')
                            presenterBtn.removeAttribute('hasMoved')
                            timelineBtn.removeAttribute('hasMoved')
  
                            platform.removeChild(alphaVideo)
                            videoEl.pause()
                            videoEl.currentTime = 1.5
                            videoEl.muted = true
  
                            alphaVideo.removeAttribute('isPlaying')
  
                            presenterBtn.removeAttribute('currentTab')
                            console.log('remove currentTab')
                          }, 4000)
                        }, 92500)
                      }, 500)
                    }
                  }
  
                  alphaVideo.addEventListener('click', alphaVideoClick)
                } else {
                  console.log('NON IOS DEVICE DETECTED')
  
                  const soundHologramInMusic = new window.Howl({
                    src: [require('./assets/spawnin_v1.mp3')],
                    volume: 0.8,
                  })
                  soundHologramInMusic.play()
  
                  const videoEl = document.querySelector('#alpha-video')
                  videoEl.currentTime = 1.5
                  videoEl.pause()
  
                  /**
                   * Green Screen Concepts Here
                   */
  
                  const alphaVideo = document.createElement('a-entity')
                  alphaVideo.id = 'alphaVideo'
                  alphaVideo.setAttribute('material', 'shader: chromakey; src: #alpha-video; color: 0.1 0.9 0.2;')
                  alphaVideo.setAttribute('geometry', 'primitive: plane;')
                  alphaVideo.setAttribute('position', '0 0.15 0.05')
  
                  // Little hack to let the black box render first while scale is 0
                  // After a 1 second delay, set the scale back to normal and play the video
                  alphaVideo.setAttribute('scale', '0 0 0')
  
                  platform.appendChild(alphaVideo)
  
                  setTimeout(() => {
                    videoEl.muted = false
                    videoEl.play()
  
                    alphaVideo.setAttribute('scale', '0.35 0.35 0.35')
  
                    // Stop video after x amount of seconds
                    setTimeout(() => {
                      const soundHologramOutMusic = new window.Howl({
                        src: [require('./assets/spawnout_v1.mp3')],
                        volume: 0.8,
                      })
                      soundHologramOutMusic.play()
  
                      setTimeout(() => {
                        machineBtn.setAttribute('visible', true)
                        presenterBtn.setAttribute('visible', true)
                        timelineBtn.setAttribute('visible', true)
  
                        console.log('presenter scene done')
                        machineBtn.setAttribute('class', 'cantap')
                        presenterBtn.setAttribute('class', 'cantap')
                        timelineBtn.setAttribute('class', 'cantap')
  
                        machineBtn.removeAttribute('firstLoad')
                        presenterBtn.removeAttribute('firstLoad')
                        timelineBtn.removeAttribute('firstLoad')
  
                        machineBtn.removeAttribute('hasMoved')
                        presenterBtn.removeAttribute('hasMoved')
                        timelineBtn.removeAttribute('hasMoved')
  
                        platform.removeChild(alphaVideo)
                        videoEl.pause()
                        videoEl.currentTime = 1.5
                        videoEl.muted = true
  
                        presenterBtn.removeAttribute('currentTab')
                        console.log('remove currentTab')
                      }, 3250)
                    }, 91500)
                  }, 500)
                }
              }
            }
          }
  
          if (!presenterBtn.hasAttribute('hasEventListener')) {
            console.log('adding presenter event listener')
            presenterBtn.addEventListener('animation-finished', presenterAnimationFinished)
          }
        }
      }
  
      // This will add the event listeners once on load
      switch (this.el.id) {
        case 'machineBtn':
          machineBtn.addEventListener('click', machineBtnClick)
          break
  
        case 'timelineBtn':
          timelineBtn.addEventListener('click', timelineBtnClick)
          break
  
        case 'presenterBtn':
          presenterBtn.addEventListener('click', presenterBtnClick)
          break
  
        default:
          break
      }
    },
  }
  
  const wallFromFloorComponent = {
    schema: {
      placed: {default: false},
    },
    init() {
      this.raycaster = new THREE.Raycaster()
      this.camera = document.getElementById('camera')
      this.threeCamera = this.camera.getObject3D('camera')
      this.ground = document.getElementById('ground')
      const scene = this.el.sceneEl
  
      // const soundIdleMusic = new window.Howl({
      //   src: [require('./assets/Lighthearted_Orchestra.mp3')],
      //   volume: 0.4,
      //   loop: true,
      // })
      // soundIdleMusic.play()
  
      const placeTarget = () => {
        /* Invisble wall for world tracking */
        this.data.placed = true
        const wall = document.createElement('a-box')
        wall.id = 'wall'
        wall.setAttribute('material', {color: 'white', transparent: true, opacity: 0})
        wall.object3D.scale.set(100, 100, 0.25)
        wall.object3D.rotation.y = this.el.object3D.rotation.y
        wall.setAttribute('position', {
          x: this.el.object3D.position.x,
          y: this.el.object3D.position.y + 25,
          z: this.el.object3D.position.z + 25,
        })
        scene.appendChild(wall)
  
        /* Spawns the gate for user to align with shelf */
        const target = document.createElement('a-entity')
        target.id = 'target'
        target.class = 'cantap'
        target.setAttribute('place-on-wall', '')
        scene.appendChild(target)
  
        /**
         * Use cubemap-realtime to handle metals (shiny platform)
         * https://www.8thwall.com/8thwall/cubemap-aframe
         */
  
        const platform = document.createElement('a-entity')
        platform.id = 'platform'
        platform.setAttribute('gltf-model', '#platform-glb')
        platform.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
        platform.object3D.scale.set(72, 72, 72)
        platform.setAttribute('cubemap-realtime', '')
        scene.appendChild(platform)
  
        scene.removeEventListener('click', placeTarget)
  
        // wall placer removes itself from the scene
        this.el.parentNode.removeChild(this.el)
      }
  
      // click event handles the wall placement
      scene.addEventListener('click', placeTarget)
  
      // skip the first step so straight away gate
      placeTarget()
    },
  
    tick() {
      /* This will run continuously until floor is placed */
      if (!this.data.placed) {
        let pos = new THREE.Vector3(0, 0, 0)
        const a = new THREE.Vector2(0, -0.5)
  
        this.threeCamera = this.threeCamera || this.camera.getObject3D('camera')
  
        this.raycaster.setFromCamera(a, this.threeCamera)
        const intersects = this.raycaster.intersectObject(this.ground.object3D, true)
  
        if (intersects.length > 0) {
          pos = intersects[0].point
        }
  
        this.el.object3D.position.lerp(pos, 0.4)
        this.el.object3D.rotation.y = this.camera.object3D.rotation.y
  
        document.getElementById('instructions').style.display = 'none'
        document.getElementById('overlay').style.display = 'none'
      }
    },
  }
  
  const placeOnWallComponent = {
    schema: {
      placed: {default: false},
      spawned: {default: false},
    },
    init() {
      this.raycaster = new THREE.Raycaster()
      this.camera = document.getElementById('camera')
      this.threeCamera = this.camera.getObject3D('camera')
      this.wall = document.getElementById('wall')
      const scene = this.el.sceneEl
      const target = scene.querySelector('#target')
      const platform = scene.querySelector('#platform')
  
      const spriteTap = document.createElement('a-image')
      spriteTap.id = 'spriteTap'
      spriteTap.setAttribute('src', '#sprite-tap-img')
      spriteTap.setAttribute('spritesheet-animation', 'rows: 2; columns: 5; frameDuration: 0.125; loop: true;')
      spriteTap.setAttribute('position', '0 0.05 0.01')
      spriteTap.setAttribute('scale', '0.1 0.1 0.1')
      spriteTap.setAttribute('visible', true)
      platform.appendChild(spriteTap)
  
      const placeOnWall = () => {
        this.data.placed = true
        scene.removeEventListener('click', placeOnWall)
  
        target.setAttribute('scale', platform.getAttribute('scale'))
        target.setAttribute('rotation', platform.getAttribute('rotation'))
        target.setAttribute('position', platform.getAttribute('position'))
  
        document.getElementById('overlay').style.display = 'none'
        document.getElementById('instructions').style.display = 'none'
        // document.getElementById('float').classList.remove('float-top')
        // document.getElementById('float-text').classList.remove('float-text-top')
      }
  
      scene.addEventListener('click', placeOnWall)
    },
  
    /* This will run continuously until gate is placed */
    tick() {
      if (!this.data.placed) {
        const scene = this.el.sceneEl
        const platform = scene.querySelector('#platform')
        const spriteTap = scene.querySelector('#spriteTap')
  
        let pos = new THREE.Vector3(0, 0, 0)
        const a = new THREE.Vector2(0, 0)
  
        this.threeCamera = this.threeCamera || this.camera.getObject3D('camera')
  
        this.raycaster.setFromCamera(a, this.threeCamera)
        const intersects = this.raycaster.intersectObject(this.wall.object3D, true)
  
        if (intersects.length > 0) {
          const i = 0
          const intersect = intersects[i]
          pos = intersect.point
        }
  
        this.el.object3D.position.lerp(pos, 0.4)
        this.el.object3D.rotation.y = this.wall.object3D.rotation.y
  
        platform.object3D.position.lerp(pos, 0.4)
        platform.object3D.rotation.y = this.camera.object3D.rotation.y
  
        document.getElementById('overlay').style.display = 'flex'
        document.getElementById('instructions').style.display = 'block'
        document.getElementById('float').classList.add('float-top')
        document.getElementById('float-text').classList.add('float-text-top')
  
        spriteTap.setAttribute('visible', true)
      } else if (!this.data.spawned) {
        /* Display all the 3d objects here */
        const scene = this.el.sceneEl
        const target = scene.querySelector('#target')
        const platform = scene.querySelector('#platform')
        const spriteTap = scene.querySelector('#spriteTap')
  
        // platform.removeAttribute('xrextras-pinch-scale')
  
        platform.setAttribute('animation-mixer', 'clip: transform; loop: once; clampWhenFinished: true;')
  
        const soundPlatformMusic = new window.Howl({
          src: [require('./assets/transform_v1.mp3')],
          volume: 0.8,
        })
        soundPlatformMusic.play()
  
        // Pre load upcoming models if not there will be a delay later
        const machine = document.createElement('a-entity')
        machine.id = 'machine'
        machine.setAttribute('gltf-model', '#machine-glb')
        machine.setAttribute('position', '0 0 0')
        machine.setAttribute('scale', '1 1 1')
        machine.setAttribute('rotation', '0 -45 0')
        machine.setAttribute('visible', false)
        target.appendChild(machine)
  
        const machineBtn = document.createElement('a-entity')
        machineBtn.id = 'machineBtn'
        machineBtn.class = 'cantap'
        machineBtn.setAttribute('class', 'cantap')
        machineBtn.setAttribute('click-tab-component', '')
        machineBtn.setAttribute('gltf-model', '#machine-btn-glb')
        machineBtn.setAttribute('position', '0 0 0.05')
        machineBtn.setAttribute('scale', '1 1 1')
        machineBtn.setAttribute('visible', false)
        target.appendChild(machineBtn)
  
        const timelineBtn = document.createElement('a-entity')
        timelineBtn.id = 'timelineBtn'
        timelineBtn.class = 'cantap'
        timelineBtn.setAttribute('class', 'cantap')
        timelineBtn.setAttribute('click-tab-component', '')
        timelineBtn.setAttribute('gltf-model', '#timeline-btn-glb')
        timelineBtn.setAttribute('position', '0 0 0.05')
        timelineBtn.setAttribute('scale', '1 1 1')
        timelineBtn.setAttribute('visible', false)
        target.appendChild(timelineBtn)
  
        const presenterBtn = document.createElement('a-entity')
        presenterBtn.id = 'presenterBtn'
        presenterBtn.class = 'cantap'
        presenterBtn.setAttribute('class', 'cantap')
        presenterBtn.setAttribute('click-tab-component', '')
        presenterBtn.setAttribute('gltf-model', '#presenter-btn-glb')
        presenterBtn.setAttribute('position', '0 0 0.05')
        presenterBtn.setAttribute('scale', '1 1 1')
        presenterBtn.setAttribute('visible', false)
        target.appendChild(presenterBtn)
  
        /**
         * Fog Particle Concepts Here
         */
  
        const fogParticles = document.createElement('a-entity')
        fogParticles.id = 'fogParticles'
        fogParticles.setAttribute('scale', '1 1 1')
        fogParticles.setAttribute('position', '0 -0.1 -0.01')
        fogParticles.setAttribute('rotation', '0 0 0')
        fogParticles.setAttribute('spe-particles', {
          velocity: {x: 0, y: -0.01, z: 0.01},
          velocitySpread: {x: 0, y: 0.01, z: 0.05},
          particleCount: 10000,
          maxAge: 15,
          maxAgeSpread: 10,
          size: [75],
          opacity: [0, 1, 0],
          positionSpread: {x: 0.8, y: 0.001, z: 0.1},
          hasPerspective: true,
          rotationStatic: true,
          activeMultiplier: 1,
          relative: 'local',
          texture: require('./assets/fog.png'),
        })
        target.appendChild(fogParticles)
  
        spriteTap.setAttribute('visible', false)
  
        platform.addEventListener('animation-finished', () => {
          platform.setAttribute('animation-mixer', 'clip: loop; loop: once; clampWhenFinished: true;')
  
          platform.addEventListener('animation-finished', () => {
            platform.setAttribute('animation-mixer', 'clip: loop2; loop: once; clampWhenFinished: true;')
          }, {once: true})
  
          const ring = document.createElement('a-entity')
          ring.id = 'ring'
          ring.setAttribute('gltf-model', '#ring-glb')
          ring.setAttribute('position', '0 0 0.05')
          ring.setAttribute('scale', '0.7 0.7 0.7')
          ring.setAttribute('visible', false)
          target.appendChild(ring)
  
          const orbs2011 = document.createElement('a-entity')
          orbs2011.id = 'orbs2011'
          orbs2011.setAttribute('timeline-orbs-component', '')
          orbs2011.setAttribute('gltf-model', '#orbs-2011-glb')
          orbs2011.setAttribute('position', '0 0 0.05')
          orbs2011.setAttribute('scale', '0.7 0.7 0.7')
          orbs2011.setAttribute('visible', false)
          target.appendChild(orbs2011)
  
          const orbs2013 = document.createElement('a-entity')
          orbs2013.id = 'orbs2013'
          orbs2013.setAttribute('timeline-orbs-component', '')
          orbs2013.setAttribute('gltf-model', '#orbs-2013-glb')
          orbs2013.setAttribute('position', '0 0 0.05')
          orbs2013.setAttribute('scale', '0.7 0.7 0.7')
          orbs2013.setAttribute('visible', false)
          target.appendChild(orbs2013)
  
          const orbs2015 = document.createElement('a-entity')
          orbs2015.id = 'orbs2015'
          orbs2015.setAttribute('timeline-orbs-component', '')
          orbs2015.setAttribute('gltf-model', '#orbs-2015-glb')
          orbs2015.setAttribute('position', '0 0 0.05')
          orbs2015.setAttribute('scale', '0.7 0.7 0.7')
          orbs2015.setAttribute('visible', false)
          target.appendChild(orbs2015)
  
          const orbs2018 = document.createElement('a-entity')
          orbs2018.id = 'orbs2018'
          orbs2018.setAttribute('timeline-orbs-component', '')
          orbs2018.setAttribute('gltf-model', '#orbs-2018-glb')
          orbs2018.setAttribute('position', '0 0 0.05')
          orbs2018.setAttribute('scale', '0.7 0.7 0.7')
          orbs2018.setAttribute('visible', false)
          target.appendChild(orbs2018)
  
          const orbs2020 = document.createElement('a-entity')
          orbs2020.id = 'orbs2020'
          orbs2020.setAttribute('timeline-orbs-component', '')
          orbs2020.setAttribute('gltf-model', '#orbs-2020-glb')
          orbs2020.setAttribute('position', '0 0 0.05')
          orbs2020.setAttribute('scale', '0.7 0.7 0.7')
          orbs2020.setAttribute('visible', false)
          target.appendChild(orbs2020)
  
          const labels3DQuorum = document.createElement('a-entity')
          labels3DQuorum.id = 'labels3DQuorum'
          labels3DQuorum.setAttribute('gltf-model', '#3D-quorum-glb')
          labels3DQuorum.setAttribute('position', '0 0 0.05')
          labels3DQuorum.setAttribute('scale', '1 1 1')
          labels3DQuorum.setAttribute('visible', false)
          target.appendChild(labels3DQuorum)
  
          const labelsClarity = document.createElement('a-entity')
          labelsClarity.id = 'labelsClarity'
          labelsClarity.setAttribute('gltf-model', '#clarity-glb')
          labelsClarity.setAttribute('position', '0 0 0.05')
          labelsClarity.setAttribute('scale', '1 1 1')
          labelsClarity.setAttribute('visible', false)
          target.appendChild(labelsClarity)
  
          const labelsFieldLights = document.createElement('a-entity')
          labelsFieldLights.id = 'labelsFieldLights'
          labelsFieldLights.setAttribute('gltf-model', '#field-lights-glb')
          labelsFieldLights.setAttribute('position', '0 0 0.05')
          labelsFieldLights.setAttribute('scale', '1 1 1')
          labelsFieldLights.setAttribute('visible', false)
          target.appendChild(labelsFieldLights)
  
          const labelsIntelligent2D = document.createElement('a-entity')
          labelsIntelligent2D.id = 'labelsIntelligent2D'
          labelsIntelligent2D.setAttribute('gltf-model', '#intelligent-2D-glb')
          labelsIntelligent2D.setAttribute('position', '0 0 0.05')
          labelsIntelligent2D.setAttribute('scale', '1 1 1')
          labelsIntelligent2D.setAttribute('visible', false)
          target.appendChild(labelsIntelligent2D)
  
          const labelsSmartCurve = document.createElement('a-entity')
          labelsSmartCurve.id = 'labelsSmartCurve'
          labelsSmartCurve.setAttribute('gltf-model', '#smart-curve-glb')
          labelsSmartCurve.setAttribute('position', '0 0 0.05')
          labelsSmartCurve.setAttribute('scale', '1 1 1')
          labelsSmartCurve.setAttribute('visible', false)
          target.appendChild(labelsSmartCurve)
  
          const labelsSmartPosition = document.createElement('a-entity')
          labelsSmartPosition.id = 'labelsSmartPosition'
          labelsSmartPosition.setAttribute('gltf-model', '#smart-position-glb')
          labelsSmartPosition.setAttribute('position', '0 0 0.05')
          labelsSmartPosition.setAttribute('scale', '1 1 1')
          labelsSmartPosition.setAttribute('visible', false)
          target.appendChild(labelsSmartPosition)
  
          const plusLabels3DQuorum = document.createElement('a-entity')
          plusLabels3DQuorum.id = 'plusLabels3DQuorum'
          plusLabels3DQuorum.setAttribute('machine-labels-component', '')
          plusLabels3DQuorum.setAttribute('gltf-model', '#plus-3D-quorum-glb')
          plusLabels3DQuorum.setAttribute('position', '0 0 0.05')
          plusLabels3DQuorum.setAttribute('scale', '1 1 1')
          plusLabels3DQuorum.setAttribute('visible', false)
          target.appendChild(plusLabels3DQuorum)
  
          const plusLabelsClarity = document.createElement('a-entity')
          plusLabelsClarity.id = 'plusLabelsClarity'
          plusLabelsClarity.setAttribute('machine-labels-component', '')
          plusLabelsClarity.setAttribute('gltf-model', '#plus-clarity-glb')
          plusLabelsClarity.setAttribute('position', '0 0 0.05')
          plusLabelsClarity.setAttribute('scale', '1 1 1')
          plusLabelsClarity.setAttribute('visible', false)
          target.appendChild(plusLabelsClarity)
  
          const pluslabelsFieldLights = document.createElement('a-entity')
          pluslabelsFieldLights.id = 'pluslabelsFieldLights'
          pluslabelsFieldLights.setAttribute('machine-labels-component', '')
          pluslabelsFieldLights.setAttribute('gltf-model', '#plus-field-lights-glb')
          pluslabelsFieldLights.setAttribute('position', '0 0 0.05')
          pluslabelsFieldLights.setAttribute('scale', '1 1 1')
          pluslabelsFieldLights.setAttribute('visible', false)
          target.appendChild(pluslabelsFieldLights)
  
          const plusLabelsIntelligent2D = document.createElement('a-entity')
          plusLabelsIntelligent2D.id = 'plusLabelsIntelligent2D'
          plusLabelsIntelligent2D.setAttribute('machine-labels-component', '')
          plusLabelsIntelligent2D.setAttribute('gltf-model', '#plus-intelligent-2D-glb')
          plusLabelsIntelligent2D.setAttribute('position', '0 0 0.05')
          plusLabelsIntelligent2D.setAttribute('scale', '1 1 1')
          plusLabelsIntelligent2D.setAttribute('visible', false)
          target.appendChild(plusLabelsIntelligent2D)
  
          const plusLabelsSmartCurve = document.createElement('a-entity')
          plusLabelsSmartCurve.id = 'plusLabelsSmartCurve'
          plusLabelsSmartCurve.setAttribute('machine-labels-component', '')
          plusLabelsSmartCurve.setAttribute('gltf-model', '#plus-smart-curve-glb')
          plusLabelsSmartCurve.setAttribute('position', '0 0 0.05')
          plusLabelsSmartCurve.setAttribute('scale', '1 1 1')
          plusLabelsSmartCurve.setAttribute('visible', false)
          target.appendChild(plusLabelsSmartCurve)
  
          const plusLabelsSmartPosition = document.createElement('a-entity')
          plusLabelsSmartPosition.id = 'plusLabelsSmartPosition'
          plusLabelsSmartPosition.setAttribute('machine-labels-component', '')
          plusLabelsSmartPosition.setAttribute('gltf-model', '#plus-smart-position-glb')
          plusLabelsSmartPosition.setAttribute('position', '0 0 0.05')
          plusLabelsSmartPosition.setAttribute('scale', '1 1 1')
          plusLabelsSmartPosition.setAttribute('visible', false)
          target.appendChild(plusLabelsSmartPosition)
  
          machineBtn.setAttribute('visible', true)
          timelineBtn.setAttribute('visible', true)
          presenterBtn.setAttribute('visible', true)
  
          machineBtn.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
          timelineBtn.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
          presenterBtn.setAttribute('animation-mixer', 'clip: appear; loop: once; clampWhenFinished: true;')
        }, {once: true})
  
        this.data.spawned = true
      }
    },
  }
  
  export {clickTabComponent, placeOnWallComponent, wallFromFloorComponent, machineLabelsComponent, timelineOrbsComponent}