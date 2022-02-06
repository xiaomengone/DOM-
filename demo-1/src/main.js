const div = dom.create("<div>newDiv</div>");
 const nodes =dom.empty(window.empty);
dom.attr(test,'title','Hi,I am Frank');
dom.text(test,'你好，这是新的内容');
dom.style(test,{border:'1px solid red',color:'black'})

dom.class.add(test,'red')
console.log(dom.class.has(test,'red'));

const fn =()=>{
    console.log('点击了');
}
dom.off(test,'click',fn)
const testDiv = dom.find('#test')[0]
console.log(testDiv);
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red',test2));

console.log(dom.parent(test));

console.log(dom.siblings(dom.find('#s2')[0]))

console.log(dom.previous(s2));

const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))

console.log(dom.index(s2));






