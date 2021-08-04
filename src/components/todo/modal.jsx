import React from "react";
import { connect } from "react-redux";
import actions from "~/actions/todo";

class ModalContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			completed: false,
		};
	}

	handleChange = (e) => {
		this.setState({ title: e.target.value });
	}

	handleInputChange = (e) => {
		this.setState({ completed: e.target.checked });
	}

	initModal = () => {
		this.setState({
			title: this.props.title,
			completed: this.props.completed,
		});
	}

	updateData = (e) => {
		e.target.disabled = true;
		this.props.update(this.props.id, this.state, e.target);
	}

	componentDidMount() {
		this.modal.addEventListener("shown.bs.modal", this.initModal);
	}

	componentWillUnmount() {
		this.modal.removeEventListener("shown.bs.modal", this.initModal);
	}

	render() {
		return (
			<div ref={(r) => { this.modal = r; }} className="modal fade" id="todoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="todoModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="todoModalLabel">{this.props.title}</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<input type="text" value={this.state.title} onChange={this.handleChange} />
							<input
								type="checkbox"
								checked={this.state.completed}
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.updateData}>Save</button>
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mstp = ({ todo }) => ({
	...todo.edit,
});

const mdtp = (dispatch) => ({
	update: async (todoId, { title, completed }, button) => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("completed", completed);
		const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + todoId, {
			method: "PATCH",
			body: formData,
		});
		if(response.status === 200) {
			dispatch(actions.update(todoId, title, completed));
		}
		button.disabled = false;
	},
});

export default connect(mstp, mdtp)(ModalContainer);
