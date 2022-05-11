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
            result: this.props.list.map( word =>
                React.DOM.option({key: word.code, value: word.code}, word.text)
            ),
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
        // let listCode=this.props.list.map( word =>
        //     React.DOM.option({key: word.code, value: word.code}, word.text)
        //     );
        let listCode=this.state.result;
        console.log(listCode);
        if (this.state.isAlphabet) {
            listCode.sort();
            console.log(listCode);

            // this.setState( {isAlphabet: true} );
        }
        if (this.state.isLetter) {

        }
        this.setState( {result: listCode} );
        console.log(this.state.result);

    },

    render: function() {
        return React.DOM.div( {className:'WordsFilter'},
            React.DOM.div( {className: 'blockFilters'},
                React.DOM.input( {type:'checkbox', name: 'filterAlfabet', checked: this.state.isAlphabet, onChange: this.alfabetChecked} ),
                React.DOM.input( {type: 'text', name:'enterLetter', value: this.state.isLetter, onChange: this.sortList} ),
                React.DOM.input( {type: 'button', value:'Сброс', onClick: this.reset } ),
            ),
            React.DOM.select({className:'List', size: 3}, this.state.result)
        );
    }
})