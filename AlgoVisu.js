const root = ReactDOM.createRoot(
    document.getElementById('root')
)

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let str = 'class BubbleSort {\n\tpublic void bubbleSort(int arr[]){\n\t\tint n = arr.length;\n\t\tfor (int i = 0; i < n - 1; i++)\n\t\t\tfor (int j = 0; j < n - i - 1; j++)\n\t\t\t\tif (arr[j] > arr[j + 1]) {\n\t\t\t\tint temp = arr[j];\n\t\t\t\tarr[j] = arr[j + 1];\n\t\t\t\tarr[j + 1] = temp;\n}}}'

class Code extends React.Component {
    constructor(props) {
        console.log("CLICKED HIDDEN ELEMENT")
        super(props)
    }

    render() {

        return (
            <div className="div1" style={{display:this.props.view }}>
                <nav style={styles.nav1}><h3>Bubble Sort</h3></nav>
                <textarea readonly="true" style={styles.textarea1}>
                    {str}
                </textarea>
            </div>

        )

    }
}

const styles={
    h3a:{
        marginTop:'0.3cm',
        position: 'absolute',
        marginLeft:'2cm'
    },
    h4a:{
        marginTop:'0.2cm',
        position: 'absolute',
        marginLeft: '29cm'
    },
    array_contain:{
        marginLeft:' 0.5cm',
        position: 'absolute',
        left:'10px'
    },
    button:{
        fontWeight: 'bold',
        marginTop:'0.4cm',
        marginLeft: '9cm',
        position:'absolute'
    },
    button1:{
        fontWeight: 'bold',
        marginLeft: '12cm',
        marginTop:'0.4cm',
        position:'absolute'
    },
    button2:{
        fontWeight:'bold',
        marginLeft: '15cm',
        marginTop:'0.4cm',
        position:'absolute'
    },
    button3:{
        fontWeight: 'bold',
        marginLeft: '18cm',
        marginTop:'0.4cm',
        position:'absolute'
    },
    button4:{
        fontWeight: 'bold',
        marginLeft: '21cm',
        marginTop:'0.4cm',
        position:'absolute'
    },
    button5:{
        fontWeight:'bold',
        marginLeft:'24cm',
        marginTop:'0.4cm',
        position:'absolute'
    },
    button6:{
        fontWeight:'bold',
        marginLeft:'26cm',
        marginTop:'0.4cm',
        position:'absolute'
    },
    array_bar:{
        width:'2.25px',
        backgroundColor: 'turquoise',
        display: 'inline-block',
        margin:'0.8px'
    },
    navBar:{
        display:'block',
        marginTop:'0.1cm',
        color: 'aliceblue',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontStyle: 'oblique',
        backgroundColor: 'navy',
        height: '1.5cm',
        width: '40cm'
    },
    bardiv:{
        marginTop:'1cm',
        height:'17cm',
        marginRight:'0.7cm',
        position:'absolute',
        display:'block'
    },

    div1:{
        position: 'absolute',
        backgroundColor: 'white',
        marginLeft:'1cm',
        width:'17cm',
        height: '12cm',
        borderRadius:'45px'
    },
    nav1:{
        aligItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        width:'16.2cm',
        height:'1cm',
        fontFamily:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color:'white'
    },
    textarea1: {
        fontSize: '16px',
        resize: 'none',
        width:'16cm',
        height: '10cm',
        color:'blue',
        borderColor: 'white',
        marginLeft:'0.3cm'
    },
    forceStop:{
        position:'absolute',
        marginTop:'0cm',
        boxShadow: '2px 2px black',
        cursor: 'pointer',
        width:'4cm',
        height: '1cm',
        backgroundColor: 'red',
        color: 'white'
    },
    range:{
        marginLeft:'30cm',
        marginTop:'0.9cm'
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            range: 100,
            width: 1,
            view: 'none',
            force:false
        }
    }

    createArray = () => {
        const arr = []
        for (let i = 0; i < this.state.range; i++) {
            arr.push(
                getRandomArbitrary(0, 600) | 0
            )
        }
        this.setState(
            {
                arr
            }
        )
    }


    componentDidMount() {
        console.log("Creating Array On Loading")
        this.createArray()
    }

    bblSort = (arr) => {
        const animations = []
        let c = 0
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < (arr.length - i - 1); j++) {
                const animation = {}
                if (arr[j] > arr[j + 1]) {
                    animation.compare = [j, j + 1]
                    animation.swap = [j, j + 1]
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    c++;
                    animations.push(animation);
                }
            }
        }
        console.log('HELLO ' + c + " iterations");
        // const arr1 = []
        // const map = {}
        // map.firstName = [1, 2];
        // map.lastName = [1, 200];
        // map.age = 20
        // // for(var i=0;i<map.length;i++){
        // //     console.log('ith object is '+animations[i])
        // // }
        // arr1.push(map)
        // console.log(arr1)
        // console.log('0th element ' + arr1[0].firstName + ' and size is ' + arr1.length)
        // console.log(' 0th element in animations is '+animations[1].compare)
        return (
            animations
        )
    }

    testAlgo = () => {
        okay=true
        console.log("IT's Selected or not: " + this.state.run);
        console.log("IT's Selected or not: " + this.state.run);
        const animations = this.bblSort(this.state.arr);
        const newAnimations = [];
        console.log('Animations length ' + animations.length)
        for (const animie of animations) {
            newAnimations.push(animie.compare);
            newAnimations.push(animie.compare);
            newAnimations.push(animie.swap);
        }
        for (let i = 0; i < newAnimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array_bar');
            const colorchange = (i % 3) !== 2;
            if (colorchange) {
                const [barOneIdx, barTwoIdx] = newAnimations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i % 3) === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    console.log(color)
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if (color === 'red') {
                        setTimeout(() => {
                            const [barOneIdx, barTwoIdx] = newAnimations[i];
                            var h1 = arrayBars[barOneIdx].style.height
                            var h2 = arrayBars[barTwoIdx].style.height
                            arrayBars[barOneIdx].style.height = h2;
                            arrayBars[barTwoIdx].style.height = h1;
                        }, 1);
                    }
                }, i * 10);
            }
        }
        okay=false
        /*   const { compare, swap } = animations[i];
           console.log("ith element is " + animations[i].compare)
           setTimeout(() => {
               const arrayBars = document.getElementsByClassName('array_bar');
               arrayBars[compare[1]].style.backgroundColor = 'red';
               arrayBars[compare[0]].style.backgroundColor = 'red';
               var h1 = arrayBars[compare[1]].style.height
               var h2 = arrayBars[compare[0]].style.height
               arrayBars[compare[1]].style.height = h2;
               arrayBars[compare[0]].style.height = h1;
               setTimeout(() => {
                   arrayBars[compare[1]].style.backgroundColor = 'torquoise'
                   arrayBars[compare[0]].style.backgroundColor = 'torquoise'
               }, (i + 1) * 10);
 
           }, i * 10);*/
    }

    rangeChange = (event) => {
        if(okay){
            console.log('Clicked wrongly')
            this.clickForce
        }
        this.setState(
            {
                range: event.target.value
            }
        )
        this.createArray()
    }

    create = () => {
        console.log("On Loading......")
    }

    viewCode = () => {
        this.setState(
            {
                view: "block"
            }
        )
        console.log(this.state.view)
    }

    closeCode=()=>{
        this.setState(
            {
                view:"none"
            }
        )
    }

    clickForce=()=>{
        console.log('Force stop setting none')
        this.setState({
            force:true
        })
        window.location.reload();
    }

    render() {
        const { arr } = this.state
        return (
            <div style={styles.array_contain}>
                <div style={styles.navBar}>
                    <h3 style={styles.h3a}>Sorting Algorithm Visualiser</h3>
                    <button onClick={this.createArray} style={styles.button}>CREATE</button>
                    <button onClick={this.testAlgo} style={styles.button1}>Bubble Sort</button>
                    <button style={styles.button2}>Quick Sort</button>
                    <button style={styles.button3}>Merge Sort</button>
                    <button style={styles.button4}>Heap Sort</button>
                    <button style={styles.button5} onClick={this.viewCode}>CODE</button>
                    <button style={styles.button6} onClick={this.closeCode}>CLOSE</button>
                    <h4 style={styles.h4a}>Choose the range of values({this.state.range})</h4><input type="range" min="100" max="400" style={styles.range} onChange={this.rangeChange} />
                </div>
                <button style={styles.forceStop} onClick={this.clickForce}>FORCE STOP</button>
                <div style={styles.bardiv} onLoad={this.createArray}>
                    <Code view={this.state.view} />
                    {
                        arr.map((value, i) => (
                            <div className="array_bar"
                                key={i}
                                style={{ height: `${value}px` }}
                            ></div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
let okay=false
root.render(
    <App />
)