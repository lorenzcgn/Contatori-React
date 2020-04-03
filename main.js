class AppHeader extends React.Component {
    render() {
        console.log(this.props);
        const{titolo}=this.props;
        return <h3>{titolo}</h3>;
    }
}

class SingleCounter extends React.Component {
    constructor() {
        super()

        this.state = {
            counter:0
        };
    }

        increment() {
            this.setState({
                counter: this.state.counter + 1
            });
        }

        render() {
            const{counter}=this.state;
            return (

        
                <div>
                <br></br>
                    <button class="button btn blacck center" onClick={event => this.increment()}>Aumenta il contatore 1</button>
                        <div>
                            
                            
                            <span>Il contatore 1: </span>
                            <span class="btn blacck center">{counter}</span>
                        </div>
                </div>
            );
        }
    }


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        };
    }

    increment() {
        this.setState( {
            counter: this.state.counter + 1
        });
    }

    render() {
        //const titolo = this.props.titolo;
        const{titolo, welcome}=this.props;
        const{counter} = this.state;

        return (
            <div>
                <AppHeader titolo={titolo} />
                <p>{welcome}</p>
                <SingleCounter />
                <ButtonCounter counter={counter} onIncrement={(event) => this.increment()} />
                <ButtonCounter counter={counter} onIncrement={(event) => this.increment()} />
            </div>
        );
    }
}

ReactDOM.render(<App titolo="Hey, questa è l'app di Cagni" welcome="Benvenuto nell'app"/>, document.getElementById('app'));