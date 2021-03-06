var React = require('react');
var ComboBox = require('../base/ComboBox.react');

var FontFamilyDropdown = React.createClass({
	getInitialState:function(){
		return {
			handle:function(){}
		}
	},
	open:function(position,handle){
		this.setState({
			handle:handle
		})
		this.refs.root.open(position);
	},
	close:function(){
		this.refs.root.close();
	},
	toggle:function(position){
		this.refs.root.toggle(position);
	},
	handleSelect:function(e){
		e = e || event;
		var target = e.target || e.srcElement;
		var value = target.getAttribute('data-value');
		if(this.state.handle){
			this.state.handle(e,value);
		}
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
		this.close();
	},
	render:function(){
		var handleSelect = this.handleSelect;
		var fontfamily = this.props.fontfamily?this.props.fontfamily:[];
		var props = this.props;
		if(this.props.hidden){
			return (<div></div>)
		}else{
			return (<ComboBox ref="root" className="fontfamily-combobox">
				<ul>
					{
						fontfamily.map(function(ele,pos){
							return (<li className={ele.value==props.value?"active":""} key={pos} data-value={ele.value} onClick={handleSelect}>
									<span data-value={ele.value} style={{"fontFamily":ele.value}}>{ele.name}</span>
									</li>)
						})
					}
				</ul>
			</ComboBox>)
		}
	}
})
		
module.exports = FontFamilyDropdown;