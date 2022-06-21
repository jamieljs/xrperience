const Manager = {
    init() {
      this.idx = 0
      this.n = 3
      this.cnt = []
    },
    incre(x) {
      this.idx += x
      this.idx %= this.n
      if (this.idx < 0) {
        this.idx += this.n
      }
    },,
    add() {
      this.cnt[this.idx]++
    },
    remove() {
      this.cnt[this.idx]--
    },
  }
  
  export {Manager}