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
            isLetter: ' ',
            result: this.props.list,
        };
    },

    alfabetChecked: function(eo) {
        this.setState( {isAlphabet: eo.target.checked}, this.processList);
    },

    sortList: function(eo) {
        this.setState( {isLetter: eo.target.value}, this.processList );
    },
    
    reset: function(eo) {
        this.setState( {isAlphabet: false, isLetter: ''}, this.processList )
    },

    processList: function() {
        let listCode1=this.props.list.map( word =>
            React.DOM.option({key: word.code, value: word.code}, word.text)
            );
        console.log(listCode1);

        if (this.state.isAlphabet) {
            listCode1.sort(listCode1.text);
            console.log(listCode1);
        this.setState( {result: listCode1} );
        }

        if (this.state.isLetter)   {
            listCode1.filter(word=> {
                return word.includes(this.state.isLetter);
            });
        }    
        this.setState( {result: listCode1} );
        console.log(this.state.result);
    },

    render: function() {
        let listCode=this.state.result.map( word =>
            React.DOM.option({key: word.code, value: word.code}, word.text)
            );
        return React.DOM.div( {className:'WordsFilter'},
            React.DOM.div( {className: 'blockFilters'},
                React.DOM.input( {type:'checkbox', name: 'filterAlfabet', checked: this.state.isAlphabet, onChange: this.alfabetChecked} ),
                React.DOM.input( {type: 'text', name:'enterLetter', value: this.state.isLetter, onChange: this.sortList} ),
                React.DOM.input( {type: 'button', value:'Сброс', onClick: this.reset } ),
            ),
            React.DOM.select({className:'List', size: 3}, listCode),
        );
    }
})