import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  //incorporating local storage
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <br></br>
        <h3 className="list">
          ✿ <u>To-Do List:</u> This enables us to see the tasks we want to do
          and we can plan and execute them better. Writing lists means we get
          our thoughts out of our head. It also stops our brains from working
          overtime in trying to remind us of the things to do.
        </h3>
        <h3 className="list">
          ✿ <u>Gratitude List:</u> It's east to fixate on the bad things in
          life, so take a few minutes to acknowledge the good instead. Anxiety
          is often characterised by 'thinking the worst' and by focusing on all
          the good things in our lives, we become more naturally optimistic and
          therefore less anxious.
        </h3>
        <h3 className="list">
          ✿ <u>Today's Achievements:</u> Tackled something difficult today? Make
          a note of it. Reflect on every achievement you've made today, no
          matter how big or small. It's the litthe things that add up to that
          feeling of accomplishment.
        </h3>

        <div className="listDiv">
          <div className="listName">
            My List:
            <br />
            <input
              className="listInput"
              type="text"
              placeholder="Don't Worry"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="listBtn"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              +
            </button>
            <br />
            <ul>
              {this.state.list.map(item => {
                return (
                  <ul className="listItems" key={item.id}>
                    ✿ {item.value}
                    <button
                      className="deleteBtn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<Todo />, document.getElementById("root"));

export default List;
