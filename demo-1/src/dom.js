window.dom = {
    style(node,name,value){
        if(arguments.length === 3){     //dom.style(div,'color','red')
            node.style[name] = value;
        }else if(arguments.length === 2) {   
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){           //dom.style(div,{color:'red'})
                const Object = name       
                for(let key in Object){
                            node.style[key] = Object[key]
                        }
            }
        }    
    },
    find(selector,scope){
        return (scope||document).querySelectorAll(selector)
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
}
