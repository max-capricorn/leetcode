// dom：{tag:'', attr:[],children:[]}）

class Dom {
  static createElement (options) {
    return new Dom(options)
  }
  constructor (options) {
    this.options = options;
    this.tag = this.options.tag;
    this.attr = this.options.attr;
    this.children = this.options.children;
  }
  render () {
    const ele = document.createElement(this.tag);
    for (const key in this.attr) {
      ele.setAttribute(key, this.attr[key])
    }
    this.children.forEach(child => {
      const element = child instanceof Dom ? child.render() : document.createTextNode(child)
      ele.appendChild(element)
    })
    return ele
  }
}

const child = Dom.createElement({
  tag: 'div',
  attr: 
    {class: 'div', asc: 1}
  ,
  children: ['child']
})

const parent = Dom.createElement({
  tag: 'div',
  attr: {
    class: 'parent'
  },
  children: [child]
})


document.body.appendChild(parent.render())

