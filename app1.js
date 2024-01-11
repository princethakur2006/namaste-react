//if we have  to create nested element in react

/* <div id = parent>
    <div id = child>
        <h1>im  a h1 tag</h1>
        <h2>im  a h2 tag</h2>
        
    </div>

    <div id = child2>
        <h1>im  a h1 tag</h1>
        <h2>im  a h2 tag</h2>
        
    </div>
</div> */

const parent = React.createElement(
  "div",
  {id: "parent"},
  [ React.createElement(
    "div",
    {id: "child"},
    [React.createElement("h1", {}, "iam a h1 tag"),
    React.createElement("h2", {}, "iam a h2 tag")]),

    React.createElement(
    "div",
    {id: "child2"},
    [React.createElement("h1", {}, "iam a h1 tag"),
    React.createElement("h2", {}, "iam a h2 tag")])  ]

   
);







// const heding = React.createElement(
//     "h1",
//      {id: "heding", xyz : "abc"},
//     "hello world inside react");

    console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);