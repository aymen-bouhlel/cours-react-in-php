console.log("kikoo Youtube");


class LikeButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: props.likes || 0,
            isLiked: props.isLiked || false
        };
    }

    handleClick() {
        const isLiked = this.state.isLiked;
        const likes = this.state.likes + (isLiked ? -1 : 1);

        this.setState({ likes: likes,  isLiked: !isLiked });
    }

    render() {
        return React.createElement(
            'button', 
            {className: 'btn btn-link', onClick: () => this.handleClick() }, 
            this.state.likes,
            " ",
            "J'aime !"
        );
    }
}

document.querySelectorAll('span.react-like').forEach(function(span) {
    ReactDOM.render(React.createElement(LikeButton), span);
});