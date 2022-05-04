let WordsFilter=React.createClass({

    displayName: 'WordsFilter',

    propTypes: {
        list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                text: React.PropTypes.string.isRequired,
            })
        )
    },

    getInitialState: function(){
        return {
            isAlphabet: false,
            isLetter: '',
            result: [],
        };
    },

    alfabetChecked: eo => {
        this.setState( {isAlphabet: eo.target.checked}, this.processList);
    },

    sortList: eo => {
        this.setState( {isLetter: eo.target.value}, this.processList );
    },
    
    reset: eo => {
        this.setState( {isAlphabet: false, isLetter: ''}, this.processList )
    },

    processList: () => {
        if (this.state.isAlphabet) {
            listCode.sort();
        }
        if (this.state.isLetter) {

        }
        this.setState( {result: listCode} );
    },

    render: function() {
        let listCode=this.props.list.map( word =>
            React.DOM.option({key: word.code, value: word.code}, word.text)
            );
        return React.DOM.div( {className:'WordsFilter'},
            React.DOM.div( {className: 'blockFilters'},
                React.DOM.input( {type:'checkbox', name: 'filterAlfabet', checked: this.state.isAlphabet, onChange: this.alfabetChecked} ),
                React.DOM.input( {type: 'text', name:'enterLetter', value: this.state.isLetter, onChange: this.sortList} ),
                React.DOM.input( {type: 'button', value:'Сброс', onClick: this.reset } ),
            ),
            React.DOM.select({className:'List', size: 3}, listCode)
        );
    }
})