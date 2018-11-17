import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Jobs from './components/Jobs';
import About from './components/About';
import Post from './components/Post';


class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Jobs} />
                    <Route exact path="/" component={About} />
                    <Route exact path="/" component={Post} />
                </div>
            </Router>
        )


    }


}



// class ScrollingList extends React.Component {
//     constructor(props) {
//       super(props);
//       this.listRef = React.createRef();
//     }
  
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//       // Are we adding new items to the list?
//       // Capture the scroll position so we can adjust scroll later.
//       if (prevProps.list.length < this.props.list.length) {
//         const list = this.listRef.current;
//         return list.scrollHeight - list.scrollTop;
//       }
//       return null;
//     }
  
//     componentDidUpdate(prevProps, prevState, snapshot) {
//       // If we have a snapshot value, we've just added new items.
//       // Adjust scroll so these new items don't push the old ones out of view.
//       // (snapshot here is the value returned from getSnapshotBeforeUpdate)
//       if (snapshot !== null) {
//         const list = this.listRef.current;
//         list.scrollTop = list.scrollHeight - snapshot;
//       }
//     }
  
//     render() {
//       return (
//         <div ref={this.listRef}>{/* ...contents... */}</div>
//       );
//     }
//   }

