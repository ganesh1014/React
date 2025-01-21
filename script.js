// const root=document.getElementById('root');

// const header=document.createElement('h1');
// header.innerHTML='Hello coder army';
// header.style.backgroundColor='blue';
// header.style.color='white';
// root.append(header)

// const header2=document.createElement('h1');
// header2.innerHTML='kaise ho aap sab';
// header2.style.backgroundColor='black';
// header2.style.color='white';
// root.append(header2);

const React={                                      // React : Object
    createElement:function(tag, children){
        const element=document.createElement(tag);
        element.innerHTML=children;
        return element;
    }
};

const ReactDOM={                                    // ReactDOM : Object
    render:function(element, root){
        root.append(element)
    }
}

const header=React.createElement('h1',"Hello")
const header2=React.createElement('h1',"kaise ho aap sab")

ReactDOM.render(header,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));

