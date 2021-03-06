var React = require('react');
var ReactDOM = require('react-dom');

var PageForDesk = React.createClass({

    handleClose: function () {
        if (this.props.onClose) {
            this.props.onClose();
        }
    },

    handleDelete: function () {
        if (this.props.onDelete) {
            this.props.onDelete();
        }
    },

    render: function () {
        var style = {
            position: 'relative',
            padding: '2em',
            minHeight: '300px'
        };
        var overlayStyle = {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '2em',
            'zIndex': 9999,
            'overflow': 'auto'
        };
        const closeButtonStyle = {
            position: 'absolute',
            top: '1em',
            right: '1em',
            height: '1em',
            color: '#224466',
            verticalAlign: 'middle',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '16px'
        };
        const deleteButtonStyle = {
            position: 'absolute',
            bottom: '1em',
            right: '1em',
            height: '1em',
            color: '#770A0B',
            verticalAlign: 'middle',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '16px'
        };
        return (
            <div style={overlayStyle}>
                <div style={{position: 'relative', width: '100%', backgroundColor: '#fff', borderRadius: '5px'}}>
                    <div style={style}>
                        {this.props.children}
                    </div>
                    <span
                        style={deleteButtonStyle}
                        onClick={this.handleDelete}>[Delete]</span>
                    <span
                        style={closeButtonStyle}
                        onClick={this.handleClose}>[Close]</span>
                </div>
            </div>
        );
    }

});

module.exports = PageForDesk;
