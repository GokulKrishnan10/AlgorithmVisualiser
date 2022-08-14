const root = ReactDOM.createRoot(
    document.getElementById('root')
)

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            range: 100,
            width: 1,
            run: false,
            point: "all"
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

    bblSort = function (arr) {
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

    render() {
        const { arr } = this.state
        return (
            <div className="array_contain">
                <div className="navBar">
                    <h3>Sorting Algorithm Visualiser</h3>
                    <button onClick={this.createArray} className="button">CREATE</button>
                    <button onClick={this.testAlgo} className="button1">Bubble Sort</button>
                    <button onClick={this.testAlgo} className="button2">Quick Sort</button>
                    <button onClick={this.testAlgo} className="button3">Merge Sort</button>
                    <button onClick={this.testAlgo} className="button4">Heap Sort</button>
                    <h4>Choose the range of values({this.state.range})</h4><input type="range" min="0" max="800" className="range" onChange={this.rangeChange} />
                </div>
                <div className="bardiv" onLoad={this.createArray}>
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
root.render(
    <App />
)