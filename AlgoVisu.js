const root = ReactDOM.createRoot(
    document.getElementById('root')
)


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
let n = 1000;





//var arr = [234, 43, 55, 63, 5, 6, 235, 547];

//bblSort(arr);
// function bblSort(arr){

//     for(var i = 0; i < arr.length; i++){

//       // Last i elements are already in place 
//       for(var j = 0; j < ( arr.length - i -1 ); j++){

//         // Checking if the item at present iteration
//         // is greater than the next iteration
//         if(arr[j] > arr[j+1]){

//           // If the condition is true then swap them
//           var temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j+1] = temp
//         }
//       }
//     }
//     // Print the sorted array
//     console.log(arr);
//    }


//    // This is our unsorted array
//    var arr = [234, 43, 55, 63,  5, 6, 235, 547];


//    // Now pass this array to the bblSort() function
//    bblSort(arr);

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: []
        }
    }

    createArray = () => {
        const arr = []
        for (let i = 0; i < 360; i++) {
            arr.push(
                getRandomArbitrary(0, 700) | 0
            )
        }
        this.setState(
            {
                arr
            }
        )
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
        // console.log('newAnimations length ' + newAnimations.length)
        // console.log(newAnimations);
        //for (let i = 0; i < 1000; i++) {
        //   console.log('NO ' + animations[i].compare + ' and ' + animations[i].swap);
        // }
        // const arrayBars = document.getElementsByClassName('array_bar');
        // arrayBars[10].style.backgroundColor = 'red';
        // arrayBars[200].style.backgroundColor = 'red';
        // var h1=arrayBars[10].style.height
        // var h2=arrayBars[200].style.height
        // console.log(h1+' and '+h2)
        // arrayBars[10].style.height = h2;
        // arrayBars[200].style.height = h1;

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
                            //barTwoStyle.backgroundColor = 'violet';
                        }, 1);
                    }
                }, i*3);
            }
        }
        // for (let i = 0; i < animations.length; i++) {
        //     console.log(i)
        //     setTimeout(() => {
        //         const { compare, swap } = animations[i];
        //         const arrayBars = document.getElementsByClassName('array_bar');
        //         arrayBars[compare[0]].style.backgroundColor = 'violet';
        //         arrayBars[compare[1]].style.backgroundColor = 'violet';
        //     }, i*4
        //     )
        // }
        // else {
        //     setTimeout(() => {
        //         const [barOneIdx, barTwoIdx] = newAnimations[i];
        //         var h1 = arrayBars[barOneIdx].style.height
        //         var h2 = arrayBars[barTwoIdx].style.height
        //         arrayBars[barOneIdx].style.height = h1;
        //         arrayBars[barTwoIdx].style.height = h2;
        //     }, i * 10);
        // }
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

    createClick = () => {

    }

    render() {
        const { arr } = this.state
        return (
            <div className="array_contain">
                <button onClick={this.createArray} className="button">CREATE</button>
                <button onClick={this.testAlgo} className="button1">Bubble Sort</button>
                <button onClick={this.testAlgo} className="button2">Quick Sort</button>
                <button onClick={this.testAlgo} className="button3">Merge Sort</button>
                <button onClick={this.testAlgo} className="button4">Heap Sort</button>
                {
                    arr.map((value, i) => (
                        <div className="array_bar"
                            key={i}
                            style={{ height: `${value}px` }}></div>
                    ))
                }
            </div>
        )
    }
}
root.render(
    <App />
)