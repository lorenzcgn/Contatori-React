class ButtonCounter extends React.Component {
    render() {
        console.log(this.props);
        const{counter, onIncrement}=this.props;
        return (
            <div>
                <button class="button btn blacck center" onClick={onIncrement}>Aumenta il contatore</button>
                    <div>
                        <span>Contatore:</span> <span class="btn blacck center">{counter}</span>
                    </div>
            </div>
        );
    }
}