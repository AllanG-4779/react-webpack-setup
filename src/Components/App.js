import "../styles/trial.scss";
import React from "react";
import axios from "axios";
import Post from "./Post";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      items: [{ id: 1, title: "Fetching..." }],
      filtered: [],
      postPage: 4,
      current_page: 1,
    };
  }

  componentDidMount() {
      console.log("hello")
    axios
      .get("http://jsonplaceholder.typicode.com/todos/")
      .then((data) => this.setState({ items: data.data }))
      .catch((error) => console.log(error));
    //   method: "GET",
    //   url: "",
    //   params: { q: "San Francisco" },
    //   headers: {

    //   },
    // };
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState !== this.state.search) {
    }
  }
  filter_data = () => {
    let reg = new RegExp(`${this.state.search}`, "i");
    this.setState({
      filtered: this.state.items.filter((item) => {
        if (reg.test(item.title)) {
          return item;
        }
      }),
    });
  };

  render() {
    let index_of_last_post = this.state.postPage * this.state.current_page;
    let index_of_first_post = index_of_last_post - this.state.postPage;
    let current_posts = this.state.filtered.slice(
      index_of_first_post,
      index_of_last_post
    );

    return (
      <div id="app">
        <div className="search-bar">
          <h3>Search Filter</h3>
          <input
            type="text"
            value={this.state.filter}
            onChange={(e) => {
              
              this.setState({ search: e.target.value });
             
            }}
          />
        </div>
        <Post posts={current_posts} />
      </div>
    );
  }
}
export default App;
