const root = ReactDOM.createRoot(
    document.getElementById('root')
)
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            n: 4,
            arr: []
        }
    }
    changeRange = (event) => {
        this.setState(
            {
                n: event.target.value
            }
        )
        const arr1 = []   
        let str = ['white', 'black']
        let j = 0
        for (let i = 0; i < (event.target.value * event.target.value); i++) {
            console.log(i + "----" + str)
            let element = <div style={{ margin:0,backgroundColor: j % 2 == 0 ? str[0] : str[1], width: '2.5cm', height: '2.5cm', display: 'inline-block' }}></div>
            arr1.push(
                element
            )
            if ((i + 1) % event.target.value == 0) {
                console.log(i + "------>" + str)
                var s = str[0]
                str[0] = str[1]
                str[1] = s
                console.log(i + "------>" + str)
                if (event.target.value % 2 != 0) {
                    j++;
                }
            }
            j++;
        }
        this.setState(
            {
                arr: arr1
            }
        )
    }
    ComponentDidMount = () => {
        
    }
    render() {
        return (
            <header>
                <div style={{marginLeft:'5cm',width:'30cm',height:'3cm',backgroundColor:'red'}}><img src="queen.webp" style={{height:'3cm',backgroundColor:'white'}} /><h1 className="qn">N QUEENS(Place N queens in NxN grid)</h1>
                <h1 style={{marginLeft:'24cm',marginTop:'0cm'}}>{this.state.n}</h1><input type="range" min="1" max="15" onChange={this.changeRange} style={{marginLeft:'24cm',marginTop:'0.1cm'}}/></div>
                
                <div style={{ marginLeft: '1cm',marginTop:'0.5cm', width: `${this.state.n * 2.5}cm`, height: `${this.state.n * 2.5}cm`, display: 'block' }}>
                    {this.state.arr}
                </div>

            </header>
        )
    }
}
root.render(
    <Board />
)