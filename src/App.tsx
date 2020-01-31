import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { Button } from 'antd';


import { ContainedButton } from './components/Button';
import Card from './components/Card';

const App: React.FC = () => {
  const handleClick = (name: string) => {
    return name;
  };

  return (
    <div className="">
          <Button type="primary" className="text-red-500">Button</Button>

      <header className="">
        <img src={logo} className="h-12 w-12" alt="logo" /  >
          <h1>h1 heading </h1>
          <h2>h2 heading </h2>
        <p className="text-red-500 md:hover:text-yellow-700">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ContainedButton />
        <Card />
        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
            <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
          </div>
        </div>
        <div onClick={() => handleClick("demo")}>Learn React</div>
        <form>
          <input className="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300" />
          <button className="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
        </form>
      </header>
    </div>
  )
};

export default App;
