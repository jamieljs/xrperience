const Manager = {
  init() {
    this.idx = 0
    this.n = 3
    this.cnt = []
    for (let i = 0; i < this.n; i++) {
      this.cnt[i] = 0
    }
    this.name = ['Chicken Rice', 'Wanton Mee', 'Laksa']
    this.nutri = [
      'Calories: 572\nCarbohydrate: 21g\nFat: 19g\nProtein: 25g',
      'Calories: 636\nCarbohydrate: 91g\nFat: 19g\nProtein: 26g',
      'Calories: 587\nCarbohydrate: 58g\nFat: 32g\nProtein: 16g'
      ]
    this.info = [
      'Chicken\nRice\nCucumber\nChilli',
      'Egg Noodles (!)\nChar Siew\nShrimp (!)\n Cai Xin',
      'Vermicelli Rice Noodle\nPrawns (!)\nShrimp Paste (!)\nEgg (!)'
      ]
    this.price = [3.70, 3.50, 2.80]
    this.displayimages = false
  },
  incre(x) {
    this.idx += x
    this.idx %= this.n
    if (this.idx < 0) {
      this.idx += this.n
    }
  },
  add() {
    this.cnt[this.idx]++
  },
  remove() {
    if (this.cnt[this.idx] > 0) {
      this.cnt[this.idx]--
    }
  },
  getItems() {
    var arr = []
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.cnt[i]; j++) {
        arr.push(i)
      }
    }
    return arr
  },
  getCost() {
    var totalcost = 0.0
    for (let i = 0; i < this.n; i++){
      totalcost += this.price[i] * this.cnt[i]
    }
    return totalcost.toFixed(2)
  }
}

export {Manager}