(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/basics/the_basics.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,p(t).call(this,e))).layout=null,n}var n,a,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"the-basics"}},"The Basics"),o.a.createElement(r.MDXTag,{name:"p",components:t},"This section is intended to get you up to speed quickly on the syntax for writing smart contracts on NEAR."),o.a.createElement(r.MDXTag,{name:"p",components:t},"If you want to jump in and use some existing templates, check out the ",o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Tutorials")," section."),o.a.createElement(r.MDXTag,{name:"p",components:t},"For these docs, we will generally assume that you have at least a basic understanding of programming languages."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"terminology"}},"Terminology"),o.a.createElement(r.MDXTag,{name:"p",components:t},'You deploy your application\'s back-end to the blockchain, where it is called a "smart contract" or just "contract" for short.'),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"language"}},"Language"),o.a.createElement(r.MDXTag,{name:"p",components:t},"NEAR contracts are written in ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.typescriptlang.org/"}},"TypeScript"),', a "typed superset" of JavaScript which can be compiled to plain JavaScript.  If you know JavaScript, you will have little problem working with TypeScript. If you have also worked with statically typed languages like C# or Java before, even better.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"You don't even ",o.a.createElement(r.MDXTag,{name:"em",components:t,parentName:"p"},"technically")," need to know JavaScript to learn TypeScript but you probably should. TypeScript is sort of like JavaScript with training wheels."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Why TypeScript?")," TypeScript is the most developer-friendly language which compiles easily into Web Assembly (WASM), which is how we run code on each of the nodes which make up the network.  You could compile JavaScript the same way but it is quite inefficient."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Ultimately, this is the easiest way to write blockchain-based contracts that you'll find."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Note that only the contracts themselves are written in TypeScript -- the web pages which serve them will use the same HTML, CSS and JavaScript (possibly with ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org/"}},"React"),") that they always have.  Test files can be written using a normal JavaScript testing library like ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://jasmine.github.io/"}},"Jasmine"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"a-5-minute-typescript-primer"}},"A 5 Minute TypeScript Primer"),o.a.createElement(r.MDXTag,{name:"p",components:t},"If you want a rapid primer on TypeScript, check out the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"}},"TypeScript in 5 minutes")," tutorial from their documentation."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Your best ongoing reference is the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.typescriptlang.org/docs/handbook/basic-types.html"}},"TypeScript Handbook"),", which is cited often below."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Here are the rapid-fire basics:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"File extensions use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},".ts")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"You can write any valid JavaScript inside a TypeScript file."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},'Add "type annotations" (force the function argument to be a particular type) with a colon, eg. ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"function foo(bar: string){...}")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"public")," in a class constructor signature to automatically create properties of that name, eg. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"constructor(public foo: string, public bar: string){...}"))),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"key-concepts"}},"Key Concepts"),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"mental-models"}},"Mental Models"),o.a.createElement(r.MDXTag,{name:"p",components:t},'Writing a contract is just like writing a "normal" web application in most ways.  When in doubt, use the same mental models you already understand from other types of programming.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"There are a few key concepts which are either different or worth highlighting specifically:"),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},"The state of the contract, which you would normally store by writing values into a database, is instead stored on the blockchain using a simple key-value store called ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"globalStorage")," (which behaves similarly to web browser storage or any other key-value database).")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},'Each operation has a certain cost associated with it.  More complex operations (including storage on chain) have a higher cost.  This cost is generally accounted for using a measure called "gas". This is currently not enabled in this version of the environment but will be included in future releases. Who pays for gas (and how) to run contract code is an important issue.')),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},"Similarly to how an HTTP request runs on a web server, each function call to a smart contract gets executed in an entirely new stateless environment on the blockchain. Specifically, each node in the relevant shard (which typically contains around 100 nodes) spins up a virtual machine to execute that code locally. That virtual machine then executes the Web Assembly (WASM) that your TypeScript code has been compiled into. Once it is done, the node quits the VM."))),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"the-basics-1"}},"The Basics"),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"contracts"}},"Contracts"),o.a.createElement(r.MDXTag,{name:"p",components:t},'What is a "contract?" It\'s the container for all the variables, functions and state of the blockchain portion of your application.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"Create a new contract:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"contract helloWorld {\n  // Code!\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"You can also access the context in which the contract is being executed by using the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"contractContext")," object.  This gives you access to variables like the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"sender")," or the contract's name via ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"contractName"),".  See more about ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"contractContext")," in ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/nearprotocol/near-runtime-ts/blob/master/apidoc/classes/_near_.contractcontext.md"}},"autogenerated docs"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"state"}},"State"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Like with web servers, function calls are stateless.  Any state that you want to save to the blockchain needs to be explicitly saved by interacting with the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"globalStorage")," object."),o.a.createElement(r.MDXTag,{name:"p",components:t},"This object provides an interface to the blockchain storage.  It is a standard key-value store where keys are strings and the values can be multiple types including ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"string"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"bytes"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"u64"),".  Anything else needs to be first converted into these types."),o.a.createElement(r.MDXTag,{name:"p",components:t},"See ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/nearprotocol/near-runtime-ts/blob/master/apidoc/classes/_near_.globalstorage.md"}},"the GlobalStorage github docs")," for the full reference]."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"math"}},"Math"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Mathematical operations in TypeScript are done in the same way as JavaScript.  See more in ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.tutorialspoint.com/typescript/typescript_arithmetic_operators_examples.htm"}},"this article"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"arrays"}},"Arrays"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Arrays are useful for storing multiple instances of state, sort of like a small database.  Again, arrays here are just ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.typescriptlang.org/docs/handbook/basic-types.html"}},"normal TypeScript arrays")," which act a lot like JavaScript arrays and have useful methods like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"push")," available."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"// Creating a dynamic size array\nlet myArr = new Array<number>();\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"There is not currently syntactic sugar for array iterators like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"map"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"iteration"}},"Iteration"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Iteration follows the standard TypeScript format:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"// set i to a type u64\nfor (let i: u64 = startIndex; i < someValue; i++) {\n  // do stuff\n}\n")),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"classes"}},"Classes"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Classes are normal TypeScript classes and more information can be found in the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.typescriptlang.org/docs/handbook/classes.html"}},"TypeScript Handbook"),". We don't have structs, we have TypeScript classes instead."),o.a.createElement(r.MDXTag,{name:"p",components:t},"You will generally want to define your classes in a different file and then import them:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"// 1. define the class in the `assembly/model.ts` file\nexport class PostedMessage {\n  sender: string;\n  text: string;\n}\n")),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},'// 2. Import the class to your `assembly/main.ts` file\nimport { PostedMessage } from "./model.near";\n')),o.a.createElement(r.MDXTag,{name:"p",components:t},"There are no structs."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"function-declarations-and-return-values"}},"Function Declarations and Return Values"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Function declarations follow standard TypeScript conventions, including the parameters they take, optional arguments and return values. See the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.typescriptlang.org/docs/handbook/functions.html"}},"TypeScript Handbook")," for more info."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"private-and-public-functions"}},"Private and Public Functions"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Methods with names prepended by an underscore ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"_")," are not callable from outside the contract. All others are."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"export function _myPrivateFunction(someInput: string): void {\n  // Code here!\n}\n\nexport function myPublicFunction(someInput: string): void {\n  // Code here!\n}\n")),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"view-and-change-functions"}},"View and Change functions"),o.a.createElement(r.MDXTag,{name:"p",components:t},'There are two types of functions that can interact with the blockchain -- "view" functions and "change" functions.'),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"View")," functions do not actually change the state of the blockchain.  Imagine a function which, for instance, just checks the balance of a particular account. Because no state is changed, these functions are lightweight and generally safe.")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"p",components:t,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Change")," functions modify state, for example by updating the balance someone holds in their account.  You need to be careful with these functions so they typically require explicit user authorization and are treated somewhat differently."))),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"random-numbers"}},"Random Numbers"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Randomness is challenging in blockchains because multiple nodes have to execute the same code and come to a consensus on the same result -- so all code has to be deterministic. Thus one should always be cautious when employing randomness to realize that it can be predicted in advance to some degree."),o.a.createElement(r.MDXTag,{name:"p",components:t},"In this case, randomness is calculated using the hash of the block's seed. This provides a suitably random number for any low-stakes calculations but should be avoided for high-stakes ones like lottery payouts."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"// returns a random 32-bit integer\nlet myRandomNumber = near.random32();\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},"See more about functions exposed in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"near")," namespace in ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/nearprotocol/near-runtime-ts/blob/master/apidoc/modules/_near_.near.md#random32"}},"the Github docs"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"events"}},"Events"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Sometimes you want your front end to automatically update if something changes on the back end. For example, if you have a messaging app that should update your screen when your friend sends you a message.  Currently, you will need to poll the chain to make this happen."),o.a.createElement(r.MDXTag,{name:"p",components:t},"In the future, we may expose event emitters and listeners as syntactic sugar. If this is important to you, reach out ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://near.chat"}},"on Discord"),"."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"time"}},"Time"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Time is one of the most difficult concepts in blockchains. In a singe-server-based environment like web developers are used to, the server's (or database's) clock is ok to rely on for creating timestamps."),o.a.createElement(r.MDXTag,{name:"p",components:t},'Because the blockchain\'s state is determined by a consensus among many nodes and must be deterministic and adversary-resistant, there is no way to settle on a "correct" clock time while code is being run.'),o.a.createElement(r.MDXTag,{name:"p",components:t},"You can pull timestamps from the client side (eg the JavaScript running on the user's computer) but that should come with all the usual warning about not trusting anything a client sends."),o.a.createElement(r.MDXTag,{name:"p",components:t},"For less exact measures of time, the block index value is sufficient. This will look something like:"),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"// Note: Not implemented yet...\ncontractContext.blockIndex();\n")),o.a.createElement(r.MDXTag,{name:"p",components:t},'Some solutions to the time issue include using "trusted oracles" but that\'s outside the scope of this doc.'),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"interfacing-with-your-front-end"}},"Interfacing with your Front End"),o.a.createElement(r.MDXTag,{name:"p",components:t},"See the Client API section of the documentation for more information on how to interface with your app's front end."))}}])&&i(n.prototype,a),s&&i(n,s),t}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-basics-the-basics.c533aa3ead60de154af2.js.map